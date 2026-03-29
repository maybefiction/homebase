import logo from '../../../assets/maybefiction-logo.png';
import Button from '../../components/ui/Button';
import Section from '../../components/ui/Section';
import { aboutPage, socialLinks } from '../../data/about';

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
          src={logo.src}
          alt={aboutPage.logoAlt}
          className="about-avatar"
        />
        <SocialLinks />
      </div>
      <div className="about-content">
        <p className="about-text">
          {aboutPage.bios.map((bio, i) => (
            <span key={bio.name}>
              {i > 0 && <><br /><br /></>}
              <b>{bio.name}</b> — {bio.text}
            </span>
          ))}
        </p>
        <Button href={`${import.meta.env.BASE_URL}${aboutPage.cta.href}`}>
          {aboutPage.cta.text}
        </Button>
      </div>
    </div>
  </Section>
);

export default About;
