import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home-section">
      <div className="home-background">
        <img
          className="home-background-img"
          src="shopping family.jpg"
          alt="happy shopping"
        />
        <div className="home-background-overlay" />
        <div className="home-center">
          <h1>WELCOME TO ELECTROMART</h1>
          <p>Your one-stop shop for electronics!</p>
          <a href="#featured-products" className="cta-btn">
            Shop Now
          </a>
        </div>
      </div>
      <div className="home-content" id="featured-products">
        <h2>Featured Products</h2>
        <p>Check out our latest and greatest electronics!</p>
        <div className="home-products-grid">
          <div className="home-product-card">
            <img src="smartphone.jpg" alt="Product 1" />
            <h3>Smartphone</h3>
            <p>KES 30,000</p>
          </div>
          <div className="home-product-card">
            <img src="laptop.webp" alt="Product 2" />
            <h3>Laptop</h3>
            <p>KES 80,000</p>
          </div>
          <div className="home-product-card">
            <img src="wireless headphones.jpg" alt="Product 3" />
            <h3>Headphones</h3>
            <p>KES 1050</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
