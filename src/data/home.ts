// Home page - Static Content

// EDIT CONTENT BELOW

// General page content
export const homePage = {
  metaTitle: 'maybe:fiction',
  metaDescription: 'maybe:fiction — a creative collective.',
  tagline:
    'We believe art happens when we gather, share stories, and imagine other ways of living together.',
  logoAlt: 'maybe:fiction studios logo',
  navLinks: [
    { label: 'About', href: 'about', row: 'inner' },
    { label: 'Workshops', href: 'workshops', row: 'inner' },
    { label: 'Productions', href: 'productions', row: 'outer' },
    { label: 'Rituals', href: 'rituals', row: 'outer' },
  ] as const,
};
