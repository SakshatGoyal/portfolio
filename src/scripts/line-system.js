export const LINE_TOPOLOGY = Object.freeze({
  version: 1,
  tokens: Object.freeze({
    home: { css: '--home-line', width: 1 },
    divider: { css: '--cs-divider', width: 1 },
    intense: { css: '--cs-divider-intense', width: 1 },
    outline: { css: '--line', width: 1 },
    accent: { css: '--accent', width: 2 },
    current: { css: 'currentColor', width: 1 },
    monogram: { css: '--ink', width: 1 },
    'platform-core': { css: '--line', width: 1 },
    'platform-contribution': { css: '--line', width: 1 },
  }),
  localBoxes: Object.freeze([
    { id: 'monogram-outline', selector: '.monogram', token: 'monogram', direction: 'clockwise' },
    { id: 'platform-core-outline', selector: '.platform-core', token: 'platform-core', direction: 'clockwise' },
    { id: 'platform-contribution-outline', selector: '.platform-contributions > div', token: 'platform-contribution', direction: 'clockwise' },
    { id: 'previous-case-outline', selector: '.previous-case', token: 'outline', direction: 'clockwise' },
    { id: 'next-case-outline', selector: '.next-case', token: 'outline', direction: 'clockwise' },
  ]),
  underlines: Object.freeze([
    { id: 'team-underline', selector: '.team-label', token: 'current', direction: 'left-to-right' },
    { id: 'section-label-rule', selector: '.section-label', token: 'outline', direction: 'left-to-right' },
    { id: 'home-close-underline', selector: '.home-close a', token: 'current', direction: 'left-to-right' },
    { id: 'neutral-nav-underline', selector: '.site-header:not(.home-site-header):not(.system-case-header) nav a', token: 'current', direction: 'left-to-right' },
  ]),
  seamGroups: Object.freeze([
    '.media-stack',
    '.media-grid',
    '.asymmetric-grid',
    '.global-research-media',
    '.panw-approach-media',
    '.verification-comparison',
  ]),
});

const SVG_NS = 'http://www.w3.org/2000/svg';
const coordinateKey = (x, y) => `${x.toFixed(3)}:${y.toFixed(3)}`;

const createSvg = (className) => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.classList.add('line-system-layer', className);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.pointerEvents = 'none';
  const group = document.createElementNS(SVG_NS, 'g');
  svg.append(group);
  return { svg, group };
};

const tokenWidth = (token) => LINE_TOPOLOGY.tokens[token]?.width ?? 1;

const snapCoordinate = (value, width = 1) => {
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const deviceWidth = Math.max(1, Math.round(width * dpr));
  const deviceValue = Math.round(value * dpr) + (deviceWidth % 2 ? 0.5 : 0);
  return deviceValue / dpr;
};

const relativeRect = (element, rootRect) => {
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left - rootRect.left,
    right: rect.right - rootRect.left,
    top: rect.top - rootRect.top,
    bottom: rect.bottom - rootRect.top,
    width: rect.width,
    height: rect.height,
  };
};

const uniqueSorted = (values) => [...new Set(values.map((value) => Math.round(value * 1000) / 1000))]
  .sort((a, b) => a - b);

const linePath = ({ id, x1, y1, x2, y2, token = 'divider', width, direction, start, end, layoutRule = false }) => {
  const strokeWidth = width ?? tokenWidth(token);
  const path = document.createElementNS(SVG_NS, 'path');
  const sx = snapCoordinate(x1, strokeWidth);
  const sy = snapCoordinate(y1, strokeWidth);
  const ex = snapCoordinate(x2, strokeWidth);
  const ey = snapCoordinate(y2, strokeWidth);
  path.setAttribute('d', `M ${sx} ${sy} L ${ex} ${ey}`);
  path.setAttribute('pathLength', '1');
  path.setAttribute('vector-effect', 'non-scaling-stroke');
  path.dataset.lineId = id;
  path.dataset.lineToken = token;
  path.dataset.lineDirection = direction || (Math.abs(ex - sx) >= Math.abs(ey - sy) ? 'left-to-right' : 'top-to-bottom');
  path.dataset.lineStart = start || coordinateKey(sx, sy);
  path.dataset.lineEnd = end || coordinateKey(ex, ey);
  path.classList.add('line-system-path', `line-token-${token}`);
  if (layoutRule) {
    path.dataset.lineLayoutRule = 'true';
    path.classList.add('line-system-layout-rule');
  }
  path.style.strokeWidth = String(strokeWidth);
  return { path, x1: sx, y1: sy, x2: ex, y2: ey };
};

const rectPath = ({ id, width, height, radius, token, strokeWidth, direction = 'clockwise' }) => {
  const lineWidth = strokeWidth ?? tokenWidth(token);
  const inset = lineWidth / 2;
  const rect = document.createElementNS(SVG_NS, 'rect');
  rect.setAttribute('x', String(inset));
  rect.setAttribute('y', String(inset));
  rect.setAttribute('width', String(Math.max(0, width - lineWidth)));
  rect.setAttribute('height', String(Math.max(0, height - lineWidth)));
  rect.setAttribute('rx', String(Math.max(0, radius - inset)));
  rect.setAttribute('pathLength', '1');
  rect.setAttribute('vector-effect', 'non-scaling-stroke');
  rect.dataset.lineId = id;
  rect.dataset.lineToken = token;
  rect.dataset.lineDirection = direction;
  rect.classList.add('line-system-path', `line-token-${token}`);
  rect.style.strokeWidth = String(lineWidth);
  return rect;
};

const directGroupChildren = (group) => [...group.children].filter((child) => (
  child.matches('.case-figure, figure, [data-media-unit]')
));

export const initLineSystem = () => {
  const shell = document.querySelector('.page-shell');
  if (!shell || shell.dataset.lineSystemMounted === 'true') return;
  shell.dataset.lineSystemMounted = 'true';
  document.documentElement.dataset.lineSystem = 'svg';

  const debug = new URLSearchParams(window.location.search).get('line-debug') === '1';
  if (debug) document.documentElement.dataset.lineDebug = 'true';

  const documentLayer = createSvg('line-system-document');
  shell.prepend(documentLayer.svg);

  const viewportLayer = createSvg('line-system-viewport');
  document.body.append(viewportLayer.svg);

  const localLayers = new Map();
  const runtimeSegments = [];
  const duplicateSegments = [];
  const renderedKeys = new Set();
  let renderFrame = 0;
  let focusedElement = null;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lineRevealDuration = 500;
  const lineRevealStates = new Map();
  const lineRevealAnchors = new Map();

  const pathsForRevealId = (id) => [...document.querySelectorAll('[data-line-layout-rule="true"][data-line-direction="left-to-right"]')]
    .filter((path) => path.dataset.lineId === id);

  const applyLineRevealState = (path) => {
    const state = lineRevealStates.get(path.dataset.lineId);
    if (reduceMotion || state?.completed) {
      path.style.transition = 'none';
      path.style.setProperty('--line-reveal-progress', '1');
      return;
    }
    if (!state?.startedAt) {
      path.style.transition = 'none';
      path.style.setProperty('--line-reveal-progress', '0');
      return;
    }

    const elapsed = Math.max(0, performance.now() - state.startedAt);
    const progress = Math.min(1, elapsed / lineRevealDuration);
    const remaining = Math.max(0, lineRevealDuration - elapsed);
    path.style.transition = 'none';
    path.style.setProperty('--line-reveal-progress', String(progress));
    path.getBoundingClientRect();
    requestAnimationFrame(() => {
      path.style.transition = `transform ${remaining}ms ease`;
      path.style.setProperty('--line-reveal-progress', '1');
    });
  };

  const revealLine = (id) => {
    if (lineRevealStates.has(id)) return;
    const state = { startedAt: performance.now(), completed: false };
    lineRevealStates.set(id, state);
    pathsForRevealId(id).forEach(applyLineRevealState);
    window.setTimeout(() => {
      state.completed = true;
      pathsForRevealId(id).forEach(applyLineRevealState);
    }, lineRevealDuration);
  };

  const lineRevealObserver = reduceMotion ? null : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.dataset.lineRevealId;
      if (id) revealLine(id);
      lineRevealObserver.unobserve(entry.target);
      entry.target.remove();
      lineRevealAnchors.delete(id);
    });
  }, { threshold: 0 });

  const syncLineReveals = () => {
    const paths = [...document.querySelectorAll('[data-line-layout-rule="true"][data-line-direction="left-to-right"]')];
    const activeIds = new Set(paths.map((path) => path.dataset.lineId));
    lineRevealAnchors.forEach((anchor, id) => {
      if (activeIds.has(id) && !lineRevealStates.has(id)) return;
      lineRevealObserver?.unobserve(anchor);
      anchor.remove();
      lineRevealAnchors.delete(id);
    });

    paths.forEach((path) => {
      applyLineRevealState(path);
      const id = path.dataset.lineId;
      if (reduceMotion || lineRevealStates.has(id)) return;
      let anchor = lineRevealAnchors.get(id);
      if (!anchor) {
        anchor = document.createElement('span');
        anchor.className = 'line-reveal-anchor';
        anchor.dataset.lineRevealId = id;
        document.body.append(anchor);
        lineRevealAnchors.set(id, anchor);
        lineRevealObserver.observe(anchor);
      }
      const svg = path.ownerSVGElement;
      const viewBox = svg?.viewBox?.baseVal;
      const svgRect = svg?.getBoundingClientRect();
      const pathBox = path.getBBox();
      const scaleX = viewBox?.width ? svgRect.width / viewBox.width : 1;
      const scaleY = viewBox?.height ? svgRect.height / viewBox.height : 1;
      anchor.style.left = `${window.scrollX + svgRect.left + ((pathBox.x - (viewBox?.x || 0)) * scaleX)}px`;
      anchor.style.top = `${window.scrollY + svgRect.top + ((pathBox.y - (viewBox?.y || 0)) * scaleY)}px`;
    });
  };

  const ensureLocalLayer = (element, kind) => {
    const existing = localLayers.get(element);
    if (existing) return existing;
    element.classList.add('line-system-host');
    const layer = createSvg(`line-system-local-${kind}`);
    layer.svg.dataset.lineLocal = kind;
    element.append(layer.svg);
    const entry = { ...layer, kind };
    localLayers.set(element, entry);
    return entry;
  };

  const registerSegment = (group, segment, terminalStart = false, terminalEnd = false) => {
    const rendered = linePath({ ...segment, layoutRule: segment.layoutRule !== false });
    const ordered = [coordinateKey(rendered.x1, rendered.y1), coordinateKey(rendered.x2, rendered.y2)].sort();
    const key = `${ordered[0]}|${ordered[1]}|${segment.token || 'divider'}|${segment.width || tokenWidth(segment.token || 'divider')}`;
    if (renderedKeys.has(key)) {
      duplicateSegments.push(segment.id);
      return;
    }
    renderedKeys.add(key);
    group.append(rendered.path);
    runtimeSegments.push({
      id: segment.id,
      token: segment.token || 'divider',
      direction: rendered.path.dataset.lineDirection,
      start: rendered.path.dataset.lineStart,
      end: rendered.path.dataset.lineEnd,
      x1: rendered.x1,
      y1: rendered.y1,
      x2: rendered.x2,
      y2: rendered.y2,
      terminalStart,
      terminalEnd,
    });
  };

  const drawVerticalNetwork = (group, id, x, ys, token, terminalTop = true, terminalBottom = true) => {
    const levels = uniqueSorted(ys);
    levels.slice(0, -1).forEach((y, index) => registerSegment(group, {
      id: `${id}.${index + 1}`,
      x1: x,
      y1: y,
      x2: x,
      y2: levels[index + 1],
      token,
      direction: 'top-to-bottom',
      start: coordinateKey(snapCoordinate(x), snapCoordinate(y)),
      end: coordinateKey(snapCoordinate(x), snapCoordinate(levels[index + 1])),
    }, index === 0 && terminalTop, index === levels.length - 2 && terminalBottom));
  };

  const drawHorizontal = (group, id, x1, x2, y, token, terminalStart = false, terminalEnd = false, layoutRule = true) => {
    registerSegment(group, {
      id, x1, y1: y, x2, y2: y, token, direction: 'left-to-right',
      layoutRule,
      start: coordinateKey(snapCoordinate(x1), snapCoordinate(y)),
      end: coordinateKey(snapCoordinate(x2), snapCoordinate(y)),
    }, terminalStart, terminalEnd);
  };

  const drawGroupSeams = (group, rootRect, groupIndex) => {
    const children = directGroupChildren(group);
    if (children.length < 2) return;
    const groupRect = relativeRect(group, rootRect);
    const childRects = children.map((child) => relativeRect(child, rootRect));
    const columns = uniqueSorted(childRects.map((rect) => rect.left));
    const rows = uniqueSorted(childRects.map((rect) => rect.top));
    const token = 'divider';

    columns.slice(1).forEach((x, columnIndex) => {
      const rowBreaks = rows.filter((y) => y > groupRect.top + 0.5 && y < groupRect.bottom - 0.5);
      drawVerticalNetwork(documentLayer.group, `group.${groupIndex}.column.${columnIndex + 1}`, x, [groupRect.top, ...rowBreaks, groupRect.bottom], token);
    });

    childRects.forEach((rect, childIndex) => {
      if (rect.top <= groupRect.top + 0.5) return;
      drawHorizontal(documentLayer.group, `group.${groupIndex}.row.${childIndex + 1}`, rect.left, rect.right, rect.top, token, true, true);
    });
  };

  const renderPlatformConnectors = (rootRect) => {
    document.querySelectorAll('.platform-host').forEach((host, hostIndex) => {
      const core = host.querySelector('.platform-core');
      const contributions = [...host.querySelectorAll('.platform-contributions > div')];
      if (!core || contributions.length === 0) return;
      const coreRect = relativeRect(core, rootRect);
      contributions.forEach((contribution, index) => {
        const rect = relativeRect(contribution, rootRect);
        const id = `platform.${hostIndex + 1}.connector.${index + 1}`;
        if (rect.left >= coreRect.right - 1) {
          drawHorizontal(documentLayer.group, id, coreRect.right, rect.left, rect.top + rect.height / 2, 'platform-core', true, true, false);
          return;
        }
        const x = rect.left + rect.width / 2;
        registerSegment(documentLayer.group, {
          id,
          x1: x,
          y1: Math.max(coreRect.bottom, rect.top - 12),
          x2: x,
          y2: rect.top,
          token: 'platform-core',
          direction: 'top-to-bottom',
          layoutRule: false,
        }, true, true);
      });
    });
  };

  const renderHomeTopology = (rootRect) => {
    const header = document.querySelector('.home-site-header');
    const hero = document.querySelector('.home-hero');
    const grid = document.querySelector('[data-home-project-grid]');
    const footer = document.querySelector('.home-site-footer');
    if (!header || !hero || !grid || !footer) return;
    const headerRect = relativeRect(header, rootRect);
    const heroRect = relativeRect(hero, rootRect);
    const gridRect = relativeRect(grid, rootRect);
    const footerRect = relativeRect(footer, rootRect);
    const horizontalLevels = uniqueSorted([headerRect.top, headerRect.bottom, heroRect.bottom, footerRect.top, footerRect.bottom]);
    const slots = [...grid.querySelectorAll('[data-home-project-slot]')];
    if (grid.dataset.homeLayout === 'small') {
      const rowRects = slots.slice(1).map((slot) => relativeRect(slot, rootRect));
      const railLevels = uniqueSorted([...horizontalLevels, ...rowRects.map((rect) => rect.top)]);
      drawVerticalNetwork(documentLayer.group, 'home.rail.left', headerRect.left, railLevels, 'home');
      drawVerticalNetwork(documentLayer.group, 'home.rail.right', headerRect.right, railLevels, 'home');
      drawHorizontal(documentLayer.group, 'home.header.bottom', headerRect.left, headerRect.right, headerRect.bottom, 'home');
      drawHorizontal(documentLayer.group, 'home.hero.bottom', heroRect.left, heroRect.right, heroRect.bottom, 'home');
      drawHorizontal(documentLayer.group, 'home.footer.top', footerRect.left, footerRect.right, footerRect.top, 'home');
      rowRects.forEach((rect, index) => {
        drawHorizontal(documentLayer.group, `home.grid.row.${index + 2}`, gridRect.left, gridRect.right, rect.top, 'home');
      });
      return;
    }

    const center = gridRect.left + gridRect.width / 2;
    const seamOrders = [3, 4, 5, 6];
    const seamRects = seamOrders
      .map((order) => grid.querySelector(`[data-home-order="${order}"]`))
      .filter(Boolean)
      .map((slot) => ({ order: Number(slot.dataset.homeOrder), rect: relativeRect(slot, rootRect) }));
    const railLevels = uniqueSorted([...horizontalLevels, ...seamRects.map(({ rect }) => rect.top)]);
    const centerBreaks = uniqueSorted([gridRect.top, ...seamRects.map(({ rect }) => rect.top), gridRect.bottom]);
    drawVerticalNetwork(documentLayer.group, 'home.rail.left', headerRect.left, railLevels, 'home');
    drawVerticalNetwork(documentLayer.group, 'home.rail.right', headerRect.right, railLevels, 'home');
    drawHorizontal(documentLayer.group, 'home.header.bottom', headerRect.left, headerRect.right, headerRect.bottom, 'home');
    drawHorizontal(documentLayer.group, 'home.hero.bottom.left', heroRect.left, center, heroRect.bottom, 'home');
    drawHorizontal(documentLayer.group, 'home.hero.bottom.right', center, heroRect.right, heroRect.bottom, 'home');
    drawHorizontal(documentLayer.group, 'home.footer.top.left', footerRect.left, center, footerRect.top, 'home');
    drawHorizontal(documentLayer.group, 'home.footer.top.right', center, footerRect.right, footerRect.top, 'home');
    drawVerticalNetwork(documentLayer.group, 'home.grid.center', center, centerBreaks, 'home');
    seamRects.forEach(({ order, rect }) => {
      const left = order === 4 ? gridRect.left : center;
      const right = order === 4 ? center : gridRect.right;
      drawHorizontal(documentLayer.group, `home.grid.row.${order}`, left, right, rect.top, 'home');
    });
  };

  const renderCaseTopology = (rootRect) => {
    const caseStudy = document.querySelector('.case-study');
    const footer = document.querySelector('.site-footer');
    const header = document.querySelector('.system-case-header');
    if (!caseStudy || !footer || !header) return;
    const caseRect = relativeRect(caseStudy, rootRect);
    const footerRect = relativeRect(footer, rootRect);
    const horizontal = [];
    const boundaryElements = [
      caseStudy.querySelector(':scope > .case-hero'),
      caseStudy.querySelector(':scope > .hero-figure'),
      caseStudy.querySelector(':scope > .case-intro'),
      ...caseStudy.querySelectorAll(':scope > .case-meta > div'),
      ...caseStudy.querySelectorAll(':scope > .case-body > * + *'),
      caseStudy.querySelector(':scope > .case-navigation'),
    ].filter(Boolean);
    boundaryElements.forEach((element) => {
      const rect = relativeRect(element, rootRect);
      const isBodyBoundary = element.parentElement?.classList.contains('case-body');
      horizontal.push(isBodyBoundary ? rect.top : rect.bottom);
    });
    const levels = uniqueSorted([caseRect.top, ...horizontal, footerRect.bottom]);
    drawVerticalNetwork(documentLayer.group, 'case.rail.left', caseRect.left, levels, 'divider');
    drawVerticalNetwork(documentLayer.group, 'case.rail.right', caseRect.right, levels, 'divider');
    uniqueSorted(horizontal).forEach((y, index) => {
      drawHorizontal(documentLayer.group, `case.boundary.${index + 1}`, caseRect.left, caseRect.right, y, 'divider');
    });

    const headerLayer = ensureLocalLayer(header, 'header');
    headerLayer.group.replaceChildren();
    const width = header.clientWidth;
    const height = header.clientHeight;
    headerLayer.group.append(
      linePath({ id: 'case.header.left', x1: 0, y1: 0, x2: 0, y2: height, token: 'divider', direction: 'top-to-bottom', layoutRule: true }).path,
      linePath({ id: 'case.header.right', x1: width, y1: 0, x2: width, y2: height, token: 'divider', direction: 'top-to-bottom', layoutRule: true }).path,
      linePath({ id: 'case.header.bottom', x1: 0, y1: height, x2: width, y2: height, token: 'divider', direction: 'left-to-right', layoutRule: true }).path,
    );
    headerLayer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    const seamNodes = [...new Set(LINE_TOPOLOGY.seamGroups.flatMap((selector) => (
      [...document.querySelectorAll(selector)]
    )))];
    seamNodes.forEach((group, index) => drawGroupSeams(group, rootRect, index + 1));
    renderPlatformConnectors(rootRect);
  };

  const renderLocalLayers = () => {
    LINE_TOPOLOGY.localBoxes.forEach((spec) => {
      document.querySelectorAll(spec.selector).forEach((element, index) => {
        const layer = ensureLocalLayer(element, 'outline');
        const styles = getComputedStyle(element);
        const width = element.clientWidth;
        const height = element.clientHeight;
        const radius = parseFloat(styles.borderRadius || '0');
        layer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        layer.group.replaceChildren(rectPath({
          id: `${spec.id}.${index + 1}`,
          width,
          height,
          radius,
          token: spec.token,
          direction: spec.direction,
        }));
      });
    });

    LINE_TOPOLOGY.underlines.forEach((spec) => {
      document.querySelectorAll(spec.selector).forEach((element, index) => {
        const layer = ensureLocalLayer(element, 'underline');
        const width = element.clientWidth;
        const height = element.clientHeight;
        layer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        layer.group.replaceChildren();
        const rendered = linePath({
          id: `${spec.id}.${index + 1}`,
          x1: 0,
          y1: height,
          x2: width,
          y2: height,
          token: spec.token,
          direction: spec.direction,
        });
        rendered.path.classList.add('line-system-underline-path');
        layer.group.append(rendered.path);
      });
    });

    document.querySelectorAll('.problem-marker').forEach((marker, index) => {
      const layer = ensureLocalLayer(marker, 'marker');
      const width = marker.clientWidth;
      const height = marker.clientHeight;
      const circle = document.createElementNS(SVG_NS, 'circle');
      circle.setAttribute('cx', String(width / 2));
      circle.setAttribute('cy', String(height / 2));
      circle.setAttribute('r', String(Math.max(0, Math.min(width, height) / 2 - 1)));
      circle.setAttribute('pathLength', '1');
      circle.setAttribute('vector-effect', 'non-scaling-stroke');
      circle.dataset.lineId = `problem-marker.${index + 1}`;
      circle.dataset.lineToken = 'divider';
      circle.dataset.lineDirection = 'clockwise';
      circle.classList.add('line-system-path', 'line-token-divider');
      circle.style.strokeWidth = '2';
      circle.style.fill = 'var(--cs-surface)';
      const list = marker.closest('.problem-list');
      const listMarkers = list ? [...list.querySelectorAll('.problem-marker')] : [];
      const number = Math.max(1, listMarkers.indexOf(marker) + 1);
      const numeral = document.createElementNS(SVG_NS, 'text');
      const centerX = width / 2;
      const centerY = height / 2;
      numeral.setAttribute('x', String(centerX));
      numeral.setAttribute('y', String(centerY));
      numeral.setAttribute('text-anchor', 'middle');
      numeral.setAttribute('dominant-baseline', 'central');
      numeral.classList.add('problem-marker-number');
      numeral.textContent = String(number);
      layer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
      layer.group.replaceChildren(circle, numeral);
      requestAnimationFrame(() => {
        const bounds = numeral.getBBox();
        const offsetX = centerX - (bounds.x + bounds.width / 2);
        const offsetY = centerY - (bounds.y + bounds.height / 2);
        numeral.setAttribute('x', String(centerX + offsetX));
        numeral.setAttribute('y', String(centerY + offsetY));
      });
    });
  };

  const renderFocus = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    viewportLayer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    viewportLayer.group.replaceChildren();
    if (!(focusedElement instanceof HTMLElement) || !focusedElement.matches(':focus-visible')) return;
    const rect = focusedElement.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) return;
    const styles = getComputedStyle(focusedElement);
    const offset = parseFloat(styles.getPropertyValue('--line-focus-offset') || '5');
    const radius = parseFloat(styles.borderRadius || '0') + offset;
    const focusRect = document.createElementNS(SVG_NS, 'rect');
    focusRect.setAttribute('x', String(rect.left - offset));
    focusRect.setAttribute('y', String(rect.top - offset));
    focusRect.setAttribute('width', String(rect.width + offset * 2));
    focusRect.setAttribute('height', String(rect.height + offset * 2));
    focusRect.setAttribute('rx', String(Math.max(0, radius)));
    focusRect.setAttribute('pathLength', '1');
    focusRect.setAttribute('vector-effect', 'non-scaling-stroke');
    focusRect.dataset.lineId = 'interaction.focus';
    focusRect.dataset.lineToken = 'accent';
    focusRect.dataset.lineDirection = 'clockwise';
    focusRect.classList.add('line-system-path', 'line-token-accent');
    focusRect.style.strokeWidth = '2';
    viewportLayer.group.append(focusRect);
  };

  const render = () => {
    renderFrame = 0;
    renderedKeys.clear();
    duplicateSegments.length = 0;
    runtimeSegments.length = 0;
    documentLayer.group.replaceChildren();
    const rootRect = shell.getBoundingClientRect();
    const width = shell.clientWidth;
    const contentHeight = [...shell.children]
      .filter((element) => !element.classList.contains('line-system-layer'))
      .reduce((maximum, element) => Math.max(maximum, element.getBoundingClientRect().bottom - rootRect.top), 0);
    const height = Math.max(shell.clientHeight, contentHeight);
    documentLayer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    documentLayer.svg.style.height = `${height}px`;
    if (document.documentElement.dataset.homeSystem === 'true') renderHomeTopology(rootRect);
    if (document.documentElement.dataset.caseSystem === 'true') renderCaseTopology(rootRect);
    renderLocalLayers();
    renderFocus();

    const endpointDegree = new Map();
    runtimeSegments.forEach((segment) => {
      endpointDegree.set(segment.start, (endpointDegree.get(segment.start) || 0) + 1);
      endpointDegree.set(segment.end, (endpointDegree.get(segment.end) || 0) + 1);
    });
    const diagnostics = {
      duplicateSegments: [...duplicateSegments],
      danglingEndpoints: runtimeSegments.flatMap((segment) => [
        ...(!segment.terminalStart && endpointDegree.get(segment.start) === 1 ? [`${segment.id}:start`] : []),
        ...(!segment.terminalEnd && endpointDegree.get(segment.end) === 1 ? [`${segment.id}:end`] : []),
      ]),
    };
    if (debug) {
      const debugGroup = document.createElementNS(SVG_NS, 'g');
      debugGroup.classList.add('line-system-debug-overlay');
      runtimeSegments.forEach((segment) => {
        const startDegree = endpointDegree.get(segment.start) || 0;
        const endDegree = endpointDegree.get(segment.end) || 0;
        const status = [
          segment.terminalStart ? 'terminal' : startDegree > 1 ? 'junction' : 'dangling',
          segment.terminalEnd ? 'terminal' : endDegree > 1 ? 'junction' : 'dangling',
        ].join('→');
        [[segment.x1, segment.y1], [segment.x2, segment.y2]].forEach(([x, y]) => {
          const anchor = document.createElementNS(SVG_NS, 'circle');
          anchor.setAttribute('cx', String(x));
          anchor.setAttribute('cy', String(y));
          anchor.setAttribute('r', '2.5');
          anchor.classList.add('line-system-debug-anchor');
          debugGroup.append(anchor);
        });
        const label = document.createElementNS(SVG_NS, 'text');
        label.setAttribute('x', String((segment.x1 + segment.x2) / 2 + 4));
        label.setAttribute('y', String((segment.y1 + segment.y2) / 2 - 4));
        label.classList.add('line-system-debug-label');
        label.textContent = `${segment.id} · ${segment.direction} · ${status}`;
        debugGroup.append(label);
      });
      documentLayer.group.append(debugGroup);
    }
    window.__lineTopology = {
      version: LINE_TOPOLOGY.version,
      segments: runtimeSegments,
      diagnostics,
    };
    document.documentElement.dataset.lineSegmentCount = String(runtimeSegments.length);
    document.documentElement.dataset.lineDuplicateCount = String(diagnostics.duplicateSegments.length);
    document.documentElement.dataset.lineDanglingCount = String(diagnostics.danglingEndpoints.length);
    document.documentElement.dataset.lineSystemReady = 'true';
    requestAnimationFrame(syncLineReveals);
  };

  const scheduleRender = () => {
    if (renderFrame) cancelAnimationFrame(renderFrame);
    renderFrame = requestAnimationFrame(render);
  };

  const resizeObserver = new ResizeObserver(scheduleRender);
  resizeObserver.observe(shell);
  document.querySelectorAll('[data-home-project-slot], .case-study, .case-body, .case-meta, .figma-carousel, .team-panel')
    .forEach((element) => resizeObserver.observe(element));

  document.addEventListener('load', scheduleRender, true);
  document.addEventListener('loadedmetadata', scheduleRender, true);
  document.addEventListener('mediachange', scheduleRender);
  document.addEventListener('focusin', (event) => {
    focusedElement = event.target instanceof HTMLElement ? event.target : null;
    scheduleRender();
  });
  document.addEventListener('focusout', () => {
    focusedElement = null;
    scheduleRender();
  });
  document.addEventListener('toggle', scheduleRender, true);
  window.addEventListener('resize', scheduleRender, { passive: true });
  window.addEventListener('scroll', renderFocus, { passive: true });
  document.fonts?.ready.then(scheduleRender);

  document.querySelectorAll('svg:not(.line-system-layer)').forEach((svg, svgIndex) => {
    svg.querySelectorAll('path, line, circle, rect').forEach((shape, shapeIndex) => {
      if (!shape.hasAttribute('pathLength')) shape.setAttribute('pathLength', '1');
      if (!shape.dataset.lineId) shape.dataset.lineId = `inline.${svgIndex + 1}.${shapeIndex + 1}`;
      if (!shape.dataset.lineToken) shape.dataset.lineToken = 'current';
      if (!shape.dataset.lineDirection) shape.dataset.lineDirection = 'forward';
    });
  });

  scheduleRender();
};
