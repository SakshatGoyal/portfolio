const initMediaReveals = (reduceMotion) => {
  const galleryRevealLeadDelay = 100;
  const galleryRevealStagger = 70;
  const homepageRevealStagger = 90;
  const homepageRevealDuration = 1500;
  const homepageCopyDelay = 300;
  const groupSelector = [
    '.gallery-project',
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
  const homepageTargets = targets.filter((target) => target.hasAttribute('data-home-project-media-reveal'));
  const anchors = new Map();
  targets.forEach((target) => {
    const anchor = target.closest('[data-media-unit]') || target;
    anchors.set(anchor, [...(anchors.get(anchor) || []), target]);
  });

  const captionStates = new Map();
  anchors.forEach((_, anchor) => {
    const caption = anchor.querySelector('[data-media-caption]');
    if (!(caption instanceof HTMLElement)) return;
    const mediaUnit = caption.closest('[data-media-unit]');
    caption.dataset.bodyReveal = '';
    caption.dataset.bodyRevealKind = 'media-caption';
    const captionState = {
      caption,
      layoutReady: !mediaUnit || mediaUnit.hasAttribute('data-media-ready'),
      mediaStarted: false,
      activated: false,
    };
    captionStates.set(anchor, captionState);
    caption.addEventListener('captionlayout', () => {
      captionState.layoutReady = true;
      activateCaption(anchor);
    });
  });

  const completeCaptionReveal = (caption, phase = 'complete') => {
    caption.dataset.bodyRevealComplete = 'true';
    caption.dispatchEvent(new CustomEvent('linegeometrychange', {
      bubbles: true,
      detail: { source: 'media-reveal', phase },
    }));
  };

  function activateCaption(anchor) {
    const captionState = captionStates.get(anchor);
    if (!captionState || captionState.activated || !captionState.layoutReady || !captionState.mediaStarted) return;
    captionState.activated = true;
    const { caption } = captionState;
    caption.classList.add('body-reveal-active');
    caption.dispatchEvent(new CustomEvent('linegeometrychange', {
      bubbles: true,
      detail: { source: 'media-reveal', phase: 'start' },
    }));
    const onAnimationEnd = (event) => {
      if (event.target !== caption || !['text-block-in', 'gallery-text-in'].includes(event.animationName)) return;
      caption.removeEventListener('animationend', onAnimationEnd);
      completeCaptionReveal(caption);
    };
    caption.addEventListener('animationend', onAnimationEnd);
  }

  const markCaptionMediaStarted = (anchor, target, mediaError = false) => {
    const captionState = captionStates.get(anchor);
    if (!captionState || captionState.mediaStarted) return;
    captionState.mediaStarted = true;
    captionState.caption.style.setProperty(
      '--media-caption-reveal-delay',
      target.style.getPropertyValue('--media-reveal-delay') || '0ms',
    );
    if (mediaError) {
      captionState.layoutReady = true;
      anchor.setAttribute('data-media-ready', '');
    }
    activateCaption(anchor);
  };

  document.querySelectorAll('[data-media-reveal-group]').forEach((group) => {
    const directTargets = targets.filter((target) => target.closest('[data-media-reveal-group]') === group);
    const usesGalleryRevealProfile = group.matches('.gallery-project') || Boolean(group.closest('.case-study'));
    const stagger = directTargets.length > 1 && usesGalleryRevealProfile ? galleryRevealStagger : 0;
    const leadDelay = usesGalleryRevealProfile ? galleryRevealLeadDelay : 0;
    directTargets.forEach((target, index) => {
      target.style.setProperty('--media-reveal-delay', `${leadDelay + (index * stagger)}ms`);
      target.dataset.mediaRevealIndex = String(index);
      target.dataset.mediaRevealStagger = String(stagger);
    });
  });
  targets.filter((target) => !target.closest('[data-media-reveal-group]')).forEach((target) => {
    const leadDelay = target.closest('.case-study') ? galleryRevealLeadDelay : 0;
    target.style.setProperty('--media-reveal-delay', `${leadDelay}ms`);
    target.dataset.mediaRevealIndex = '0';
    target.dataset.mediaRevealStagger = '0';
  });

  document.documentElement.dataset.mediaMotionReady = 'true';
  if (reduceMotion) {
    targets.forEach((target) => {
      target.classList.add('media-reveal-active');
      target.dataset.mediaRevealComplete = 'true';
    });
    captionStates.forEach(({ caption }) => {
      caption.classList.add('body-reveal-active');
      completeCaptionReveal(caption);
    });
    document.querySelectorAll('[data-home-project-text-reveal]').forEach((text) => {
      text.classList.add('home-project-text-reveal-active');
      text.dataset.homeProjectTextRevealComplete = 'true';
    });
    return;
  }

  const states = new WeakMap();
  let nextHomepageRevealStart = 0;
  let nextHomepageTargetIndex = 0;

  const revealHomeText = (element) => {
    if (!(element instanceof HTMLElement) || element.classList.contains('home-project-text-reveal-active')) return;
    let completed = false;
    const complete = () => {
      if (completed) return;
      completed = true;
      element.dataset.homeProjectTextRevealComplete = 'true';
      element.removeEventListener('transitionend', onTransitionEnd);
    };
    const onTransitionEnd = (event) => {
      if (event.target === element && event.propertyName === 'clip-path') complete();
    };
    element.addEventListener('transitionend', onTransitionEnd);
    element.classList.add('home-project-text-reveal-active');
    window.setTimeout(complete, homepageRevealDuration);
  };

  const completeHomeMediaReveal = (target) => {
    if (target.dataset.homeProjectMediaRevealComplete === 'true') return;
    target.dataset.homeProjectMediaRevealComplete = 'true';
  };

  const scheduleHomeTextReveals = (target) => {
    const unit = target.closest('[data-home-project-reveal-unit]');
    const [copy, meta] = unit ? [...unit.querySelectorAll('[data-home-project-text-reveal]')] : [];
    window.setTimeout(() => revealHomeText(copy), homepageCopyDelay);
    window.setTimeout(() => revealHomeText(meta), homepageCopyDelay + homepageRevealStagger);
  };

  const activateTarget = (target, state) => {
    if (target.hasAttribute('data-home-project-media-reveal')) {
      const clip = target.querySelector('[data-media-reveal-clip]');
      const onTransitionEnd = (event) => {
        if (event.target !== clip || event.propertyName !== 'clip-path') return;
        clip.removeEventListener('transitionend', onTransitionEnd);
        completeHomeMediaReveal(target);
      };
      clip?.addEventListener('transitionend', onTransitionEnd);
      window.setTimeout(() => completeHomeMediaReveal(target), homepageRevealDuration);
      target.dataset.homeProjectMediaRevealStarted = 'true';
      scheduleHomeTextReveals(target);
    }
    target.classList.add('media-reveal-active');
    target.dataset.mediaRevealComplete = 'true';
    markCaptionMediaStarted(state.anchor, target, state.error);
    const siblings = anchors.get(state.anchor) || [];
    if (siblings.every((sibling) => sibling.classList.contains('media-reveal-active'))) {
      observer.unobserve(state.anchor);
    }
  };

  const flushHomepageReveals = () => {
    while (nextHomepageTargetIndex < homepageTargets.length) {
      const target = homepageTargets[nextHomepageTargetIndex];
      const state = states.get(target);
      if (!state?.intersecting || !state.ready || !state.painted) return;

      state.queued = true;
      const now = performance.now();
      const startAt = Math.max(now, nextHomepageRevealStart);
      nextHomepageRevealStart = startAt + homepageRevealStagger;
      const delay = Math.max(0, startAt - now);
      target.dataset.homeProjectRevealIndex = String(nextHomepageTargetIndex);
      target.dataset.homeProjectRevealStagger = String(homepageRevealStagger);
      target.dataset.homeProjectRevealDelay = String(Math.round(delay));
      window.setTimeout(() => activateTarget(target, state), delay);
      nextHomepageTargetIndex += 1;
    }
  };

  const reveal = (target) => {
    const state = states.get(target);
    if (target.hasAttribute('data-home-project-media-reveal')) {
      flushHomepageReveals();
      return;
    }
    if (!state?.intersecting || !state.ready || !state.painted || state.queued || target.classList.contains('media-reveal-active')) return;
    activateTarget(target, state);
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
    const state = { anchor, intersecting: false, ready: false, painted: false, error: false, queued: false };
    states.set(target, state);

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
      const failed = () => (
        (visual instanceof HTMLImageElement && visual.complete && visual.naturalWidth === 0)
        || (visual instanceof HTMLVideoElement && visual.error !== null)
      );
      const markErrorReady = () => {
        state.error = true;
        target.dataset.mediaRevealError = 'true';
        markReady();
      };
      if (usable()) markReady();
      else if (failed()) markErrorReady();
      else {
        visual.addEventListener(visual instanceof HTMLVideoElement ? 'loadedmetadata' : 'load', markReady, { once: true });
        visual.addEventListener('error', markErrorReady, { once: true });
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
    '.gallery-project-info',
    '.case-intro',
    '.case-meta',
    '.case-section',
    '.takeaway-card-content',
    '.metric',
    '.platform-core',
    '.platform-contributions > div',
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
          if (event.target !== entry.target || !['text-block-in', 'gallery-text-in'].includes(event.animationName)) return;
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
    const appendWord = (parent, word, index) => {
      if (index) parent.append(document.createTextNode(' '));
      const wordElement = document.createElement('span');
      wordElement.className = 'line-mask-word';
      wordElement.textContent = word;
      parent.append(wordElement);
    };

    const unpairedWordCount = Math.max(0, words.length - 2);
    words.slice(0, unpairedWordCount).forEach((word, index) => appendWord(probe, word, index));
    if (words.length > 1) {
      if (unpairedWordCount) probe.append(document.createTextNode(' '));
      const finalPair = document.createElement('span');
      finalPair.className = 'line-mask-final-pair';
      words.slice(-2).forEach((word, index) => appendWord(finalPair, word, index));
      probe.append(finalPair);
    } else {
      appendWord(probe, words[0], 0);
    }
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
    ['Team', 126],
    ['View Project', 126],
    ['Selected Work', 126],
    ['Gallery', 126],
    ['About', 126],
    ['Resume', 126],
    ['LinkedIn', 126],
    ['Email', 126],
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

    const labelStyles = getComputedStyle(label);
    const frameAligned = label.dataset.tapeFrame === 'true';
    const framePaddingLeft = frameAligned ? Number.parseFloat(labelStyles.paddingLeft) || 0 : 0;
    const framePaddingRight = frameAligned ? Number.parseFloat(labelStyles.paddingRight) || 0 : 0;
    const framePaddingY = frameAligned
      ? (Number.parseFloat(labelStyles.paddingTop) || 0) + (Number.parseFloat(labelStyles.paddingBottom) || 0)
      : 0;
    visual.querySelectorAll('.home-tape-line').forEach((line) => {
      const text = line.querySelector('span');
      if (label.dataset.tapeColor) line.style.setProperty('--tape-color', label.dataset.tapeColor);
      const requestedDuration = Number(label.dataset.tapeDuration);
      const duration = Number.isFinite(requestedDuration) && requestedDuration >= 0
        ? requestedDuration
        : tapeMotionDurations.get(text.textContent || '');
      if (duration) line.style.setProperty('--tape-motion-duration', `${duration}ms`);
      const textWidth = text.getBoundingClientRect().width;
      const computedLineHeight = Number.parseFloat(labelStyles.lineHeight);
      const contentLineHeight = Number.isFinite(computedLineHeight) ? computedLineHeight : line.getBoundingClientRect().height;
      const lineHeight = contentLineHeight + framePaddingY;
      const overhang = frameAligned
        ? framePaddingLeft
        : (Number.isFinite(forcedOverhang) ? forcedOverhang : Math.round(lineHeight * 0.21));
      line.style.setProperty('--tape-overhang', `${overhang}px`);
      line.style.setProperty('--tape-line-height', `${lineHeight}px`);
      const tapeTextWidth = frameAligned ? textWidth : Math.ceil(textWidth);
      line.style.setProperty('--tape-width', `${tapeTextWidth + framePaddingLeft + framePaddingRight + (frameAligned ? 0 : overhang * 2)}px`);
    });
    if (label.getAttribute('aria-disabled') === 'true') label.dataset.tapeDisabled = 'true';
  };

  const renderAll = () => {
    labels.forEach((label) => renderLabel(label));
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
