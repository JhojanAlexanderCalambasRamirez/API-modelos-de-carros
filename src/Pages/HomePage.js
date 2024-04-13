// src/pages/HomePage.js

import React from 'react';
import CarList from '../components/CarList';

const HomePage = () => {
  const cars = [
    {
      id: 1,
      title: 'Toyota Camry',
      description: 'Sedan, año 2020, color blanco',
      price: '$25,000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Honda Civic',
      description: 'Coupe, año 2018, color rojo',
      price: '$20,000',
      image: 'https://via.placeholder.com/150',
    },
    // Agregar más carros aquí...
  ];

  return (
    <div className="home-page">
      <h2>Carros Disponibles</h2>
      <CarList cars={cars} />
    </div>
  );
};

export default HomePage;
