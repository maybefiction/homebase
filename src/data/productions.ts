// Productions page - Static Content


import type { PhotoMeta } from '../components/ui/Gallery.astro';

export interface Production {
  title: string;
  metaDescription: string;
  galleryPath?: string;
  galleryMetadata?: Record<string, PhotoMeta>;
}



// EDIT CONTENT BELOW

// General page content
export const productionsPage = {
  title: 'Productions',
  metaTitle: 'Productions · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: 'Description goes here!',
};


// Production entries
export const productions: Production[] = [
  {
    title: 'Jornada De Puertos Abiertas',
    metaDescription: 'Jornada De Puertos Abiertas — a maybe:fiction production.',
  },
  {
    title: 'When a Friend Knocks',
    metaDescription: 'When a Friend Knocks — a maybe:fiction production.',
  },
  {
    title: 'What Clings',
    metaDescription: 'What Clings — a maybe:fiction production.',
    galleryPath: 'what-clings',
  },
  {
    title: 'Spontaneous Attachment',
    metaDescription: 'Spontaneous Attachment — a maybe:fiction production.',
  },
];
