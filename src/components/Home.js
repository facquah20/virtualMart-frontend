import React from 'react';
import '../styles/Home.css';
import CardContainer from './cardContainer.js';

const Home = () => {
  return (
    <div className="home">
      <header className="home__header">
        <h1>Welcome to Our E-commerce Store</h1>
        <p>Shop the latest trends and find great deals!</p>
      </header>
      <section className="home__banner">
        <h2>Discover New Arrivals</h2>
        <p>Explore our wide range of products for all your needs.</p>
        <button className="home__banner-button">Shop Now</button>
      </section>
      <section className="home__featured">
        <h2>Featured Products</h2>
        {/* Render featured products here */}
      </section>
      <section className="home__newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Be the first to know about our latest offers and updates.</p>
        <form className="home__newsletter-form">
          <input
            type="email"
            placeholder="Your Email"
            className="home__newsletter-input"
          />
          <button type="submit" className="home__newsletter-button">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
