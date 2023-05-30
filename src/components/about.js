import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about__section">
        <div className="about__content">
          <h2 className="about__title">About Our Store</h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="about__image-container">
          <img src="/images/about-image.jpg" alt="About Us" className="about__image" />
        </div>
      </section>
      <section className="about__section about__section--reverse">
        <div className="about__content">
          <h2 className="about__title">Our Mission</h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="about__image-container">
          <img src="/images/mission-image.jpg" alt="Our Mission" className="about__image" />
        </div>
      </section>
      <section className="about__section">
        <div className="about__content">
          <h2 className="about__title">Our Vision</h2>
          <p className="about__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        <div className="about__image-container">
          <img src="/images/vision-image.jpg" alt="Our Vision" className="about__image" />
        </div>
      </section>
    </div>
  );
};

export default About;
