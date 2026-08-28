const TRAIL_BREAKPOINT = '(min-width: 768px)';
const TRAIL_POINTER = '(hover: hover) and (pointer: fine)';
const TRAIL_REDUCED_MOTION = '(prefers-reduced-motion: reduce)';
const TRAIL_SPAWN_INTERVAL = 900;
const TRAIL_SPAWN_DISTANCE = 100;
const TRAIL_DURATION = 400;
const TRAIL_EASING = 'cubic-bezier(.19, 1, .22, 1)';
const TRAIL_LERP = 0.1;
const TRAIL_SIZE_SCALE = 1.618;

const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const lerp = (from, to, amount) => from + ((to - from) * amount);

const randomWidth = (aspectRatio) => {
  const desktop = window.matchMedia(TRAIL_BREAKPOINT).matches;
  const minimum = aspectRatio > 1 ? (desktop ? 325 : 225) : (desktop ? 275 : 175);
  const maximum = aspectRatio > 1 ? (desktop ? 500 : 350) : (desktop ? 350 : 250);
  const steps = Math.floor((maximum - minimum) / 20);
  return (minimum + (20 * Math.floor(Math.random() * steps))) * TRAIL_SIZE_SCALE;
};

const setupTrail = (trail) => {
  const layers = [...trail.querySelectorAll('.memory-lane-trail-layer')];
  if (!layers.length) return;

  const reducedMotion = window.matchMedia(TRAIL_REDUCED_MOTION);
  const interactivePointer = window.matchMedia(TRAIL_POINTER);
  const desktop = window.matchMedia(TRAIL_BREAKPOINT);

  if (!desktop.matches) return;
  if (reducedMotion.matches) {
    trail.dataset.trailStatic = 'true';
    return;
  }

  const usesCursor = interactivePointer.matches;
  const initialPosition = usesCursor ? { x: 0, y: 0 } : { x: 267, y: 375 };

  const state = {
    active: !usesCursor,
    visible: false,
    now: { ...initialPosition },
    cache: { ...initialPosition },
    previousImage: { x: 0, y: 0 },
    elapsed: 0,
    index: 0,
    frame: 0,
    lastFrame: 0,
  };

  const placeLayer = () => {
    state.index += 1;
    const layer = layers[state.index % layers.length];
    const sourceWidth = Number(layer.dataset.width);
    const sourceHeight = Number(layer.dataset.height);
    const aspectRatio = sourceWidth / sourceHeight;
    const width = randomWidth(aspectRatio);
    const height = width / aspectRatio;
    const origin = { ...state.cache };
    const target = { ...state.now };

    layer.getAnimations().forEach((animation) => animation.cancel());
    layer.style.width = `${width}px`;
    layer.style.height = `${height}px`;
    layer.style.zIndex = String(state.index);
    layer.style.opacity = '1';
    layer.style.transform = `translate(-50%, -50%) translate3d(${target.x}px, ${target.y}px, 0)`;
    layer.animate([
      { transform: `translate(-50%, -50%) translate3d(${origin.x}px, ${origin.y}px, 0)`, opacity: 1 },
      { transform: `translate(-50%, -50%) translate3d(${target.x}px, ${target.y}px, 0)`, opacity: 1 },
    ], {
      duration: TRAIL_DURATION,
      easing: TRAIL_EASING,
    });

    state.previousImage = target;
  };

  const tick = (time) => {
    const delta = state.lastFrame ? time - state.lastFrame : 0;
    state.lastFrame = time;

    if (state.visible && state.active) {
      state.cache.x = lerp(state.cache.x || state.now.x, state.now.x, TRAIL_LERP);
      state.cache.y = lerp(state.cache.y || state.now.y, state.now.y, TRAIL_LERP);
      state.elapsed += delta;

      const intervalElapsed = state.elapsed >= TRAIL_SPAWN_INTERVAL;
      const cursorTravelled = distance(state.now, state.previousImage) > TRAIL_SPAWN_DISTANCE;
      if (intervalElapsed || cursorTravelled) {
        if (intervalElapsed) state.elapsed %= TRAIL_SPAWN_INTERVAL;
        placeLayer();
      }
    }

    state.frame = requestAnimationFrame(tick);
  };

  if (usesCursor) {
    trail.addEventListener('mousemove', (event) => {
      const bounds = trail.getBoundingClientRect();
      state.now = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };
      if (!state.active) {
        state.active = true;
        state.cache = { ...state.now };
      }
    });
  }

  const observer = new IntersectionObserver(([entry]) => {
    state.visible = entry.isIntersecting;
    if (!state.visible) state.lastFrame = 0;
  });
  observer.observe(trail);

  state.frame = requestAnimationFrame(tick);
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(state.frame);
    observer.disconnect();
  }, { once: true });
};

document.querySelectorAll('[data-memory-lane-trail]').forEach(setupTrail);
