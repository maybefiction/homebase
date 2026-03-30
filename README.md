# maybe:fiction

Homebase site for maybe:fiction productions!

## Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server (http://localhost:4321/homebase)
npm run build        # production build to dist/
```

### Troubleshooting

If you see Vite transform errors after changing dependencies or fonts, clear the cache and restart:

```bash
rm -rf node_modules/.vite && npm run dev
```

---

## Editing Site Content

All text content lives in simple data files inside **`src/data/`**, and image content lives in the **`assets/`** folder. You shouldn't need to update any other files.

> **Important:** Only edit text inside quote marks (`'...'` or `"..."`). Don't delete commas, curly braces, or brackets — those are part of the file structure.

### Quick reference

| Page | File to edit | Photo folder |
|------|-------------|--------------|
| [Home](#home) | [`src/data/home.ts`](src/data/home.ts) | — |
| [About](#about) | [`src/data/about.ts`](src/data/about.ts) | `assets/` (profile images) |
| [Productions](#productions) | [`src/data/productions.ts`](src/data/productions.ts) | `assets/<folder-name>/` |
| [Rituals](#rituals) | [`src/data/rituals.ts`](src/data/rituals.ts) | `assets/<folder-name>/` |
| [Workshops](#workshops) | [`src/data/workshops.ts`](src/data/workshops.ts) | `assets/workshops/` |
| [Contact](#contact) | [`src/data/contact.ts`](src/data/contact.ts) | — |
| [Donate](#donate) | [`src/data/donate.ts`](src/data/donate.ts) | — |
| [404 Error](#404-error-page) | [`src/data/errors.ts`](src/data/errors.ts) | — |
| Workshop gallery metadata | [`src/data/gallery.ts`](src/data/gallery.ts) | — |

---

## Uploading Photos

All images live in the **`assets/`** folder at the project root.

| Purpose | Where to put files |
|---------|--------------------|
| Site logo | `assets/maybefiction-logo.png` (replace this file) |
| Home sticky-note backgrounds | `assets/sticky-note-1.png` through `sticky-note-4.png` |
| Creator profile photos | `assets/` (then reference in `about.ts` as `'/assets/filename.jpg'`) |
| Workshop gallery | `assets/workshops/` |
| Production/Ritual galleries | `assets/<folder-name>/` (match the `galleryPath` in the data file) |

If you want to add a new event gallery, you'll need to create a new folder in the **`assets/`** folder and add the images to it. Then, you'll need to add the gallery path to the corresponding data file.

Supported image formats: `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`

Images are automatically optimized during the build — no need to compress them beforehand.
