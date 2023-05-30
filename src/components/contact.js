import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <div className="contact__form-container">
        <form className="contact__form">
          <input type="text" placeholder="Your Name" className="contact__input" />
          <input type="email" placeholder="Your Email" className="contact__input" />
          <textarea placeholder="Your Message" className="contact__textarea" />
          <button type="submit" className="contact__button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
