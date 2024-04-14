import React, { useState, useEffect } from 'react';

const CarList = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://car-api2.p.rapidapi.com/api/models?sort=id&direction=asc&year=2020&verbose=yes';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '15b2053da7msh14bfa84137379d4p161b2ejsnc48e7ee95313',
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        // Aquí puedes procesar y mostrar los datos en forma de tabla
    } catch (error) {
        console.error(error);
    } 
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Lista de Autos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Año</th>
            {/* Agrega más columnas según la información que quieras mostrar */}
          </tr>
        </thead>
        <tbody>
          {carData.map(car => (
            <tr key={car.id}>
              <td>{car.id}</td>
              <td>{car.name}</td>
              <td>{car.make}</td>
              <td>{car.year}</td>
              {/* Agrega más celdas según la información que quieras mostrar */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarList;
