import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TuComponente = () => {
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://car-api2.p.rapidapi.com/api/models',
          params: {
            sort: 'id',
            direction: 'asc',
            year: '2020',
            verbose: 'yes',
          },
          headers: {
            'X-RapidAPI-Key': 'TU_API_KEY', // Reemplaza 'TU_API_KEY' con tu clave API
            'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);
        setCarros(response.data);
      } catch (error) {
        console.error('Error al obtener los modelos de carros:', error);
      }
    };

    fetchCarros();
  }, []);

  return (
    <div>
      <h1>Modelos de Carros</h1>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>{carro.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default TuComponente;
