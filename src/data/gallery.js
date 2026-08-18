/**
 * @typedef {{ id: string, type: 'image' | 'video', src: string, poster?: string, width: number, height: number }} GalleryArtifact
 * @typedef {{ column: number, span: number, row: number, rowSpan?: number }} GalleryPlacement
 * @typedef {{ info: GalleryPlacement, artifacts: Readonly<Record<string, GalleryPlacement>> }} GalleryLayout
 * @typedef {{ title: string, year: string, paragraphs: string[], media: GalleryArtifact[], layout: GalleryLayout }} GalleryProject
 */

/** @returns {GalleryArtifact} */
const image = (name, width, height) => ({
  id: name,
  type: 'image',
  src: `/assets/gallery/${name}.webp`,
  width,
  height,
});

/** @returns {GalleryArtifact} */
const video = (name, width, height) => ({
  id: name,
  type: 'video',
  src: `/assets/gallery/${name}.webm`,
  poster: `/assets/gallery/${name}-poster.webp`,
  width,
  height,
});

/** @type {Readonly<Record<string, GalleryArtifact[]>>} */
export const galleryMedia = Object.freeze({
  PANOPTICA: [
    video('panoptica-00', 1920, 1080),
    video('panoptica-01', 1919, 1654),
  ],
  'TREBUCHET TRIALS': [
    image('trebuchet-trials-00', 1024, 476),
    video('trebuchet-trials-01', 1920, 864),
    video('trebuchet-trials-02', 1920, 1080),
    image('trebuchet-trials-03', 900, 600),
  ],
  WEXEL: [
    video('wexel-00', 1920, 1080),
    image('wexel-01', 2400, 1627),
    image('wexel-02', 2400, 1350),
    image('wexel-03', 2400, 1350),
    image('wexel-04', 2400, 1059),
    image('wexel-05', 2048, 1274),
  ],
  'CISCO READY': [
    image('cready-redesign-00', 2400, 1350),
    image('cready-redesign-01', 2400, 1350),
    image('cready-redesign-02', 2400, 1350),
  ],
  'HBS-FACULTY-PLATFORM': [
    video('hbs-faculty-platform-00', 1920, 1920),
    image('hbs-faculty-platform-01', 2400, 914),
  ],
  'HBS - LEADING WITH AI': [video('hbs-leading-with-ai-00', 1920, 1080)],
  LUMINOSO: [video('luminoso-00', 1920, 1280)],
  'PANW-WORKBENCH': [image('panw-workbench', 2400, 1800)],
  'CISCO READY AI': [video('cisco-ready-ai-00', 1920, 1040)],
});

const place = (column, span, row, rowSpan = 1) => ({ column, span, row, rowSpan });

/** @type {Readonly<Record<string, GalleryLayout>>} */
export const galleryLayouts = Object.freeze({
  'PANW-WORKBENCH': {
    info: place(13, 8, 1),
    artifacts: { 'panw-workbench': place(1, 12, 1) },
  },
  LUMINOSO: {
    info: place(1, 8, 1),
    artifacts: { 'luminoso-00': place(9, 12, 1) },
  },
  'HBS - LEADING WITH AI': {
    info: place(13, 8, 1),
    artifacts: { 'hbs-leading-with-ai-00': place(1, 12, 1) },
  },
  'HBS-FACULTY-PLATFORM': {
    info: place(1, 8, 1),
    artifacts: {
      'hbs-faculty-platform-00': place(9, 12, 1),
      'hbs-faculty-platform-01': place(1, 20, 2),
    },
  },
  PANOPTICA: {
    info: place(11, 10, 1),
    artifacts: {
      'panoptica-00': place(1, 10, 1),
      'panoptica-01': place(1, 20, 2),
    },
  },
  'CISCO READY': {
    info: place(1, 10, 1),
    artifacts: {
      'cready-redesign-00': place(16, 5, 2),
      'cready-redesign-01': place(11, 10, 1),
      'cready-redesign-02': place(1, 15, 2),
    },
  },
  'CISCO READY AI': {
    info: place(16, 5, 1),
    artifacts: { 'cisco-ready-ai-00': place(1, 15, 1) },
  },
  'TREBUCHET TRIALS': {
    info: place(9, 12, 1),
    artifacts: {
      'trebuchet-trials-00': place(1, 8, 1),
      'trebuchet-trials-01': place(1, 15, 2, 2),
      'trebuchet-trials-02': place(16, 5, 2),
      'trebuchet-trials-03': place(16, 5, 3),
    },
  },
  WEXEL: {
    info: place(1, 8, 1),
    artifacts: {
      'wexel-00': place(9, 12, 1),
      'wexel-01': place(9, 12, 2),
      'wexel-02': place(1, 12, 3, 2),
      'wexel-03': place(1, 8, 2),
      'wexel-04': place(13, 8, 3),
      'wexel-05': place(13, 8, 4),
    },
  },
});

export const galleryProjectOrder = Object.freeze([
  'PANW-WORKBENCH',
  'LUMINOSO',
  'HBS - LEADING WITH AI',
  'HBS-FACULTY-PLATFORM',
  'PANOPTICA',
  'CISCO READY',
  'CISCO READY AI',
  'TREBUCHET TRIALS',
  'WEXEL',
]);

/**
 * @param {string} source
 * @returns {GalleryProject[]}
 */
export const parseGalleryNotes = (source) => {
  const lines = source.replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  /** @type {Omit<GalleryProject, 'media' | 'layout'>[]} */
  const projects = [];

  lines.slice(lines[0] === '# Gallery Notes' ? 1 : 0).forEach((line) => {
    const heading = line.match(/^(.*) - (\d{4})$/);
    if (heading) {
      projects.push({ title: heading[1], year: heading[2], paragraphs: [] });
      return;
    }
    const project = projects.at(-1);
    if (!project) throw new Error(`Gallery copy appears before a project heading: ${line}`);
    project.paragraphs.push(line);
  });

  return projects.map((project) => {
    const media = galleryMedia[project.title];
    if (!media) throw new Error(`Gallery media is missing for ${project.title}.`);
    const layout = galleryLayouts[project.title];
    if (!layout) throw new Error(`Gallery layout is missing for ${project.title}.`);
    return { ...project, media, layout };
  }).sort((left, right) => (
    galleryProjectOrder.indexOf(left.title) - galleryProjectOrder.indexOf(right.title)
  ));
};
