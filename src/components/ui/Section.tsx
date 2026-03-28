interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <section className="section">
    <div>
      {children}
    </div>
  </section>
);

export default Section;
