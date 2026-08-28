const BREAKABLE_SPACE = /[\u0009-\u000d\u0020]/;
const FINAL_WORD_SEPARATOR = /([\u0009-\u000d\u0020]+)(\S+)[\u0009-\u000d\u0020]*$/u;
const EXCLUDED_NODE_SELECTOR = 'script, style, template, noscript, svg, [hidden], [aria-hidden="true"], [data-widow-ignore]';
const EDITORIAL_TEXT_SELECTOR = 'body :is(p, li, h1, h2, h3, h4, h5, h6, figcaption, blockquote)';

const eligibleTextNodes = (element) => {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let node = walker.nextNode();

  while (node) {
    const parent = node.parentElement;
    if (parent && !parent.closest(EXCLUDED_NODE_SELECTOR)) nodes.push(node);
    node = walker.nextNode();
  }

  return nodes;
};

const replaceCharacterAt = (nodes, index, replacement) => {
  let offset = 0;

  for (const node of nodes) {
    const end = offset + node.data.length;
    if (index < end) {
      const localIndex = index - offset;
      node.data = `${node.data.slice(0, localIndex)}${replacement}${node.data.slice(localIndex + 1)}`;
      return true;
    }
    offset = end;
  }

  return false;
};

const guardFinalPair = (element) => {
  if (element.closest('[hidden], [aria-hidden="true"], [data-widow-ignore]')) return;
  if (window.innerWidth <= 400) return;

  const nodes = eligibleTextNodes(element);
  const text = nodes.map((node) => node.data).join('');
  if (text.trim().split(/\s+/u).length < 2) return;

  const match = text.match(FINAL_WORD_SEPARATOR);
  if (!match || match.index === undefined) {
    if (text.includes('\u00a0')) element.dataset.widowGuarded = 'true';
    return;
  }

  const separatorIndex = match.index + match[1].length - 1;
  if (!BREAKABLE_SPACE.test(text[separatorIndex])) return;
  if (replaceCharacterAt(nodes, separatorIndex, '\u00a0')) element.dataset.widowGuarded = 'true';
};

export const initTypographySystem = () => {
  if (document.documentElement.dataset.typographySystemMounted === 'true') return;
  document.documentElement.dataset.typographySystemMounted = 'true';

  document.querySelectorAll(EDITORIAL_TEXT_SELECTOR).forEach(guardFinalPair);
};
