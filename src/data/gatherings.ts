// Gatherings page - Static Content

import type { PhotoMeta } from '../data/gallery';

export interface Gathering {
  title: string;
  metaDescription: string;
  galleryPath?: string;
  galleryMetadata?: Record<string, PhotoMeta>;
}

// EDIT CONTENT BELOW

// General page content
export const gatheringsPage = {
  title: 'Gatherings',
  metaTitle: 'Gatherings · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: 'Description goes here!',
};

// Gathering entries
export const gatherings: Gathering[] = [
  {
    title: 'Just Give Me A Moment',
    metaDescription: 'Just Give Me A Moment — a maybe:fiction gathering.',
  },
  {
    title: 'Eclectic Pathetic',
    metaDescription: 'Eclectic Pathetic — a maybe:fiction gathering.',
  },
];
