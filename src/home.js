import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [cart, setCart] = useState({});

  const addToCart = (itemName, itemPrice) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemName]) {
        newCart[itemName].quantity += 1;
      } else {
        newCart[itemName] = {
          price: itemPrice,
          quantity: 1,
        };
      }
      return newCart;
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemName]) {
        newCart[itemName].quantity -= 1;
        if (newCart[itemName].quantity <= 0) {
          delete newCart[itemName];
        }
      }
      return newCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const calculateTotal = () => {
    return Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      {/* Header with navigation */}
      <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white">
        <div className="logo">
          <img src="logo.png" alt="Restaurant Logo" style={{ height: '60px' }} />
        </div>
        <nav>
          <ul className="d-flex list-unstyled m-0">
            <li className="ms-4">
              <Link to="/" className="text-white text-decoration-none">Home</Link>
            </li>
            <li className="ms-4">
              <Link to="/menu" className="text-white text-decoration-none">Menu</Link>
            </li>
            <li className="ms-4">
              <Link to="/about" className="text-white text-decoration-none">About</Link>
            </li>
            <li className="ms-4">
              <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero section */}
      <section className="hero position-relative">
        <img src="banner.png" alt="Restaurant Hero" className="w-100" />
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 style={{ fontSize: '2.5rem', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>Master Chef</h1>
        </div>
      </section>

      {/* Gallery section */}
      <section className="gallery py-5">
        <div className="d-flex overflow-auto p-4">
          {/* Example menu items with add to cart buttons */}
          <div className="slide me-3">
            <img src="salmon.jpg" alt="Grilled Salmon" className="w-100" style={{ maxWidth: '180px', borderRadius: '8px' }} />
            <div className="item text-center mt-2">
              <h3>Grilled Salmon</h3>
              <p>$19.99</p>
              <button className="btn btn-primary" onClick={() => addToCart('Grilled Salmon', 19.99)}>Add to Cart</button>
            </div>
          </div>
          <div className="slide me-3">
            <img src="pasta.jpg" alt="Pasta Primavera" className="w-100" style={{ maxWidth: '180px', borderRadius: '8px' }} />
            <div className="item text-center mt-2">
              <h3>Pasta Primavera</h3>
              <p>$14.99</p>
              <button className="btn btn-primary" onClick={() => addToCart('Pasta Primavera', 14.99)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us section */}
      <section className="about py-5 bg-light">
        <h2>About Us</h2>
        <p>We are a family-owned restaurant that has been serving the community for over 10 years. Our specialty is our signature pasta dishes, made with fresh, local ingredients.</p>
      </section>

      {/* Contact Us section */}
      <section className="contact py-5">
        <h2>Contact Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=..." style={{ border: 0, width: '100%', height: '300px' }}></iframe>
        <form>
          <input type="text" className="form-control mb-3" placeholder="Your Name" required />
          <input type="email" className="form-control mb-3" placeholder="Your Email" required />
          <textarea className="form-control mb-3" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </section>

      {/* Footer section */}
      <footer className="bg-dark text-white text-center p-3">
        <div className="social-media mb-3">
          <a href="https://facebook.com" target="_blank" className="text-white me-3">Facebook</a>
          <a href="https://instagram.com" target="_blank" className="text-white">Instagram</a>
        </div>
        <div className="business-hours">
          <p>Mon - Fri: 10 AM - 8 PM</p>
          <p>Sat - Sun: 11 AM - 10 PM</p>
        </div>
      </footer>

      {/* Cart section */}
      <div className="cart position-fixed top-100 start-100 translate-middle bg-white p-3 border shadow-lg" style={{ width: '300px' }}>
        <h2>Your Cart</h2>
        <ul>
          {Object.entries(cart).map(([itemName, { price, quantity }]) => (
            <li key={itemName}>
              {itemName} - ${price.toFixed(2)} x {quantity} = ${(price * quantity).toFixed(2)}
              <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(itemName)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal().toFixed(2)}</p>
        <button className="btn btn-secondary w-100" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Home;
