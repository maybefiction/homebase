export interface Photo {
  date: string;
  location: string;
  caption: string;
  tags: Tag[];
  src: string;
  width: number;
  height: number;
}

type Tag = 'architecture' | 'city' | 'nature' | 'portrait' | 'travel';

export const photos: Photo[] = [
  {
    date: '2025-06-15',
    location: 'Lorem Valley',
    caption: 'Vivamus sagittis lacus vel augue laoreet.',
    tags: ['nature', 'travel'],
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
    width: 800,
    height: 534,
  },
  {
    date: '2025-08-22',
    location: 'Ipsum Heights',
    caption: 'Aenean lacinia bibendum nulla sed consectetur.',
    tags: ['architecture', 'city'],
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
    width: 800,
    height: 534,
  },
  {
    date: '2025-10-01',
    location: 'Dolor Beach',
    caption: '',
    tags: ['nature', 'travel'],
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    width: 800,
    height: 534,
  },
  {
    date: '2026-01-10',
    location: 'Amet City',
    caption: 'Cras mattis consectetur purus sit amet fermentum.',
    tags: ['city', 'architecture'],
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    width: 800,
    height: 534,
  },
  {
    date: '2026-03-05',
    location: 'Consectetur Park',
    caption: '',
    tags: ['nature', 'portrait'],
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    width: 800,
    height: 534,
  },
];
