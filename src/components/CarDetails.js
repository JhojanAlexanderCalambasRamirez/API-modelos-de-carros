import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
  const { id } = useParams(); // Obtiene el id del carro de los parámetros de la URL

  // Aquí puedes usar el id para buscar los detalles del carro en tu base de datos o en un arreglo local
  const carDetails = {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
    color: 'Blue',
    price: '$20,000',
    // Otros detalles del carro
  };

  return (
    <div>
      <h2>Detalles del Carro</h2>
      <p>Marca: {carDetails.brand}</p>
      <p>Modelo: {carDetails.model}</p>
      <p>Año: {carDetails.year}</p>
      {/* Otros detalles del carro */}
    </div>
  );
}

export default CarDetails;
