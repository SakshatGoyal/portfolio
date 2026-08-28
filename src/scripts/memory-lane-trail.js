const TRAIL_POINTER = '(hover: hover) and (pointer: fine)';
const TRAIL_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const TRAIL_SPAWN_INTERVAL = 1500;
const TRAIL_SPAWN_DISTANCE = 100;
const TRAIL_DURATION = 400;
const TRAIL_EASING = 'cubic-bezier(.19, 1, .22, 1)';
const TRAIL_LERP = 0.1;
const TRAIL_REFERENCE_WIDTH = 1200;
const TRAIL_REFERENCE_HEIGHT = 675;
const TRAIL_REFERENCE_AREA = TRAIL_REFERENCE_WIDTH * TRAIL_REFERENCE_HEIGHT;
const TRAIL_LANDSCAPE_WIDTH = 600;
const TRAIL_PORTRAIT_HEIGHT = 600;
const TRAIL_SQUARE_SIZE = 500;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (from, to, amount) => from + ((to - from) * amount);
const clampPosition = (position, bounds) => ({
  x: Math.min(Math.max(position.x, 0), bounds.width),
  y: Math.min(Math.max(position.y, 0), bounds.height),
});

export const surfaceAreaScale = (width, height) => (
  Math.min(1, Math.sqrt(Math.max(0, width * height) / TRAIL_REFERENCE_AREA))
);

export const assetCategory = (width, height) => {
  const aspectRatio = width / height;
  if (aspectRatio < 0.9) return 'portrait';
  if (aspectRatio <= 1.1) return 'square';
  return 'landscape';
};

export const categoryDimensions = (width, height, scale = 1) => {
  const aspectRatio = width / height;
  const category = assetCategory(width, height);
  if (category === 'portrait') {
    const targetHeight = TRAIL_PORTRAIT_HEIGHT * scale;
    return { category, width: targetHeight * aspectRatio, height: targetHeight };
  }
  if (category === 'square') {
    const targetWidth = TRAIL_SQUARE_SIZE * scale;
    return { category, width: targetWidth, height: targetWidth / aspectRatio };
  }
  const targetWidth = TRAIL_LANDSCAPE_WIDTH * scale;
  return { category, width: targetWidth, height: targetWidth / aspectRatio };
};

export const shuffleAssets = (assets, previousSrc = '', random = Math.random) => {
  const shuffled = [...assets];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  if (shuffled.length > 1 && shuffled[0]?.src === previousSrc) {
    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }
  return shuffled;
};

const parseAssets = (trail) => {
  try {
    const assets = JSON.parse(trail.dataset.trailAssets || '[]');
    return assets.filter(({ src, width, height }) => (
      typeof src === 'string' && Number(width) > 0 && Number(height) > 0
    ));
  } catch {
    return [];
  }
};

const setupTrail = (trail) => {
  const layers = [...trail.querySelectorAll('.memory-lane-trail-layer')];
  const assets = parseAssets(trail);
  if (!layers.length || layers.length !== assets.length) return;

  const reducedMotion = window.matchMedia(TRAIL_REDUCED_MOTION);
  const interactivePointer = window.matchMedia(TRAIL_POINTER);
  const usesCursor = interactivePointer.matches;
  const initialBounds = trail.getBoundingClientRect();
  const initialPosition = { x: initialBounds.width / 2, y: initialBounds.height / 2 };
  const records = layers.map((layer, index) => ({
    asset: assets[index],
    src: assets[index].src,
    image: layer.querySelector('img'),
    layer,
    failed: false,
    position: null,
    ready: false,
  }));

  const state = {
    active: !usesCursor,
    visible: false,
    now: { ...initialPosition },
    cache: { ...initialPosition },
    bounds: { width: initialBounds.width, height: initialBounds.height },
    surfaceScale: surfaceAreaScale(initialBounds.width, initialBounds.height),
    lastPlacementTime: null,
    lastPointerPlacement: { ...initialPosition },
    index: 0,
    queue: [],
    previousSrc: '',
    frame: 0,
  };

  const sizeRecord = (record) => {
    const dimensions = categoryDimensions(
      record.asset.width,
      record.asset.height,
      state.surfaceScale,
    );
    record.layer.dataset.assetCategory = dimensions.category;
    record.layer.style.width = `${dimensions.width}px`;
    record.layer.style.height = `${dimensions.height}px`;
  };

  const markReady = async (record) => {
    if (!record.image?.complete || !record.image.naturalWidth) return;
    try {
      await record.image.decode();
      record.ready = true;
      record.layer.dataset.trailReady = 'true';
    } catch {
      record.failed = true;
      record.layer.dataset.trailFailed = 'true';
    }
  };

  records.forEach((record) => {
    sizeRecord(record);
    if (record.image?.complete) {
      void markReady(record);
      return;
    }
    record.image?.addEventListener('load', () => { void markReady(record); }, { once: true });
    record.image?.addEventListener('error', () => {
      record.failed = true;
      record.layer.dataset.trailFailed = 'true';
    }, { once: true });
  });

  const refillQueue = () => {
    const available = records.filter((record) => !record.failed);
    state.queue = shuffleAssets(available, state.previousSrc);
  };

  const nextRecord = () => {
    if (!state.queue.length) refillQueue();
    while (state.queue[0]?.failed) state.queue.shift();
    return state.queue[0]?.ready ? state.queue.shift() : null;
  };

  const placeRecord = (record, staticPosition = false, placedAt = window.performance.now()) => {
    if (!record?.ready) return false;
    const origin = { ...state.cache };
    const target = clampPosition(staticPosition
      ? { x: state.bounds.width / 2, y: state.bounds.height / 2 }
      : { ...state.now }, state.bounds);

    record.layer.getAnimations().forEach((animation) => animation.cancel());
    record.layer.style.zIndex = String(state.index + 1);
    record.layer.style.opacity = '1';
    record.layer.dataset.trailPlacedAt = String(placedAt);
    record.layer.style.transform = `translate(-50%, -50%) translate3d(${target.x}px, ${target.y}px, 0)`;
    if (!staticPosition) {
      record.layer.animate([
        { transform: `translate(-50%, -50%) translate3d(${origin.x}px, ${origin.y}px, 0)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate3d(${target.x}px, ${target.y}px, 0)`, opacity: 1 },
      ], {
        duration: TRAIL_DURATION,
        easing: TRAIL_EASING,
      });
    }

    state.index += 1;
    state.previousSrc = record.asset.src;
    state.lastPointerPlacement = target;
    record.position = target;
    return true;
  };

  const resizeObserver = new ResizeObserver(([entry]) => {
    const previousBounds = state.bounds;
    const nextBounds = {
      width: entry.contentRect.width,
      height: entry.contentRect.height,
    };
    const scaleX = previousBounds.width ? nextBounds.width / previousBounds.width : 1;
    const scaleY = previousBounds.height ? nextBounds.height / previousBounds.height : 1;
    state.bounds = nextBounds;
    state.now = clampPosition({ x: state.now.x * scaleX, y: state.now.y * scaleY }, nextBounds);
    state.cache = clampPosition({ x: state.cache.x * scaleX, y: state.cache.y * scaleY }, nextBounds);
    state.lastPointerPlacement = clampPosition({
      x: state.lastPointerPlacement.x * scaleX,
      y: state.lastPointerPlacement.y * scaleY,
    }, nextBounds);
    state.surfaceScale = surfaceAreaScale(nextBounds.width, nextBounds.height);
    records.forEach((record) => {
      sizeRecord(record);
      if (!record.position) return;
      record.position = clampPosition({
        x: record.position.x * scaleX,
        y: record.position.y * scaleY,
      }, nextBounds);
      record.layer.getAnimations().forEach((animation) => animation.cancel());
      record.layer.style.transform = `translate(-50%, -50%) translate3d(${record.position.x}px, ${record.position.y}px, 0)`;
    });
  });
  resizeObserver.observe(trail);

  if (reducedMotion.matches) {
    const revealStatic = () => {
      const firstReady = records.find((record) => record.ready);
      if (firstReady) {
        placeRecord(firstReady, true);
        trail.dataset.trailStatic = 'true';
        return;
      }
      window.requestAnimationFrame(revealStatic);
    };
    revealStatic();
    window.addEventListener('pagehide', () => resizeObserver.disconnect(), { once: true });
    return;
  }

  const tick = (time) => {
    if (state.visible && state.active) {
      state.cache.x = lerp(state.cache.x || state.now.x, state.now.x, TRAIL_LERP);
      state.cache.y = lerp(state.cache.y || state.now.y, state.now.y, TRAIL_LERP);
      if (state.lastPlacementTime === null) state.lastPlacementTime = time;

      if (time - state.lastPlacementTime >= TRAIL_SPAWN_INTERVAL) {
        const record = nextRecord();
        if (placeRecord(record, false, time)) state.lastPlacementTime = time;
      }
    }

    state.frame = requestAnimationFrame(tick);
  };

  trail.addEventListener('pointermove', (event) => {
    if (!usesCursor && event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
    const bounds = trail.getBoundingClientRect();
    state.now = clampPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    }, state.bounds);
    if (!state.active) {
      state.active = true;
      state.cache = { ...state.now };
      state.lastPointerPlacement = { ...state.now };
      state.lastPlacementTime = window.performance.now();
      return;
    }

    if (distance(state.now, state.lastPointerPlacement) >= TRAIL_SPAWN_DISTANCE) {
      const placedAt = window.performance.now();
      const record = nextRecord();
      if (placeRecord(record, false, placedAt)) state.lastPlacementTime = placedAt;
    }
  }, { passive: true });

  const observer = new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    if (state.visible && state.active && state.lastPlacementTime === null) {
      state.lastPlacementTime = window.performance.now();
    }
  });
  observer.observe(trail);

  state.frame = requestAnimationFrame(tick);
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(state.frame);
    observer.disconnect();
    resizeObserver.disconnect();
  }, { once: true });
};

if (typeof document !== 'undefined') {
  document.querySelectorAll('[data-memory-lane-trail]').forEach(setupTrail);
}
