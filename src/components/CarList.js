import React, { useState } from 'react';
import './CarList.css';

const CarList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [carData, setCarData] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiKey = 'pgSMtTlugtFy1S6JvjAVdQ==o7ve1mMiFLVaMxPL';
    const url = `https://api.api-ninjas.com/v1/cars?limit=1&model=${searchQuery}`;
    const options = {
      headers: {
        'X-Api-Key': apiKey
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      setCarData(data[0]);
      setError(null);
    } catch (error) {
      setError(error.message);
      setCarData(null);
    }
  };

  return (
    <div className="CarList">
      <h2>Buscar Modelo de Automóvil</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Ingrese el modelo de automóvil"
        />
        <button type="submit">Buscar</button>
      </form>
      {error && <p>Error: {error}</p>}
      {carData && (
        <div>
          <h2>Información del Automóvil</h2>
          <p>Modelo: {carData.model}</p>
          <p>Fabricante: {carData.make}</p>
          <p>Año: {carData.year}</p>
          <p>Tipo de combustible: {carData.fuel_type}</p>
          <p>Transmisión: {carData.transmission}</p>
        </div>
      )}
    </div>
  );
};

export default CarList;
