const cubicBezier = (value, x1, y1, x2, y2) => {
  const sample = (t, a, b) => ((1 - 3 * b + 3 * a) * t ** 3) + ((3 * b - 6 * a) * t ** 2) + (3 * a * t);
  let lower = 0;
  let upper = 1;
  let t = value;
  for (let index = 0; index < 12; index += 1) {
    t = (lower + upper) / 2;
    if (sample(t, x1, x2) < value) lower = t;
    else upper = t;
  }
  return sample(t, y1, y2);
};
const celebratoryEaseOut = (value) => cubicBezier(value, 0, 0, 0.3, 1);
const celebratoryEaseIn = (value) => cubicBezier(value, 0.39, 0.06, 1, 1);

// These are fixed 1536px-layout measurements, not responsive calculations.
// Each value is the nearest-ms celebratory Move duration for that reveal's
// clip/rise box (wipe distance = clip width; size = clip width × clip height).
// Keeping the lookup here avoids coupling timing to lazy-media layout work.
const mediaRevealDurations = new Map([
  ['/', [417, 398, 406, 451, 398, 398]],
  ['/work/panw-ai/', [660, 649, 618, 398, 417, 398, 608, 660, 594, 417, 417, 660, 618]],
  ['/work/hbs-ai-institute/', [618, 618, 553, 629, 618, 649, 642, 618, 632, 649, 620, 619, 618]],
  ['/work/one-report/', [618, 354, 367, 354, 367, 354, 367, 618, 618, 618, 618, 618]],
  ['/work/global-data-analytics/', [618, 398, 398, 618, 649, 463, 354, 618, 618, 408, 618, 618, 618, 618]],
  ['/work/hitachi-energy/', [618, 618, 618, 618, 618, 618, 436, 436, 618, 649, 649, 649]],
  ['/work/cisco-customer-insights/', [618, 436, 436, 618, 594, 552, 436, 436, 618, 649, 574, 436, 436, 618, 566, 618]],
]);

const initMediaReveals = (reduceMotion) => {
  const groupSelector = [
    '.media-stack',
    '.media-grid',
    '.asymmetric-grid',
    '.global-research-media',
    '.panw-approach-media',
    '.research-architecture',
  ].join(',');
  document.querySelectorAll(groupSelector).forEach((group) => {
    group.setAttribute('data-media-reveal-group', '');
  });

  const targets = [...document.querySelectorAll('[data-media-reveal]')];
  const durations = mediaRevealDurations.get(location.pathname);
  targets.forEach((target, index) => {
    const duration = durations?.[index];
    if (duration) target.style.setProperty('--media-reveal-duration', `${duration}ms`);
  });
  const mobile = window.matchMedia('(max-width: 671px)').matches;
  document.querySelectorAll('[data-media-reveal-group]').forEach((group) => {
    const directTargets = targets.filter((target) => target.closest('[data-media-reveal-group]') === group);
    const stagger = directTargets.length > 1 ? (mobile ? 55 : 90) : 0;
    directTargets.forEach((target, index) => {
      target.style.setProperty('--media-reveal-delay', `${index * stagger}ms`);
      target.dataset.mediaRevealIndex = String(index);
      target.dataset.mediaRevealStagger = String(stagger);
    });
  });
  targets.filter((target) => !target.closest('[data-media-reveal-group]')).forEach((target) => {
    target.style.setProperty('--media-reveal-delay', '0ms');
    target.dataset.mediaRevealIndex = '0';
    target.dataset.mediaRevealStagger = '0';
  });

  document.documentElement.dataset.mediaMotionReady = 'true';
  if (reduceMotion) {
    targets.forEach((target) => {
      target.classList.add('media-reveal-active');
      target.dataset.mediaRevealComplete = 'true';
    });
    return;
  }

  const states = new WeakMap();
  const anchors = new Map();
  const reveal = (target) => {
    const state = states.get(target);
    if (!state?.intersecting || !state.ready || !state.painted || target.classList.contains('media-reveal-active')) return;
    target.classList.add('media-reveal-active');
    target.dataset.mediaRevealComplete = 'true';
    const siblings = anchors.get(state.anchor) || [];
    if (siblings.every((sibling) => sibling.classList.contains('media-reveal-active'))) {
      observer.unobserve(state.anchor);
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (anchors.get(entry.target) || []).forEach((target) => {
        const state = states.get(target);
        state.intersecting = true;
        reveal(target);
      });
    });
  }, { threshold: 0 });

  targets.forEach((target) => {
    const anchor = target.closest('[data-media-unit]') || target;
    const visual = target.querySelector('[data-media-visual]:not([aria-hidden="true"]), img:not([aria-hidden="true"]), video');
    const state = { anchor, intersecting: false, ready: false, painted: false };
    states.set(target, state);
    anchors.set(anchor, [...(anchors.get(anchor) || []), target]);

    const markReady = () => {
      if (state.ready) return;
      state.ready = true;
      target.dataset.mediaRevealReady = 'true';
      if (state.anchor.getBoundingClientRect().bottom <= 0) state.intersecting = true;
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          state.painted = true;
          reveal(target);
        });
      });
    };

    if (visual) {
      const usable = () => (
        (visual instanceof HTMLImageElement && visual.complete && visual.naturalWidth > 0)
        || (visual instanceof HTMLVideoElement && visual.readyState >= 1 && visual.videoWidth > 0)
      );
      if (usable()) markReady();
      else {
        visual.addEventListener(visual instanceof HTMLVideoElement ? 'loadedmetadata' : 'load', markReady, { once: true });
        visual.addEventListener('error', () => {
          target.dataset.mediaRevealError = 'true';
          markReady();
        }, { once: true });
      }
    } else {
      markReady();
    }
  });
  anchors.forEach((_, anchor) => observer.observe(anchor));

  let scrollFrame = 0;
  const reconcilePassedTargets = () => {
    scrollFrame = 0;
    targets.forEach((target) => {
      const state = states.get(target);
      if (!state?.ready || target.classList.contains('media-reveal-active')) return;
      if (state.anchor.getBoundingClientRect().bottom <= 0) {
        state.intersecting = true;
        reveal(target);
      }
    });
    if (targets.every((target) => target.classList.contains('media-reveal-active'))) {
      window.removeEventListener('scroll', queuePassedTargetCheck);
    }
  };
  const queuePassedTargetCheck = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(reconcilePassedTargets);
  };
  window.addEventListener('scroll', queuePassedTargetCheck, { passive: true });
};

const initBodyReveals = (reduceMotion) => {
  const entries = [];
  const nestedDelays = [0, 70, 125, 170];
  const register = (element, kind, nestedIndex = 0) => {
    if (!(element instanceof HTMLElement) || element.closest('[data-media-caption]')) return;
    if (entries.some((entry) => entry.element === element)) return;
    element.dataset.bodyReveal = '';
    element.dataset.bodyRevealKind = kind;
    element.style.setProperty('--body-nested-delay', `${nestedDelays[Math.min(nestedIndex, nestedDelays.length - 1)]}ms`);
    entries.push({ element, kind });
  };

  const registerContainer = (container, kind) => {
    const prose = [...container.children].flatMap((child) => {
      if (child.matches('p')) return [child];
      if (child.matches('ol, ul')) {
        return [...child.children].map((item) => (
          item.matches('.problem-list > li') ? item.querySelector(':scope > span:last-child') : item
        )).filter(Boolean);
      }
      return [];
    });
    prose.forEach((element, index) => register(element, kind, index));
  };

  document.querySelectorAll('.home-bio').forEach((container) => registerContainer(container, 'intro'));
  document.querySelectorAll('.case-intro').forEach((container) => register(container, 'intro'));
  document.querySelectorAll('.case-section').forEach((container) => register(container, 'standard'));
  document.querySelectorAll('.takeaway-card').forEach((container) => register(container, 'standard'));
  document.querySelectorAll('.metric-tooltip p, .platform-core > p, .platform-contributions > div > p')
    .forEach((element) => register(element, 'standard'));

  document.documentElement.dataset.bodyMotionReady = 'true';
  if (reduceMotion) {
    entries.forEach(({ element }) => element.classList.add('body-reveal-active'));
    return;
  }

  const observer = new IntersectionObserver((observed) => {
    observed.filter((entry) => entry.isIntersecting)
      .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)
      .forEach((entry, index) => {
        const nested = Number.parseFloat(entry.target.style.getPropertyValue('--body-nested-delay')) || 0;
        entry.target.style.setProperty('--body-reveal-delay', `${nested + (index * 70)}ms`);
        entry.target.classList.add('body-reveal-active');
        entry.target.dataset.bodyRevealComplete = 'true';
        observer.unobserve(entry.target);
      });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  entries.forEach(({ element }) => observer.observe(element));
};

const initTapeLabels = () => {
  const tapeMotionDurations = new Map([
    ['Selected Work', 137], ['Gallery', 129], ['About', 128],
    ['Designing AI experiences for deep analysis and traceability.', 193], ['PALO ALTO NETWORKS', 139], ['2025–26', 129],
    ['Creating an AI driven research architecture for reliability', 190], ['and novel exploration.', 148], ['HARVARD BUSINESS SCHOOL', 144], ['2025', 126],
    ['Turning exploratory research to internal tools', 176], ['DOCUSIGN', 130], ['2023–24', 129],
    ['Designing a data product around an executive’s inquisitive', 191], ['moments.', 134], ['2023', 126],
    ["Designing a B2B buying experience for Hitachi's Sales", 186], ['Partners', 132], ['HITACHI ENERGY', 135], ['2022', 126],
    ['Designing Customer Insights and extending it with Upsell', 189], ['Opportunities.', 139], ['CISCO', 127], ['2020–21', 128],
  ]);
  const labels = [...document.querySelectorAll('[data-tape-label]')];
  if (!labels.length) return;
  labels.forEach((label) => {
    if (!label.dataset.tapeSource) label.dataset.tapeSource = label.textContent?.trim() || '';
  });

  const renderLabel = (label, forcedOverhang) => {
    const source = label.dataset.tapeSource || '';
    const words = source.split(/\s+/).filter(Boolean);
    if (!words.length) return;
    const probe = document.createElement('span');
    probe.className = 'home-tape-probe';
    words.forEach((word, index) => {
      if (index) probe.append(document.createTextNode(' '));
      const wordElement = document.createElement('span');
      wordElement.className = 'home-tape-probe-word';
      wordElement.textContent = word;
      probe.append(wordElement);
    });
    label.replaceChildren(probe);

    const lines = [];
    probe.querySelectorAll('.home-tape-probe-word').forEach((word) => {
      const top = Math.round(word.getBoundingClientRect().top * 10) / 10;
      const current = lines.at(-1);
      if (!current || Math.abs(current.top - top) > 1) lines.push({ top, words: [word.textContent] });
      else current.words.push(word.textContent);
    });

    const accessible = document.createElement('span');
    accessible.className = 'home-tape-accessible';
    accessible.textContent = source;
    const visual = document.createElement('span');
    visual.className = 'home-tape-visual';
    visual.setAttribute('aria-hidden', 'true');
    lines.forEach((line) => {
      const lineElement = document.createElement('span');
      lineElement.className = 'home-tape-line';
      lineElement.style.setProperty('--tape-delay', `${label.dataset.tapeDelay || 0}ms`);
      const tape = document.createElement('i');
      tape.setAttribute('aria-hidden', 'true');
      const text = document.createElement('span');
      text.textContent = line.words.join(' ');
      lineElement.append(tape, text);
      visual.append(lineElement);
    });
    label.replaceChildren(accessible, visual);

    visual.querySelectorAll('.home-tape-line').forEach((line) => {
      const text = line.querySelector('span');
      const duration = tapeMotionDurations.get(text.textContent || '');
      if (duration) line.style.setProperty('--tape-motion-duration', `${duration}ms`);
      const textWidth = text.getBoundingClientRect().width;
      const computedLineHeight = Number.parseFloat(getComputedStyle(label).lineHeight);
      const lineHeight = Number.isFinite(computedLineHeight) ? computedLineHeight : line.getBoundingClientRect().height;
      const overhang = Number.isFinite(forcedOverhang) ? forcedOverhang : Math.round(lineHeight * 0.21);
      line.style.setProperty('--tape-overhang', `${overhang}px`);
      line.style.setProperty('--tape-line-height', `${lineHeight}px`);
      line.style.setProperty('--tape-width', `${Math.ceil(textWidth) + (overhang * 2)}px`);
    });
  };

  const renderAll = () => {
    const cards = [...document.querySelectorAll('[data-project-tile]')];
    cards.forEach((card) => card.style.removeProperty('--home-tape-offset'));
    labels.forEach((label) => renderLabel(label));
    cards.forEach((card) => {
      const titleLine = card.querySelector('.home-project-copy .home-tape-line');
      const overhang = Number.parseFloat(titleLine?.style.getPropertyValue('--tape-overhang')) || 0;
      card.style.setProperty('--home-tape-offset', `${overhang}px`);
      card.querySelectorAll('[data-tape-label]').forEach((label) => renderLabel(label, overhang));
    });
    document.querySelector('[data-home-project-grid]')?.dispatchEvent(new CustomEvent('tapelayout'));
  };

  document.fonts?.ready.then(renderAll);
  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(renderAll, 140);
  }, { passive: true });
  renderAll();
};

const initCaptionReveals = (reduceMotion) => {
  const captions = [...document.querySelectorAll('[data-case-system="true"] [data-media-caption]')];
  if (!captions.length) return;
  const sources = new WeakMap();
  const states = new WeakMap();
  const timers = new WeakMap();

  captions.forEach((caption, index) => {
    caption.dataset.captionReveal = '';
    const paragraphs = [...caption.children].filter((child) => child.matches('p'));
    const segments = paragraphs.length
      ? paragraphs.map((paragraph) => paragraph.textContent?.trim() || '').filter(Boolean)
      : (caption.innerText || caption.textContent || '').split(/\n+/).map((line) => line.trim()).filter(Boolean);
    const number = String(index + 1).padStart(2, '0');
    const numberedSegments = segments.map((segment, segmentIndex) => (
      segmentIndex === 0 ? `[${number}] - ${segment}` : segment
    ));
    const label = numberedSegments.join(' ');
    sources.set(caption, { numberedSegments, separatedParagraphs: paragraphs.length > 1, label });
    states.set(caption, { shown: false, lines: [] });
    caption.dataset.captionLabel = label;
  });

  const setLineProgress = (line, progress) => {
    line._captionProgress = progress;
    line.style.transform = `translateY(${(1 - progress) * 101}%)`;
  };

  const cancelLineAnimation = (line) => {
    window.clearTimeout(line._captionDelayTimer);
    if (line._captionFrame) cancelAnimationFrame(line._captionFrame);
    line._captionFrame = 0;
  };

  const animateLine = (line, target, delay) => {
    cancelLineAnimation(line);
    const from = Number.isFinite(line._captionProgress) ? line._captionProgress : (target ? 0 : 1);
    if (Math.abs(from - target) < 0.001) return;
    line._captionDelayTimer = window.setTimeout(() => {
      const startedAt = performance.now();
      const tick = (now) => {
        const raw = Math.min(1, Math.max(0, (now - startedAt) / 276));
        const eased = target === 1 ? celebratoryEaseOut(raw) : celebratoryEaseIn(raw);
        const progress = target === 1
          ? from + ((1 - from) * eased)
          : from * (1 - eased);
        setLineProgress(line, progress);
        if (raw < 1) line._captionFrame = requestAnimationFrame(tick);
        else line._captionFrame = 0;
      };
      line._captionFrame = requestAnimationFrame(tick);
    }, delay);
  };

  const setCaptionShown = (caption, shown, animate = true) => {
    const state = states.get(caption);
    if (!state || state.shown === shown) return;
    state.shown = shown;
    caption.classList.toggle('caption-motion-active', shown);
    const last = Math.max(1, state.lines.length - 1);
    state.lines.forEach((line, index) => {
      const distributedDelay = shown
        ? ((state.lines.length - 1 - index) / last) * 200
        : (index / last) * 200;
      if (reduceMotion || !animate) setLineProgress(line, shown ? 1 : 0);
      else animateLine(line, shown ? 1 : 0, Math.round(distributedDelay));
    });
  };

  const shouldShowCaption = (caption) => caption.getBoundingClientRect().top <= window.innerHeight * 1.2;

  const renderCaption = (caption) => {
    const source = sources.get(caption);
    const state = states.get(caption);
    if (!source?.numberedSegments.length || !state) return;
    state.lines.forEach(cancelLineAnimation);
    const shown = reduceMotion || shouldShowCaption(caption);

    const accessible = document.createElement('span');
    accessible.className = 'caption-motion-accessible';
    accessible.textContent = source.label;
    const probe = document.createElement('span');
    probe.className = 'caption-motion-probe';
    probe.setAttribute('aria-hidden', 'true');
    source.numberedSegments.forEach((segment, segmentIndex) => {
      const paragraph = document.createElement('span');
      paragraph.className = 'caption-motion-probe-paragraph';
      if (source.separatedParagraphs && segmentIndex > 0) paragraph.classList.add('is-separated');
      segment.split(/\s+/).filter(Boolean).forEach((word, wordIndex) => {
        if (wordIndex) paragraph.append(document.createTextNode(' '));
        const wordElement = document.createElement('span');
        wordElement.className = 'caption-motion-word';
        wordElement.textContent = word;
        paragraph.append(wordElement);
      });
      probe.append(paragraph);
    });
    caption.replaceChildren(accessible, probe);

    const paragraphLines = [...probe.querySelectorAll('.caption-motion-probe-paragraph')].map((paragraph) => {
      const lines = [];
      paragraph.querySelectorAll('.caption-motion-word').forEach((word) => {
        const top = Math.round(word.getBoundingClientRect().top * 10) / 10;
        const current = lines.at(-1);
        if (!current || Math.abs(current.top - top) > 1) lines.push({ top, words: [word.textContent] });
        else current.words.push(word.textContent);
      });
      return lines;
    });

    const visual = document.createElement('span');
    visual.className = 'caption-motion-visual';
    visual.setAttribute('aria-hidden', 'true');
    const lineElements = [];
    paragraphLines.forEach((lines, paragraphIndex) => {
      const paragraph = document.createElement('span');
      paragraph.className = 'caption-motion-paragraph';
      if (source.separatedParagraphs && paragraphIndex > 0) paragraph.classList.add('is-separated');
      lines.forEach((line) => {
        const mask = document.createElement('span');
        mask.className = 'caption-motion-line';
        const inner = document.createElement('span');
        inner.className = 'caption-motion-line-inner';
        inner.textContent = line.words.join(' ');
        setLineProgress(inner, shown ? 1 : 0);
        mask.append(inner);
        paragraph.append(mask);
        lineElements.push(inner);
      });
      visual.append(paragraph);
    });
    caption.replaceChildren(accessible, visual);
    caption.classList.add('caption-motion-ready');
    caption.classList.toggle('caption-motion-active', shown);
    state.shown = shown;
    state.lines = lineElements;
  };

  let scrollFrame = 0;
  const syncCaptionTriggers = () => {
    scrollFrame = 0;
    captions.forEach((caption) => setCaptionShown(caption, reduceMotion || shouldShowCaption(caption)));
  };
  const queueCaptionSync = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(syncCaptionTriggers);
  };
  const scheduleCaptionRender = (caption) => {
    window.clearTimeout(timers.get(caption));
    timers.set(caption, window.setTimeout(() => {
      renderCaption(caption);
      queueCaptionSync();
    }, 140));
  };

  document.addEventListener('captionlayout', (event) => {
    if (event.target?.matches?.('[data-media-caption]')) scheduleCaptionRender(event.target);
  });
  window.addEventListener('scroll', queueCaptionSync, { passive: true });
  window.addEventListener('resize', () => captions.forEach(scheduleCaptionRender), { passive: true });
  document.fonts?.ready.then(() => {
    captions.forEach(renderCaption);
    syncCaptionTriggers();
  });
};

export const initMotionSystem = () => {
  if (document.documentElement.dataset.motionSystemMounted === 'true') return;
  document.documentElement.dataset.motionSystemMounted = 'true';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  initTapeLabels();
  initBodyReveals(reduceMotion);
  initMediaReveals(reduceMotion);
  initCaptionReveals(reduceMotion);
};
