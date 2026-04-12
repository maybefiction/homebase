// About page - Static Content

export interface Creator {
  name: string;
  bio: string;
  imageUrl: string;
  socialLinks: SocialLink[];
  reversedDisplay?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const instagramIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>`;
const emailIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`;

// EDIT CONTENT BELOW

// General page content
export const aboutPage = {
  metaTitle: 'About · maybe:fiction',
  metaDescription: 'About maybe:fiction, the creative collective.',
  logoAlt: 'maybe:fiction studios logo',
  bio: 'maybe:fiction is a collective art studio founded by interdisciplinary artists Ishaan Goel and Super Alex. We create work that exists between narrative and lived experience, using community workshops, interactive productions, and ritual. Rooted in a process-oriented ethos, maybe:fiction values play, improvisation, and intimacy over polish. Our work aims to soften the line between artist and audience, inviting everyone to engage directly in acts of making.',
  socialLinks: [
    { name: 'Instagram', url: 'https://instagram.com', icon: instagramIcon },
  ] as SocialLink[],
};

// Creator bios
export const creators: Creator[] = [
  {
    name: 'Ishaan',
    bio: 'Ishaan is an experience designer, facilitator, and interdisciplinary artist based in Brooklyn. His work explores the interplay between imagined and real worlds through storytelling, participatory art, and whimsical visual forms that invite others into shared acts of play. For the past three years, he has organized and facilitated monthly community programming—including open mics, galleries, craft nights, and creative writing workshops—as accessible, low-stakes means of gathering and making art. His art and community practice is complemented by seven years of professional experience in product design and strategy at Meta and Capital One. Having leveraged design across both corporate ecosystems and grassroots settings, he brings a versatile understanding of human interaction to everything he builds, focusing on how we connect and create together.',
    imageUrl: '/assets/ishaan.jpg',
    reversedDisplay: true,
    socialLinks: [
      { name: 'Instagram', url: 'https://www.instagram.com/ishishgo', icon: instagramIcon },
      { name: 'Email', url: 'mailto:ishishgoel@gmail.com', icon: emailIcon },
    ] as SocialLink[],
  },
  {
    name: 'Alex',
    bio: 'Super Alex is a non-binary multidisciplinary artist & cultural mediator, developing their career between Madrid & New York City. Their artistic practice is an amalgam of sound, visual sensitivity and nostalgia. This reflects on their creation of spaces where different types of creative expression interact to evoke the feeling of home and child-like spontaneity. Their work explores the importance of play and intimacy, and how these stand against a world obsessed with functionality and hyperproductivity.',
    imageUrl: '/assets/Alex.jpg',
    socialLinks: [
      { name: 'Instagram', url: 'https://instagram.com', icon: instagramIcon },
      { name: 'Email', url: '', icon: emailIcon },
    ] as SocialLink[],
  },
];
