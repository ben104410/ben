import React from 'react';
import './About.css';

const About: React.FC = () => (
  <section className="about-section">
    <div className="about-hero">
      <h1>Why Shop with ElectroMart?</h1>
      <p className="about-tagline">
        Discover unbeatable deals, genuine products, and a seamless shopping experience!
      </p>
    </div>
    <div className="about-features">
      <div className="about-feature">
        <img src="Hate paying for return shipping_ There's a….jpg" alt="Fast Shipping" />
        <h3>Fast Nationwide Delivery</h3>
        <p>Get your electronics delivered quickly and safely to your doorstep, anywhere in Kenya.</p>
      </div>
      <div className="about-feature">
        <img src="18220f4c-86f5-4a01-b5c9-ff5c42789ab3.jpg" alt="24/7 Support" />
        <h3>24/7 Customer Support</h3>
        <p>Our friendly team is always ready to help you with any questions or concerns.</p>
      </div>
      <div className="about-feature">
        <img src="AA Auto Protection - formerly AA Auto Warranty….jpg"alt="Warranty" />
        <h3>Genuine Warranty</h3>
        <p>Enjoy peace of mind with authentic products and official warranty on every purchase.</p>
      </div>
      <div className="about-feature">
        <img src="d37ddcb4-f4bc-4ea1-980f-3f5ecda09879.jpg" alt="Easy Returns" />
        <h3>Easy Returns</h3>
        <p>Not satisfied? Return your product easily and get a quick refund or replacement.</p>
      </div>
    </div>
    <div className="about-cta">
      <h2>Ready to upgrade your tech?</h2>
      <a href="/products" className="about-shop-btn">Shop Now</a>
    </div>
  </section>
);

export default About;
