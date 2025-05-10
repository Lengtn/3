import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './styles.css'; // Import the CSS stylesheet

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you could send the form data to a server or API
    console.log(formData);
    // After form submission logic, you can reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src="logo.png" alt="Restaurant Logo" width="600" height="400" />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className="text-decoration-none">Home</Link></li>
            <li><Link to="/menu" className="text-decoration-none">Menu</Link></li>
            <li><Link to="/about" className="text-decoration-none">About</Link></li>
            <li><Link to="/contact" className="text-decoration-none">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Contact Section */}
      <section className="contact">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Whether you have a question, feedback, or simply want to say hello, feel free to reach out to us using the form below or through our contact details.
        </p>

        <h2>Our Address</h2>
        <p>
          Master Chef<br />
          123 Main St, New York, NY, 12345
        </p>

        <h2>Call Us</h2>
        <p>Phone: 123-456-7890</p>

        <h2>Email Us</h2>
        <p>Email: <a href="mailto:info@restaurant.com">masterchef@restaurant.com</a></p>

        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        <h2>Follow Us</h2>
        <p>Stay connected with us through social media:</p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="business-hours">
          <p>Mon - Fri: 10 AM - 8 PM</p>
          <p>Sat - Sun: 11 AM - 10 PM</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
