import { socialLinks } from '../../data/about';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';

const SocialLinks = () => (
  <div className="social-links">
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label={link.name}
        dangerouslySetInnerHTML={{ __html: link.icon }}
      />
    ))}
  </div>
);

const About = () => (
  <Section>
    <div className="about-grid">
      <div className="about-profile">
        <img
          src={`${import.meta.env.BASE_URL}maybefiction-logo.png`}
          alt="maybe:fiction studios logo"
          className="about-avatar"
        />
        <SocialLinks />
      </div>
      <div className="about-content">
        <p className="about-text">
          <b>maybe:fiction</b> — the org / collective
          <br /><br />
          <b>Ishaan</b> — artist bio
          <br /><br />
          <b>Alex</b> — artist bio
        </p>
        <Button href={`${import.meta.env.BASE_URL}productions`}>See our work</Button>
      </div>
    </div>
  </Section>
);

export default About;
