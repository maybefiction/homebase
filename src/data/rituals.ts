export interface Ritual {
  slug: string;
  title: string;
  metaDescription: string;
}

export const ritualsPage = {
  title: 'Rituals / Gatherings',
  metaTitle: 'Rituals · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: 'Description goes here!',
};

export const rituals: Ritual[] = [
  {
    slug: 'just-give-me-a-moment',
    title: 'Just Give Me A Moment',
    metaDescription: 'Just Give Me A Moment — a maybe:fiction gathering.',
  },
  {
    slug: 'eclectic-pathetic',
    title: 'Eclectic Pathetic',
    metaDescription: 'Eclectic Pathetic — a maybe:fiction gathering.',
  },
];
