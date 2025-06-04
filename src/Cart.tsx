import React, { useEffect, useState } from 'react';
import './App.css';
import './Cart.css';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Update CartItem type to include price
type CartItem = {
  name: string;
  image: string;
  price: number;
};

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    // Expecting cart to be an array of { name, image, price }
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleRemoveFromCart = (itemToRemove: CartItem) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(
        item => !(item.name === itemToRemove.name && item.image === itemToRemove.image)
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Mpesa payment state
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [mpesaStatus, setMpesaStatus] = useState('');
  // Mpesa popup state
  const [showMpesaPopup, setShowMpesaPopup] = useState(false);

  // Calculate total price dynamically
  const total = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  // Mpesa payment handler (simulate)
  const handleMpesaPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mpesaNumber.match(/^\d{10,}$/)) {
      setMpesaStatus('Please enter a valid phone number.');
      setShowMpesaPopup(true);
      return;
    }
    setMpesaStatus('Processing payment...');
    setShowMpesaPopup(true);
    setTimeout(() => {
      setMpesaStatus('Payment successful! (Simulated)');
      setShowMpesaPopup(true);
    }, 2000);
  };

  const closeMpesaPopup = () => {
    setShowMpesaPopup(false);
    setMpesaStatus('');
  };

  return (
    <section className="cart-section">
      <h1 className="cart-title">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, idx) => (
            <li key={item.name + idx} className="cart-item cart-item-card">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image custom-cart-image"
              />
              <span className="cart-item-name cart-item-flex">{item.name}</span>
              <span className="cart-item-price">KES {item.price}</span>
              <button onClick={() => handleRemoveFromCart(item)} className="cart-remove-btn">
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="checkout-section">
          <h2 className="checkout-title">Checkout</h2>
          <div className="checkout-options">
            {/* Mpesa Payment */}
            <div className="mpesa-payment-box payment-box">
              <h3>Pay with <span className="mpesa-span">Mpesa</span></h3>
              <form onSubmit={handleMpesaPayment} className="mpesa-form">
                <input
                  type="text"
                  placeholder="Enter Mpesa Number"
                  value={mpesaNumber}
                  onChange={e => setMpesaNumber(e.target.value)}
                  className="mpesa-input"
                />
                <button type="submit" className="mpesa-pay-btn">
                  Pay KES {total}
                </button>
              </form>
              {mpesaStatus && <div className="mpesa-status">{mpesaStatus}</div>}
              {showMpesaPopup && (
                <div className="mpesa-popup-overlay">
                  <div className="mpesa-popup">
                    <span>{mpesaStatus}</span>
                    <button onClick={closeMpesaPopup} className="mpesa-popup-close">Close</button>
                  </div>
                </div>
              )}
            </div>
            {/* PayPal Payment */}
            <div className="paypal-payment-box payment-box">
              <h3>Pay with <span style={{color:'#0070ba'}}>PayPal</span></h3>
              <PayPalScriptProvider options={{ clientId: "test" /* Replace with your real client ID */ }}>
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={(_, actions) => {
                    return actions.order.create({
                      purchase_units: [{
                        amount: {
                          value: ((total / 150) || 1).toFixed(2), // Prevent 0 value
                        },
                      }],
                    });
                  }}
                  onApprove={(_, actions) => {
                    if (actions.order) {
                      return actions.order.capture().then(() => {
                        alert('Payment successful with PayPal!');
                      });
                    } else {
                      alert('Order actions are not available.');
                      return Promise.resolve();
                    }
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
