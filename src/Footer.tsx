import React from 'react';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div>&copy; {new Date().getFullYear()} ElectroMart. All rights reserved.</div>
      <div>&copy; {new Date().getFullYear()} Welcome Again.</div>
    </div>
  </footer>
);

export default Footer;
