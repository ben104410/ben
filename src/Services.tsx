import React from 'react';
import './Services.css';

const services = [
  {
    img: 'richard-stachmann-GgmZ23grWNY-unsplash.jpg',
    alt: 'Free Shipping',
    title: 'Free Shipping Nationwide',
    desc: 'Enjoy fast and free delivery to your doorstep, anywhere in Kenya.',
  },
  {
    img: '18220f4c-86f5-4a01-b5c9-ff5c42789ab3.jpg',
    alt: 'Customer Support',
    title: '24/7 Customer Support',
    desc: 'Our support team is always available to assist you, day or night.',
  },
  {
    img: 'AA Auto Protection - formerly AA Auto Warranty….jpg',
    alt: 'Warranty',
    title: 'Extended Warranty Plans',
    desc: 'Shop with confidence with our genuine and extended warranty options.',
  },
  {
    img: 'd37ddcb4-f4bc-4ea1-980f-3f5ecda09879.jpg',
    alt: 'Returns & Refunds',
    title: 'Easy Returns & Refunds',
    desc: 'Hassle-free returns and quick refunds for your peace of mind.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="services-container">
      <h1 className="services-title">Our Premium Services</h1>
      <p className="services-intro">
        Experience the best shopping journey with our exclusive customer-focused services.
      </p>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">
              <img src={service.img} alt={service.alt} className="service-img-large" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
