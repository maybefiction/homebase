interface StickyNoteLinkProps {
  href: string;
  image: ImageMetadata;
  children: React.ReactNode;
}

const StickyNoteLink = ({ href, image, children }: StickyNoteLinkProps) => (
  <a
    href={href}
    className="sticky-note-link"
    style={{ backgroundImage: `url('${image.src}')` }}
  >
    {children}
  </a>
);

export default StickyNoteLink;
