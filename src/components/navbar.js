import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import CartIcon from './cartIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePageToggle = () => {
    setIsPageOpen(!isPageOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Your Logo</Link>
      </div>
      <div
        className={`navbar__menu ${isMenuOpen ? 'active' : ''}`}
        onClick={handleMenuToggle}
      >
        <div className="navbar__menu-icon">
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
        </div>
      </div>
      <ul className={`navbar__links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
        <div className="navbar__page-link" onClick={handlePageToggle}>
            Page
            <span className={`page-link__arrow ${isPageOpen ? 'open' : ''}`}>
              &#9660;
            </span>
          </div>
          {isPageOpen && (
            <ul className="navbar__sub-links">
              <li>
                <Link to="/login">Login</Link>
              </li>
              {/* Add more sub-links if needed */}
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <CartIcon itemCount={5}></CartIcon>
      </ul>
    </nav>
  );
};

export default Navbar;
