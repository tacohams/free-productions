// src/pages/Home.jsx
import React from 'react';
import './Home.css';  // Ensure this import is present at the top of the file
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Music Collection</h1>
          <p>Explore and listen to your favorite tracks with a sleek, modern interface.</p>
          <Link to="/songs" className="cta-button">Browse Songs</Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <h2>What is This Site?</h2>
        <p>This is a place to explore my personal music collection. You can listen to songs, read about them, and much more!</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Music Collection. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
