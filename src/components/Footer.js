import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer__section">
          <h3>Categories</h3>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home &amp; Furniture</li>
            <li>Beauty &amp; Health</li>
          </ul>
        </div>
        <div className="footer__section">
          <h3>Contact Us</h3>
          <p>
            123 Street, City, Country <br />
            Email: info@example.com <br />
            Phone: +1 234 567 890
          </p>
        </div>
        <div className="footer__section">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="footer__newsletter-form">
            <input
              type="email"
              placeholder="Your Email"
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
