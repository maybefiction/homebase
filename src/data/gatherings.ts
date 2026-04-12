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
    metaDescription:
      'Held in Prospect Park, the event invites participants to step away from their phones and into a shared, analog world. Inspired by a week spent offline with my grandparents in India as well as Third Nature Summer Camp, I designed the experience as both personal ritual and communal experiment.\n\n' +
      'Participants received a hand-packed toolkit: a wristwatch (to navigate time), a park map (for wandering), hand warmers (for phantom-phone comfort), a blank tote bag (as canvas), and a $25 gift card (for a surprise lunch adventure with color-coded groups). The day was shaped by spontaneity—games, crafts, naps, conversations, and unexpected collaborations. But participation was open-ended: doing nothing was encouraged, too.\n\n' +
      '*Just Give Me a Moment* blends mindfulness, movement, and mischief. It is not a rejection of technology, but a reminder of what else is possible when we loosen our grip. Like all of my work, it is a practice in joyful design, improvisational structure, and presence through play.',
  },
  {
    title: 'Eclectic Pathetic',
    metaDescription:
      '*Eclectic-pathetic* (from pathos) is a ritual practice born from the slow fermentation of a catholic upbringing, experiences with psychedelics, and the need to create a firm belief that there is an order in chaos.\n\n' +
      'Designed as an intimate interactive experience for a maximum of 10 people, the multimedia artist Super Alex invites you into a deep exploration of the world around you through sensory and natural elements.',
  },
];
