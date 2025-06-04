import React from 'react';
import './Products.css';

const products = [
  { name: 'Smartphone X', price: 30699, img: 'smartphone.jpg' },
  { name: '4K LED TV', price: 50999, img: '4K LED TV.jpg' },
  { name: 'Wireless Headphones', price: 499, img: 'wireless headphones.jpg' },
  { name: 'Laptop Pro', price: 31299, img: 'This MacBook Pro 16-inch Space Gray mockup….jpg ' },
  { name: 'Smartwatch', price: 1299, img: 'smartwatch.jpg' },
  { name: 'Bluetooth Speaker', price: 849, img: 'bluetooth speaker.jpg' },
];

const Products: React.FC = () => {
  const addToCart = (product: { name: string; price: number; img: string }) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({
      name: product.name,
      image: product.img,
      price: product.price
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <section className="products-section">
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>KES {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

