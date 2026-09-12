import { PROFILE } from './data'

export const SITE_URL = 'https://kshitizkumar.in'
export const SITE_TITLE = 'Kshitiz Kumar | Software Development Engineer'
export const SITE_DESCRIPTION = 'Meet Kshitiz Kumar, a CSE student at IIIT Nagpur building AI applications, RAG systems and full-stack projects. Explore his work, skills and contact details.'

export const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: PROFILE.name,
      alternateName: ['Kshitiz', 'kshitizkumar.in'],
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#profile`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntity: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'en',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: PROFILE.name,
      givenName: PROFILE.firstName,
      familyName: PROFILE.lastName,
      alternateName: PROFILE.firstName,
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      sameAs: [PROFILE.github, PROFILE.linkedin],
      knowsAbout: ['Full-stack development', 'Artificial intelligence', 'Retrieval-augmented generation', 'React', 'Node.js', 'Python', 'Browser automation'],
    },
  ],
}
