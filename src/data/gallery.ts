// Gallery - Static Content

export interface PhotoMeta {
    date?: string;
    location?: string;
    caption?: string;
    tags?: string[];
  }

// EDIT CONTENT BELOW

// Map image filenames to optional metadata.
// Images in the folder without an entry here still appear in the gallery.
export const galleryMeta: Record<string, PhotoMeta> = {};
