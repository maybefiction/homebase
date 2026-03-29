export interface Production {
  slug: string;
  title: string;
  metaDescription: string;
}

export const productionsPage = {
  title: 'Productions',
  metaTitle: 'Productions · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: 'Description goes here!',
};

export const productions: Production[] = [
  {
    slug: 'jornada-de-puertos-abiertas',
    title: 'Jornada De Puertos Abiertas',
    metaDescription: 'Jornada De Puertos Abiertas — a maybe:fiction production.',
  },
  {
    slug: 'friend-knocks',
    title: 'When a Friend Knocks',
    metaDescription: 'When a Friend Knocks — a maybe:fiction production.',
  },
  {
    slug: 'what-clings',
    title: 'What Clings',
    metaDescription: 'What Clings — a maybe:fiction production.',
  },
  {
    slug: 'spontaneous-attachment',
    title: 'Spontaneous Attachment',
    metaDescription: 'Spontaneous Attachment — a maybe:fiction production.',
  },
];
