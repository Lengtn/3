import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Use Link for routing
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false); // Manage cart visibility

  const addToCart = (itemName, itemPrice) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[itemName]) {
        updatedCart[itemName].quantity += 1;
      } else {
        updatedCart[itemName] = { price: itemPrice, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const removeFromCart = (itemName) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      updatedCart[itemName].quantity -= 1;
      if (updatedCart[itemName].quantity === 0) {
        delete updatedCart[itemName];
      }
      return updatedCart;
    });
  };

  const clearCart = () => setCart({});

  const updateCartUI = () => {
    let total = 0;
    Object.values(cart).forEach(item => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const toggleCart = () => setShowCart(prevState => !prevState); // Toggle cart visibility

  // Menu item component to avoid code duplication
  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item mb-4">
      <h3>{name}</h3>
      <p>{description} <strong>${price}</strong></p>
      <button className="btn btn-dark" onClick={() => addToCart(name, price)}>Add to Cart</button>
    </div>
  );

  return (
    <div>
      {/* Header with navigation */}
      <header className="d-flex justify-content-between p-3 bg-dark text-white">
        <div className="logo">
          <img src="logo.png" alt="Restaurant Logo" className="img-fluid" />
        </div>
        <nav>
          <ul className="d-flex list-unstyled m-0">
            <li className="ms-3"><Link to="/" className="text-white">Home</Link></li>
            <li className="ms-3"><Link to="/menu" className="text-white">Menu</Link></li>
            <li className="ms-3"><Link to="/about" className="text-white">About</Link></li>
            <li className="ms-3"><Link to="/contact" className="text-white">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Menu Intro Section */}
      <section className="menu-intro text-center py-5 bg-light">
        <h1>Our Menu</h1>
        <p>We offer a wide range of delicious dishes, from appetizers to desserts. Enjoy your meal!</p>
      </section>

      {/* Menu Items Section */}
      <section className="menu py-5">
        <h2>Appetizers</h2>
        <MenuItem name="Bruschetta" description="A classic Italian starter with toasted bread, tomatoes, garlic, and basil." price={8.99} />
        <MenuItem name="Stuffed Mushrooms" description="Fresh mushrooms stuffed with a savory blend of cheese and herbs." price={7.49} />

        <h2>Main Dishes</h2>
        <MenuItem name="Grilled Salmon" description="Freshly grilled salmon with a lemon-butter sauce, served with vegetables." price={19.99} />
        <MenuItem name="Pasta Primavera" description="A mix of fresh vegetables tossed in a creamy pasta sauce." price={14.99} />

        <h2>Desserts</h2>
        <MenuItem name="Chocolate Lava Cake" description="Warm, gooey chocolate cake with a molten center." price={6.99} />
        <MenuItem name="Tiramisu" description="A classic Italian dessert made with mascarpone cheese and coffee-soaked ladyfingers." price={5.99} />
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" className="text-white mx-2">Facebook</a>
          <a href="https://instagram.com" target="_blank" className="text-white mx-2">Instagram</a>
        </div>
        <div className="business-hours">
          <p>Mon - Fri: 10 AM - 8 PM</p>
          <p>Sat - Sun: 11 AM - 10 PM</p>
        </div>
      </footer>

      {/* Cart */}
      {showCart && (
        <div id="cart" className="cart position-fixed top-100 start-0 p-3 bg-white border shadow-lg">
          <h2>Your Cart</h2>
          <ul id="cart-items">
            {Object.keys(cart).map(item => (
              <li key={item}>
                {item} - ${cart[item].price.toFixed(2)} x {cart[item].quantity}
                <button className="btn btn-danger ms-2" onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${updateCartUI()}</p>
          <button className="btn btn-secondary" onClick={clearCart}>Clear Cart</button>
        </div>
      )}

      {/* Button to toggle cart visibility */}
      <button className="btn btn-primary position-fixed bottom-0 end-0 mb-3 me-3" onClick={toggleCart}>
        {showCart ? 'Hide Cart' : 'View Cart'}
      </button>
    </div>
  );
}

export default Menu;
