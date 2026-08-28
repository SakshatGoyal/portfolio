export const CASE_STUDY_SEQUENCE = Object.freeze([
  '/work/panw-ai/',
  '/work/hbs-ai-institute/',
  '/work/global-data-analytics/',
  '/work/one-report/',
  '/work/hitachi-energy/',
  '/work/cisco-customer-insights/',
  '/work/memory-lane/',
]);

const normalizeRoute = (pathname) => pathname.endsWith('/') ? pathname : `${pathname}/`;

export const caseStudyNavigationFor = (pathname) => {
  const route = normalizeRoute(pathname);
  const index = CASE_STUDY_SEQUENCE.indexOf(route);

  if (index === -1) throw new Error(`Case-study route is missing from CASE_STUDY_SEQUENCE: ${route}`);

  return {
    previousHref: CASE_STUDY_SEQUENCE[(index - 1 + CASE_STUDY_SEQUENCE.length) % CASE_STUDY_SEQUENCE.length],
    nextHref: CASE_STUDY_SEQUENCE[(index + 1) % CASE_STUDY_SEQUENCE.length],
  };
};
