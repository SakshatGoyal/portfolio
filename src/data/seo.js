import { LINKEDIN_URL } from './contact-links.js';

export const SITE_URL = 'https://sakshat-goyal.com/';
export const PERSON_ID = `${SITE_URL}#person`;
export const WEBSITE_ID = `${SITE_URL}#website`;
export const PROFILE_PAGE_ID = `${SITE_URL}about/#profile-page`;

export const PERSON_SCHEMA = Object.freeze({
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Sakshat Goyal',
  alternateName: 'Sākshāt Goyal',
  url: SITE_URL,
  jobTitle: 'Product Designer',
  sameAs: [LINKEDIN_URL],
});

export const WEBSITE_SCHEMA = Object.freeze({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Sakshat Goyal',
  alternateName: 'Sākshāt Goyal',
  publisher: { '@id': PERSON_ID },
});

export const HOME_STRUCTURED_DATA = Object.freeze({
  '@context': 'https://schema.org',
  '@graph': [PERSON_SCHEMA, WEBSITE_SCHEMA],
});

export const ABOUT_STRUCTURED_DATA = Object.freeze({
  '@context': 'https://schema.org',
  '@graph': [
    PERSON_SCHEMA,
    WEBSITE_SCHEMA,
    {
      '@type': 'ProfilePage',
      '@id': PROFILE_PAGE_ID,
      url: `${SITE_URL}about/`,
      name: 'About Sakshat Goyal',
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': PERSON_ID },
    },
  ],
});
