/**
 * @typedef {{ type: 'image' | 'video', src: string, poster?: string, width: number, height: number }} GalleryArtifact
 * @typedef {{ title: string, year: string, paragraphs: string[], media: GalleryArtifact[] }} GalleryProject
 */

/** @returns {GalleryArtifact} */
const image = (name, width, height) => ({
  type: 'image',
  src: `/assets/gallery/${name}.webp`,
  width,
  height,
});

/** @returns {GalleryArtifact} */
const video = (name, width, height) => ({
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

/**
 * @param {string} source
 * @returns {GalleryProject[]}
 */
export const parseGalleryNotes = (source) => {
  const lines = source.replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
  /** @type {Omit<GalleryProject, 'media'>[]} */
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
    return { ...project, media };
  }).sort((left, right) => Number(right.year) - Number(left.year));
};
