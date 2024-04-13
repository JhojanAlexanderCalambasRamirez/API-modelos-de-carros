// src/components/CarCard.js

import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.title} />
      <h3>{car.title}</h3>
      <p>{car.description}</p>
      <p>Precio: {car.price}</p>
    </div>
  );
};

export default CarCard;
