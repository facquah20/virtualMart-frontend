import React from 'react';
import '../styles/CartItems.css';

const CartItems = ({ cartItems }) => {
  const calculateTotalCost = () => {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.price * item.quantity;
     });
    return totalCost.toFixed(2);
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul className="cart-items-list">
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                  </div>
                  <div className="item-quantity">Qty: {item.quantity}</div>
                </div>
              </li>
            ))}
          </ul>
          
          <div className='total-cost-btn'> 
          <button
            className="total-cost-button"
            onClick={() => alert(`Total Cost: $${calculateTotalCost()}`)}
          >
            Total Cost
          </button>
          </div>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default CartItems;
