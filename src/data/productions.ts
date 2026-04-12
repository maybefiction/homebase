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
      'when a friend knocks is an experimental art series that brings five fictional short stories to life through intimate, participatory gatherings. These temporary spaces reject spectatorship in favor of shared play, transforming narrative into a social practice that culminates in a community exhibition.',
  },
  {
    title: 'What Clings',
    metaDescription:
      'What Clings is a multidisciplinary art project exploring the disappearance and transformation of everyday forms of connection—night skies thick with shooting stars, neighbors knocking on doors to come outside, hands sticky with Play-Doh and Legos.\n\n' +
      'The work examines what has been lost in the transition out of childhood, what has been buried under convenience, efficiency, and commodification, and what may no longer be accessible at all.\n\n' +
      'The project originates in when a friend knocks, an ongoing series of participatory events that began as a way to bring fictional scenarios into real life. These events—communal cafés, field trips, games, and performances—create conditions for forms of connection to re-emerge. They emphasize presence and play, allowing participants to re-encounter ways of relating that may feel unfamiliar, but are not new. Organized without reliance on social media or algorithmic mediation, they unfold through direct invitation, chance, and word of mouth.\n\n' +
      'What Clings is the culmination of this process. The traces of these gatherings—objects, recordings, images, and written accounts—are translated into installations that function as both documentation and transformation. The work moves between lived experience and artifact, examining what persists after moments of connection pass.\n\n' +
      'Across its forms, What Clings investigates how intimacy is created, how it lingers, and what it leaves behind. It is less concerned with producing static works than with cultivating situations in which attachment can emerge—quietly, collectively, and without spectacle.',
    galleryPath: 'what-clings',
  },
  {
    title: 'Spontaneous Attachment',
    metaDescription:
      'Spontaneous Attachment is an immersive performance responding to a world increasingly asking us to connect through screens, schedules, and institutions— leaving us feeling like we are transacting rather than genuinely relating, and thinning the space for real human connection and intimacy, with ourselves and with one another.\n\n' +
      'The evening centers on gathering, dance, and live music—longstanding pillars of human social behavior and connection. The show asks: What forms of intimacy are disappearing? Do we even notice their absence? And what might still be worth preserving?',
  },
];
