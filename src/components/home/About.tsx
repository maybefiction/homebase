import { socialLinks } from '../../data/about';
import Button from '../ui/Button';
import Section from '../ui/Section';

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
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
          alt="Profile"
          className="about-avatar"
        />
        <SocialLinks />
      </div>
      <div className="about-content">
        <p className="about-text">
          <b>Lorem ipsum dolor sit amet!</b>
          <br /><br />
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br /><br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <Button href={`${import.meta.env.BASE_URL}photography`}>See my work</Button>
      </div>
    </div>
  </Section>
);

export default About;
