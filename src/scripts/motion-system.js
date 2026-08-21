// These are fixed 1536px-layout measurements, not responsive calculations.
// Each value is the nearest-ms celebratory Move duration for that reveal's
// clip/rise box (wipe distance = clip width; size = clip width × clip height).
// Keeping the lookup here avoids coupling timing to lazy-media layout work.
const mediaRevealDurations = new Map([
  ['/', [
    417, 398, 406, 451, 398, 398,
    486, 468, 496, 509, 451, 468, 478, 468, 468, 459,
    457, 468, 478, 466, 468, 479, 468, 468, 457, 474,
  ]],
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
  const register = (element, kind) => {
    if (!(element instanceof HTMLElement)) return;
    if (entries.some((entry) => entry.element === element)) return;
    element.dataset.bodyReveal = '';
    element.dataset.bodyRevealKind = kind;
    entries.push({ element, kind });
  };

  document.querySelectorAll([
    '.home-bio',
    '.home-project-copy',
    '.home-project-meta',
    '.gallery-project-info',
    '.case-intro',
    '.case-meta',
    '.case-section',
    '.takeaway-card-content',
    '.metric',
    '.metric-tooltip',
    '.platform-core',
    '.platform-contributions > div',
    '[data-media-caption]',
  ].join(',')).forEach((element) => register(element, 'standard'));

  document.documentElement.dataset.bodyMotionReady = 'true';
  if (reduceMotion) {
    entries.forEach(({ element }) => {
      element.classList.add('body-reveal-active');
      element.dataset.bodyRevealComplete = 'true';
      element.dispatchEvent(new CustomEvent('linegeometrychange', {
        bubbles: true,
        detail: { source: 'body-reveal', phase: 'complete' },
      }));
    });
    return;
  }

  const observer = new IntersectionObserver((observed) => {
    observed.filter((entry) => entry.isIntersecting)
      .forEach((entry) => {
        entry.target.classList.add('body-reveal-active');
        entry.target.dispatchEvent(new CustomEvent('linegeometrychange', {
          bubbles: true,
          detail: { source: 'body-reveal', phase: 'start' },
        }));
        const completeReveal = (event) => {
          if (event.target !== entry.target || event.animationName !== 'text-block-in') return;
          entry.target.removeEventListener('animationend', completeReveal);
          entry.target.dataset.bodyRevealComplete = 'true';
          entry.target.dispatchEvent(new CustomEvent('linegeometrychange', {
            bubbles: true,
            detail: { source: 'body-reveal', phase: 'complete' },
          }));
        };
        entry.target.addEventListener('animationend', completeReveal);
        observer.unobserve(entry.target);
      });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  entries.forEach(({ element }) => observer.observe(element));
};

const initLineMaskHeadings = (reduceMotion) => {
  const headings = [...document.querySelectorAll('[data-line-mask]')];
  headings.forEach((heading) => {
    heading.dataset.lineMaskText = heading.textContent?.trim() || '';
  });

  const emitGeometryChange = (heading, phase) => {
    heading.dispatchEvent(new CustomEvent('linegeometrychange', {
      bubbles: true,
      detail: { source: 'line-mask', phase },
    }));
  };

  if (reduceMotion) {
    headings.forEach((heading) => {
      heading.classList.add('line-mask-ready', 'line-mask-active', 'line-mask-played');
      heading.style.removeProperty('visibility');
      emitGeometryChange(heading, 'complete');
    });
    return;
  }

  const renderHeading = (heading, animate = true) => {
    const text = heading.dataset.lineMaskText || '';
    const words = text.split(/\s+/).filter(Boolean);
    if (!words.length) {
      heading.classList.add('line-mask-ready');
      heading.style.removeProperty('visibility');
      emitGeometryChange(heading, 'complete');
      return;
    }

    heading.classList.remove('line-mask-ready', 'line-mask-active', 'line-mask-played');
    const probe = document.createElement('span');
    probe.className = 'line-mask-probe';
    words.forEach((word, index) => {
      if (index) probe.append(document.createTextNode(' '));
      const wordElement = document.createElement('span');
      wordElement.className = 'line-mask-word';
      wordElement.textContent = word;
      probe.append(wordElement);
    });
    heading.replaceChildren(probe);

    const lines = [];
    probe.querySelectorAll('.line-mask-word').forEach((wordElement) => {
      const top = Math.round(wordElement.getBoundingClientRect().top * 10) / 10;
      const current = lines.at(-1);
      if (!current || Math.abs(current.top - top) > 1) lines.push({ top, words: [wordElement.textContent] });
      else current.words.push(wordElement.textContent);
    });

    const fragment = document.createDocumentFragment();
    lines.forEach((line, index) => {
      const mask = document.createElement('span');
      mask.className = 'line-mask-line';
      mask.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'line-mask-line-inner';
      inner.style.setProperty('--line-mask-delay', `${index * 80}ms`);
      inner.textContent = line.words.join(' ');
      mask.append(inner);
      fragment.append(mask);
    });
    heading.replaceChildren(fragment);
    heading.classList.add('line-mask-ready');
    heading.style.removeProperty('visibility');
    emitGeometryChange(heading, 'ready');

    if (!animate) {
      heading.classList.add('line-mask-active', 'line-mask-played');
      emitGeometryChange(heading, 'complete');
      return;
    }

    const play = () => {
      window.setTimeout(() => {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          heading.classList.add('line-mask-active');
          emitGeometryChange(heading, 'start');
          window.setTimeout(() => {
            heading.classList.add('line-mask-played');
            emitGeometryChange(heading, 'complete');
          }, 284 + Math.max(0, lines.length - 1) * 80);
        }));
      }, 120);
    };

    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      play();
    }, { threshold: 0.2 });
    observer.observe(heading);
  };

  document.fonts.ready.then(() => headings.forEach((heading) => renderHeading(heading)));
  let resizeTimer;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      if (!headings.every((heading) => heading.classList.contains('line-mask-played'))) return;
      headings.forEach((heading) => renderHeading(heading, false));
    }, 120);
  }, { passive: true });
};

const initTapeLabels = () => {
  // Fixed nearest-ms Carbon Expressive Move values from the 1536px layout.
  const tapeMotionDurations = new Map([
    ['Selected Work', 137], ['Gallery', 129], ['About', 128], ['Team', 126],
    ['Designing AI experiences for deep analysis and traceability.', 191], ['PALO ALTO NETWORKS', 139], ['2025–26', 129],
    ['Creating an AI driven research architecture for reliability and', 194], ['novel exploration.', 142], ['HARVARD BUSINESS SCHOOL', 144], ['2025', 126],
    ['Turning exploratory research to internal tools.', 176], ['DOCUSIGN', 130], ['2023–24', 129],
    ['Designing a data product around an executive’s inquisitive', 190], ['moments.', 134], ['2023', 126],
    ["Designing a B2B buying experience for Hitachi's Sales Partners", 196], ['HITACHI ENERGY', 135], ['2022', 126],
    ['Designing Customer Insights and extending it with Upsell', 188], ['Opportunities.', 139], ['CISCO', 127], ['2020–21', 128],
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

const initCaptionLabels = () => {
  const captions = [...document.querySelectorAll('[data-case-system="true"] [data-media-caption]')];
  captions.forEach((caption, index) => {
    const number = String(index + 1).padStart(2, '0');
    caption.prepend(document.createTextNode(`[${number}] - `));
    caption.dataset.captionNumbered = 'true';
  });
};

export const initMotionSystem = () => {
  if (document.documentElement.dataset.motionSystemMounted === 'true') return;
  document.documentElement.dataset.motionSystemMounted = 'true';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  initTapeLabels();
  initCaptionLabels();
  initLineMaskHeadings(reduceMotion);
  initBodyReveals(reduceMotion);
  initMediaReveals(reduceMotion);
};
