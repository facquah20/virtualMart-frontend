import React from 'react';
import '../styles/CartIcon.css';
import { Link } from 'react-router-dom';

const CartIcon = ({ itemCount }) => {
  return (
    <Link to='/cartItems'>
    <div className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      {itemCount > 0 && (
        <div className="cart-icon__badge">
          {itemCount}
        </div>
      )}
    </div>
    
    </Link>
  );
};

export default CartIcon;
