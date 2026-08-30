import { PROJECTS } from './projects.js';

export const PANEL_PROJECTS = PROJECTS.map(({ route, label, homepage }) => ({
  href: route,
  label,
  panelLabel: homepage.panelLabel || label,
}));

export const PANEL_LEAD_LINES = [
  'I shape design where problems are',
  'undefined, but commitments aren’t.',
];

export const PANEL_SUPPORT = 'Over the last decade, I’ve led research and product efforts at Palo Alto Networks, Harvard Business School, DocuSign, Hitachi, and Cisco.';
