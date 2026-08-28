import { PROJECTS } from './projects.js';

export const PANEL_PROJECTS = PROJECTS.map(({ route, label }) => ({ href: route, label }));

export const PANEL_LEAD_LINES = [
  'I shape design where problems are',
  'undefined, but commitments aren’t.',
];

export const PANEL_SUPPORT = 'Over the last decade, I’ve led research and product efforts among organizations including Palo Alto Networks, Harvard Business School, DocuSign, Hitachi Energy, Cisco, and more....';
