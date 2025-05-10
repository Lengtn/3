import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import './App.css';
import Menu from './menu';  // Import your Menu component
import About from './about';  // Import your About component
import Contact from './contact';  // Import your Contact component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add a header or navbar here if needed */}
        <header className="App-header">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/menu">Menu</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Menu />} />  {/* Home route */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
