import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <section className="contact-section">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required />
          </label>
          <button type="submit">Send</button>
        </form>
        <p className="form-message">{formMessage}</p>
        <div className="social-media">
          <h2>Connect with us:</h2>
          <div className="social-media-box">
            <a href="https://facebook.com/ben Titus" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="social-media-box">
            <a href="https://twitter.com/ben titus" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <div className="social-media-box">
            <a href="https://instagram.com/bentitus99" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
          {/* Add more as needed */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

