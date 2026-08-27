export const LINE_TOPOLOGY = Object.freeze({
  version: 1,
  tokens: Object.freeze({
    divider: { css: '--cs-divider', width: 1 },
    intense: { css: '--cs-divider-intense', width: 1 },
    outline: { css: '--line', width: 1 },
    'navigation-outline': { css: '--site-navigation-outline', width: 1 },
    accent: { css: '--accent', width: 2 },
    current: { css: 'currentColor', width: 1 },
    'platform-core': { css: '--line', width: 1 },
    'platform-contribution': { css: '--line', width: 1 },
  }),
  localBoxes: Object.freeze([
    { id: 'platform-core-outline', selector: '.platform-core', token: 'platform-core', direction: 'clockwise' },
    { id: 'platform-contribution-outline', selector: '.platform-contributions > div', token: 'platform-contribution', direction: 'clockwise' },
    { id: 'previous-case-outline', selector: '.previous-case', token: 'outline', direction: 'clockwise' },
    { id: 'next-case-outline', selector: '.next-case', token: 'outline', direction: 'clockwise' },
  ]),
  underlines: Object.freeze([
    { id: 'section-label-rule', selector: '.section-label', token: 'outline', direction: 'left-to-right' },
    { id: 'home-close-underline', selector: '.home-close a', token: 'current', direction: 'left-to-right' },
  ]),
  metadataRules: Object.freeze([
    {
      id: 'case-meta-row-rules',
      selector: '.case-meta',
      rowSelector: ':scope > div',
      widthSource: '.case-intro > p',
      token: 'navigation-outline',
      direction: 'left-to-right',
    },
  ]),
});

const SVG_NS = 'http://www.w3.org/2000/svg';
const coordinateKey = (x, y) => `${x.toFixed(3)}:${y.toFixed(3)}`;

const removeLineSystemArtifacts = () => {
  if (typeof document === 'undefined') return;
  document.querySelectorAll('.line-system-layer').forEach((layer) => layer.remove());
  document.querySelectorAll('.line-system-host').forEach((host) => host.classList.remove('line-system-host'));
  const shell = document.querySelector('.page-shell');
  if (shell instanceof HTMLElement) delete shell.dataset.lineSystemMounted;
  for (const key of [
    'lineSystem',
    'lineSystemReady',
    'lineSegmentCount',
    'lineDuplicateCount',
    'lineDanglingCount',
    'lineDebug',
  ]) delete document.documentElement.dataset[key];
};

const createSvg = (className) => {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.classList.add('line-system-layer', className);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.style.pointerEvents = 'none';
  const group = document.createElementNS(SVG_NS, 'g');
  svg.append(group);
  return { svg, group, signature: '' };
};

const replaceLayerChildren = (layer, signature, ...children) => {
  if (layer.signature === signature) return false;
  layer.group.replaceChildren(...children);
  layer.signature = signature;
  return true;
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

const linePath = ({ id, x1, y1, x2, y2, token = 'divider', width, direction, start, end }) => {
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

export const initLineSystem = () => {
  window.__lineSystemDispose?.();
  removeLineSystemArtifacts();

  const shell = document.querySelector('.page-shell');
  if (!(shell instanceof HTMLElement)) return;
  shell.dataset.lineSystemMounted = 'true';
  document.documentElement.dataset.lineSystem = 'svg';

  const debug = new URLSearchParams(window.location.search).get('line-debug') === '1';
  if (debug) document.documentElement.dataset.lineDebug = 'true';

  const documentLayer = createSvg('line-system-document');
  shell.prepend(documentLayer.svg);
  let documentRenderGroup = documentLayer.group;

  const viewportLayer = createSvg('line-system-viewport');
  document.body.append(viewportLayer.svg);

  const localLayers = new Map();
  const runtimeSegments = [];
  const duplicateSegments = [];
  const renderedKeys = new Set();
  const controller = new AbortController();
  let renderFrame = 0;
  let settledRenderFrame = 0;
  let focusedElement = null;
  let disposed = false;

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
    const rendered = linePath(segment);
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

  const drawHorizontal = (group, id, x1, x2, y, token, terminalStart = false, terminalEnd = false) => {
    registerSegment(group, {
      id, x1, y1: y, x2, y2: y, token, direction: 'left-to-right',
      start: coordinateKey(snapCoordinate(x1), snapCoordinate(y)),
      end: coordinateKey(snapCoordinate(x2), snapCoordinate(y)),
    }, terminalStart, terminalEnd);
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
          drawHorizontal(documentRenderGroup, id, coreRect.right, rect.left, rect.top + rect.height / 2, 'platform-core', true, true, false);
          return;
        }
        const x = rect.left + rect.width / 2;
        registerSegment(documentRenderGroup, {
          id,
          x1: x,
          y1: Math.max(coreRect.bottom, rect.top - 12),
          x2: x,
          y2: rect.top,
          token: 'platform-core',
          direction: 'top-to-bottom',
        }, true, true);
      });
    });
  };

  const renderMetadataRules = (rootRect) => {
    LINE_TOPOLOGY.metadataRules.forEach((spec) => {
      document.querySelectorAll(spec.selector).forEach((metadata, metadataIndex) => {
        const rows = [...metadata.querySelectorAll(spec.rowSelector)];
        const widthSource = document.querySelector(spec.widthSource);
        if (rows.length === 0 || !(widthSource instanceof HTMLElement)) return;
        const sourceRect = relativeRect(widthSource, rootRect);
        rows.forEach((row, rowIndex) => {
          const rowRect = relativeRect(row, rootRect);
          drawHorizontal(
            documentRenderGroup,
            `${spec.id}.${metadataIndex + 1}.${rowIndex + 1}`,
            sourceRect.left,
            sourceRect.right,
            rowRect.top,
            spec.token,
            true,
            true,
          );
        });
        const finalRowRect = relativeRect(rows.at(-1), rootRect);
        drawHorizontal(
          documentRenderGroup,
          `${spec.id}.${metadataIndex + 1}.end`,
          sourceRect.left,
          sourceRect.right,
          finalRowRect.bottom,
          spec.token,
          true,
          true,
        );
      });
    });
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
        const signature = `${spec.id}:${index + 1}:${width}:${height}:${radius}:${spec.token}:${spec.direction}`;
        if (layer.signature !== signature) {
          replaceLayerChildren(layer, signature, rectPath({
            id: `${spec.id}.${index + 1}`,
            width,
            height,
            radius,
            token: spec.token,
            direction: spec.direction,
          }));
        }
      });
    });

    LINE_TOPOLOGY.underlines.forEach((spec) => {
      document.querySelectorAll(spec.selector).forEach((element, index) => {
        const layer = ensureLocalLayer(element, 'underline');
        const width = element.clientWidth;
        const height = element.clientHeight;
        layer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        const signature = `${spec.id}:${index + 1}:${width}:${height}:${spec.token}:${spec.direction}`;
        if (layer.signature !== signature) {
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
          replaceLayerChildren(layer, signature, rendered.path);
        }
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
      const signature = `${width}:${height}:${number}`;
      if (!replaceLayerChildren(layer, signature, circle, numeral)) return;
      requestAnimationFrame(() => {
        if (disposed || !numeral.isConnected) return;
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
    if (
      !(focusedElement instanceof HTMLElement)
      || !focusedElement.matches(':focus-visible')
      || focusedElement.closest('[data-carousel]')
    ) {
      replaceLayerChildren(viewportLayer, 'none');
      return;
    }
    const rect = focusedElement.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > height || rect.right < 0 || rect.left > width) {
      replaceLayerChildren(viewportLayer, 'none');
      return;
    }
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
    replaceLayerChildren(
      viewportLayer,
      `${rect.left}:${rect.top}:${rect.width}:${rect.height}:${offset}:${radius}`,
      focusRect,
    );
  };

  const render = () => {
    renderFrame = 0;
    if (disposed) return;
    renderedKeys.clear();
    duplicateSegments.length = 0;
    runtimeSegments.length = 0;
    documentRenderGroup = document.createElementNS(SVG_NS, 'g');
    const rootRect = shell.getBoundingClientRect();
    const width = shell.clientWidth;
    const contentHeight = [...shell.children]
      .filter((element) => !element.classList.contains('line-system-layer'))
      .reduce((maximum, element) => Math.max(maximum, element.getBoundingClientRect().bottom - rootRect.top), 0);
    const height = Math.max(shell.clientHeight, contentHeight);
    renderPlatformConnectors(rootRect);
    renderMetadataRules(rootRect);
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
      documentRenderGroup.append(debugGroup);
    }
    documentLayer.svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    documentLayer.svg.style.height = `${height}px`;
    const documentSignature = `${width}:${height}:${runtimeSegments.map((segment) => [
      segment.id,
      segment.token,
      segment.direction,
      segment.x1,
      segment.y1,
      segment.x2,
      segment.y2,
    ].join(':')).join('|')}:${debug ? 'debug' : 'standard'}`;
    replaceLayerChildren(documentLayer, documentSignature, ...documentRenderGroup.children);
    documentRenderGroup = documentLayer.group;
    window.__lineTopology = {
      version: LINE_TOPOLOGY.version,
      segments: runtimeSegments,
      diagnostics,
    };
    document.documentElement.dataset.lineSegmentCount = String(runtimeSegments.length);
    document.documentElement.dataset.lineDuplicateCount = String(diagnostics.duplicateSegments.length);
    document.documentElement.dataset.lineDanglingCount = String(diagnostics.danglingEndpoints.length);
    document.documentElement.dataset.lineSystemReady = 'true';
  };

  const scheduleRender = () => {
    if (disposed) return;
    if (renderFrame) cancelAnimationFrame(renderFrame);
    renderFrame = requestAnimationFrame(render);
  };

  const scheduleSettledRender = () => {
    if (disposed) return;
    if (settledRenderFrame) cancelAnimationFrame(settledRenderFrame);
    settledRenderFrame = requestAnimationFrame(() => {
      settledRenderFrame = requestAnimationFrame(() => {
        settledRenderFrame = 0;
        scheduleRender();
      });
    });
  };

  const resizeObserver = new ResizeObserver(scheduleRender);
  resizeObserver.observe(shell);
  document.querySelectorAll('.platform-host, .team-panel')
    .forEach((element) => resizeObserver.observe(element));

  const dispose = () => {
    if (disposed) return;
    disposed = true;
    controller.abort();
    resizeObserver.disconnect();
    if (renderFrame) cancelAnimationFrame(renderFrame);
    if (settledRenderFrame) cancelAnimationFrame(settledRenderFrame);
    removeLineSystemArtifacts();
    if (window.__lineSystemDispose === dispose) delete window.__lineSystemDispose;
    delete window.__lineTopology;
  };
  window.__lineSystemDispose = dispose;

  document.addEventListener('load', scheduleRender, { capture: true, signal: controller.signal });
  document.addEventListener('loadedmetadata', scheduleRender, { capture: true, signal: controller.signal });
  document.addEventListener('mediachange', (event) => {
    if (!(event instanceof CustomEvent) || event.detail?.geometryChanged !== false) scheduleRender();
  }, { signal: controller.signal });
  document.addEventListener('linegeometrychange', (event) => {
    if (!(event instanceof CustomEvent)) return;
    if (event.detail?.phase !== 'complete') {
      scheduleRender();
      return;
    }
    scheduleSettledRender();
  }, { signal: controller.signal });
  document.addEventListener('focusin', (event) => {
    focusedElement = event.target instanceof HTMLElement ? event.target : null;
    renderFocus();
  }, { signal: controller.signal });
  document.addEventListener('focusout', () => {
    focusedElement = null;
    renderFocus();
  }, { signal: controller.signal });
  document.addEventListener('toggle', scheduleRender, { capture: true, signal: controller.signal });
  window.addEventListener('resize', scheduleRender, { passive: true, signal: controller.signal });
  window.addEventListener('scroll', renderFocus, { passive: true, signal: controller.signal });
  document.fonts?.ready.then(() => { if (!disposed) scheduleRender(); });
  document.fonts?.addEventListener('loadingdone', scheduleRender, { signal: controller.signal });
  document.fonts?.addEventListener('loadingerror', scheduleRender, { signal: controller.signal });

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
