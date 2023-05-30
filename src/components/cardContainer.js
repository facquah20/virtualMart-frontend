import React from 'react';
import Card from './card';
import '../styles/cardContainer.css';

const CardContainer = () => {
  // Sample data for cards
  const cardsData = [
    {
      id: 1,
      imageUrl: 'https://example.com/image1.jpg',
      itemName: 'Item 1',
      price: 9.99,
    },
    {
      id: 2,
      imageUrl: 'https://example.com/image2.jpg',
      itemName: 'Item 2',
      price: 19.99,
    },
    {
      id: 3,
      imageUrl: 'https://example.com/image3.jpg',
      itemName: 'Item 3',
      price: 14.99,
    },
    // Add more cards data as needed
  ];

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          itemName={card.itemName}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default CardContainer;
