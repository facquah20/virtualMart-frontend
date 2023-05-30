import React from 'react';
import '../styles/Card.css';

const Card = ({ imageUrl, id, itemName, price }) => {
  const handleAddToCart = () => {
    // Add to cart logic here
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={itemName} className="card__image" />
      <div className="card__content">
        <h3 className="card__title">{itemName}</h3>
        <p className="card__price">${price}</p>
        <button className="card__button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
