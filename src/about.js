import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import './styles.css';  // Import the CSS stylesheet

const About = () => {
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

      {/* About Us Section */}
      <section className="about">
        <h1>About Us</h1>
        <p>
          Welcome to Master Chef, a place where food meets tradition! We are a family-owned restaurant that has been serving delicious meals for over 10 years. Our mission is to provide exceptional food and service in a welcoming atmosphere.
        </p>

        <h2>Our Story</h2>
        <p>
          Master Chef was founded by Xin with a passion for good food and family gatherings. We started with a small kitchen and a handful of recipes, and over the years, we've grown into the beloved local gem that we are today. Each dish we serve is made with the finest ingredients, carefully sourced to bring the best flavors to your table.
        </p>

        <h2>Our Philosophy</h2>
        <p>
          We believe that food is more than just nourishment – it's an experience. That's why we emphasize quality, freshness, and creativity in everything we prepare. Whether you're enjoying a quick bite or celebrating a special occasion, we aim to make every meal memorable.
        </p>

        <h2>Meet Our Team</h2>
        <p>
          Our dedicated team of chefs, servers, and staff are the heart and soul of Master Chef. We work together to create a warm, friendly atmosphere where you feel like part of the family.
        </p>
      </section>

      {/* Footer Section */}
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
}

export default About;
