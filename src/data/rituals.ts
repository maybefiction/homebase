// Rituals page - Static Content


import type { PhotoMeta } from '../components/ui/Gallery.astro';

export interface Ritual {
  title: string;
  metaDescription: string;
  galleryPath?: string;
  galleryMetadata?: Record<string, PhotoMeta>;
}



// EDIT CONTENT BELOW

// General page content
export const ritualsPage = {
  title: 'Rituals / Gatherings',
  metaTitle: 'Rituals · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: 'Description goes here!',
};


// Ritual entries
export const rituals: Ritual[] = [
  {
    title: 'Just Give Me A Moment',
    metaDescription: 'Just Give Me A Moment — a maybe:fiction gathering.',
  },
  {
    title: 'Eclectic Pathetic',
    metaDescription: 'Eclectic Pathetic — a maybe:fiction gathering.',
  },
];
