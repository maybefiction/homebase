// Productions page - Static Content

import type { PhotoMeta } from '../data/gallery';

export interface Production {
  title: string;
  date?: string;
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
    date: 'June 2024',
    metaDescription:
      'A performance art festival that transforms the private, intimate space of a home into a space for collective encounter, creation and play.\n\n' +
      'The host opens up their house to strangers, in an exercise of mutual trust, and each room becomes a potential stage. The characteristics of each house shape the performances and their development, as the domestic box becomes a magic box.\n\n' +
      'The festival is also a political standpoint: in the lack of free, open, spontaneous spaces where we can create for the joy of it, we need to recover the spaces and times where we can explore playfully and whimsically. Where we can blur the line between performer and audience. Where we can all feel safe to be and to become.\n\n' +
      'June 2023 - The 1st edition of Jornada de Puertas Abiertas took place in Madrid (Spain) in June 2023, and was hosted by Super Alex, founder of the project.\n\n' +
      'We fit 26 people into a one bedroom apartment. At first, performances happened simultaneously in different spaces of the house (living room, bedroom and bathroom). At a certain point, we brought everyone back together to the living room to continue the program.\n\n' +
      'The format was very open and we let the public roam freely as many of the works were interactive. On the most positive of notes, the public showed utmost respect for the house, to the point that everyone who stayed until the end helped out with cleaning and taking out the trash.\n\n' +
      'Fall 2026 - TBD',
  },
  {
    title: 'When a Friend Knocks',
    metaDescription:
      '**Brief**\n\n' +
      '*when a friend knocks* is an experimental art series that brings five fictional short stories to life through intimate, participatory gatherings. These temporary spaces reject spectatorship in favor of shared play, transforming narrative into a social practice that culminates in a community exhibition.\n\n' +
      '**Overview**\n\n' +
      "*when a friend knocks* is an intimate art series that translates five of Ishaan's fictional short stories into lived, interactive experiences. Taking place over 14 distinct events, the project brings narrative into the physical world through participatory gatherings—ranging from a pop-up café in a Chinese restaurant to a 50-person water balloon fight.\n\n" +
      "The project is a study in community co-operation: each of the 14 events is co-hosted by a different practitioner from Ishaan's art-making community, turning private homes and neighborhood spaces into temporary stages for collective creation. These are not performances to be watched, but spaces to be inhabited. By operating entirely offline—relying on flyers, SMS, and word-of-mouth—the work playfully resists the attention-driven behaviors of the digital age to preserve a world where physical presence is the primary requirement.\n\n" +
      'The artifacts generated during these gatherings—sounds, images, writings, and objects—will be curated into a final interactive community exhibition in Fall 2025.\n\n' +
      '**The Ethos:**\n\n' +
      '- **Co-operative Hosting** — Each event is a partnership, leveraging the mutual trust and diverse practices of 14 different co-hosts.\n\n' +
      '- **Anti-Spectatorial** — There are no observers. Everyone participates by playing, building, and creating alongside the hosts.\n\n' +
      '- **Physical Presence** — The work is intentionally un-digitized. There are no livestreams or social media accounts; the experience belongs only to those who were there.\n\n' +
      '- **Intentional Scale** — Most gatherings are purposefully small and intimate, using the domestic architecture of Brooklyn homes to dictate the form of the art.',
  },
  {
    title: 'What Clings',
    metaDescription:
      '*What Clings* is a multidisciplinary art project exploring the disappearance and transformation of everyday forms of connection—night skies thick with shooting stars, neighbors knocking on doors to come outside, hands sticky with Play-Doh and Legos.\n\n' +
      'The work examines what has been lost in the transition out of childhood, what has been buried under convenience, efficiency, and commodification, and what may no longer be accessible at all.\n\n' +
      'The project originates in when a friend knocks, an ongoing series of participatory events that began as a way to bring fictional scenarios into real life. These events—communal cafés, field trips, games, and performances—create conditions for forms of connection to re-emerge. They emphasize presence and play, allowing participants to re-encounter ways of relating that may feel unfamiliar, but are not new. Organized without reliance on social media or algorithmic mediation, they unfold through direct invitation, chance, and word of mouth.\n\n' +
      '*What Clings* is the culmination of this process. The traces of these gatherings—objects, recordings, images, and written accounts—are translated into installations that function as both documentation and transformation. The work moves between lived experience and artifact, examining what persists after moments of connection pass.\n\n' +
      'Across its forms, *What Clings* investigates how intimacy is created, how it lingers, and what it leaves behind. It is less concerned with producing static works than with cultivating situations in which attachment can emerge—quietly, collectively, and without spectacle.',
    galleryPath: 'what-clings',
  },
  {
    title: 'Spontaneous Attachment',
    metaDescription:
      '*Spontaneous Attachment* is an immersive performance responding to a world increasingly asking us to connect through screens, schedules, and institutions— leaving us feeling like we are transacting rather than genuinely relating, and thinning the space for real human connection and intimacy, with ourselves and with one another.\n\n' +
      'The evening centers on gathering, dance, and live music—longstanding pillars of human social behavior and connection. The show asks: *What forms of intimacy are disappearing? Do we even notice their absence? And what might still be worth preserving?*\n\n' +
      'Two dance works anchor the evening:\n\n' +
      '- **Duet** — Two figures in pointe shoes, faces obscured, transform from abstract shapes into something almost disturbingly human, moving from formal distance toward intimacy. Here is some footage from an early showing of the work as well as a recent rehearsal.\n\n' +
      '- **Quartet** — Created in collaboration with composer Samuel Mutter, this work investigates ritual, repetition, and intimacy, drawing on the deep interdependence of music and movement as expressions of human behavior. Here is a rehearsal and music sample.\n\n' +
      'Around and between these pieces, the audience engages with the themes through interactions and activations with each other and objects throughout the space.\n\n' +
      '- **Cave Installation** — On the ground floor, audiences will spend 20-30 minutes pre-performances in a room with a fire installation, gestural paintings, and jewelry where they will have the opportunity to make their own jewelry to wear during the show, and eat/drink show themed items.\n\n' +
      '- **Pond Installation** — On the balcony, the audience will spend 5-10 minutes between dances to offer something into the pond (TBD).\n\n' +
      'Our intention is for the entire evening to feel like a ritual—from the moment one enters until they leave.',
  },
];
