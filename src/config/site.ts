export const SITE = {
  name: '9.0 SeismicCo',
  title: '9.0 SeismicCo | Engineered Seismic Anchoring Brackets & Kits',
  description: 'Pre-manufactured, ICC-approved seismic anchoring brackets and ready-to-deploy hardware kits engineered for hospitals, architects, and commercial builders.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://seismicco.com',
  twitterHandle: '@seismicco',
  socials: {
    twitter: 'https://twitter.com/seismicco',
    instagram: 'https://instagram.com/seismicco',
    linkedin: 'https://www.linkedin.com/company/seismicco',
    dribbble: 'https://dribbble.com/seismicco',
  },
} as const;

export type SiteConfig = typeof SITE;
