// Workshops page - Static Content

import type { PhotoMeta } from '../data/gallery';

export interface Workshop {
  title: string;
  metaDescription: string;
  galleryPath?: string;
  galleryMetadata?: Record<string, PhotoMeta>;
}

// EDIT CONTENT BELOW

// General page content
export const workshopsPage = {
  title: 'Workshops',
  metaTitle: 'Workshops · maybe:fiction',
  metaDescription: 'Description goes here!',
  description: "Previous workshops we've hosted!",
};

// Workshop entries
export const workshops: Workshop[] = [
  {
    title: 'Beg | Mid | End',
    metaDescription: `A generative creative writing experience where by the end, participants complete a short piece with a beginning, middle, and end—but writing is only the destination. Through playful prompts, games, drawing, and other tactile activities, we explore the month's theme (e.g., intimacy, monsters, ritual) from unexpected angles. No one does this alone, either: in groups and pairs, we shape our ideas in imaginative, collaborative ways.`,
  },
  {
    title: 'Artluck',
    metaDescription: `An Open Everything — bring a story to tell, a song to sing, a painting to hang, or free samples of that recipe you're testing out.\n\nEven if you come solely as a spectator, don't worry — we'll find a way to integrate your expression too. Crayons, clay, and papers will be smattered on tables.`,
  },
];
