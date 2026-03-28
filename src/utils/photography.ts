import type { Photo } from '../data/photography';

export interface ResolvedPhoto extends Photo {
  formattedDate: string;
}

const formatDate = (dateStr: string): string =>
  new Date(dateStr + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const resolvePhotos = (photos: Photo[]): ResolvedPhoto[] => {
  return photos.map((photo) => ({
    ...photo,
    formattedDate: formatDate(photo.date),
  }));
};

export const computeTagCounts = (photos: ResolvedPhoto[]): [string, number][] => {
  const counts: Record<string, number> = {};
  for (const photo of photos) {
    for (const tag of photo.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }
  return Object.entries(counts).sort(([a], [b]) => a.localeCompare(b));
};

export const buildSidebarHtml = (photo: ResolvedPhoto): string => {
  const parts: string[] = [];

  if (photo.caption) {
    parts.push(`<p class="sidebar-caption">${photo.caption.replace(/\n/g, '<br>')}</p>`);
  }
  if (photo.location) {
    parts.push(`<p class="sidebar-location">${photo.location}</p>`);
  }

  parts.push(`<p class="sidebar-date">${photo.formattedDate}</p>`);

  if (photo.tags.length > 0) {
    const tags = photo.tags.map((t) => `<span class="sidebar-tag">${t}</span>`).join('');
    parts.push(`<div class="sidebar-tags">${tags}</div>`);
  }

  return parts.join('');
};
