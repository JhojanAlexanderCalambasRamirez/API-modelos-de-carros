import React, { useState } from 'react';

function App() {
  const [carModel, setCarModel] = useState('');
  const [carData, setCarData] = useState([]);

  const handleChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.api-ninjas.com/v1/cars?model=${carModel}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'pgSMtTlugtFy1S6JvjAVdQ==o7ve1mMiFLVaMxPL'
      }
    })
    .then(response => response.json())
    .then(data => {
      setCarData(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  return (
    <div>
      <h1>Buscar Modelos de Carro</h1>
      <input type="text" value={carModel} onChange={handleChange} />
      <button onClick={handleSubmit}>Enviar Petición</button>

      <h2>Resultados:</h2>
      <ul>
        {carData.map((car, index) => (
          <li key={index}>
            <p>Modelo: {car.model}</p>
            <p>Fabricante: {car.make}</p>
            <p>Año: {car.year}</p>
            <p>Transmisión: {car.transmission}</p>
            <p>Combustible: {car.fuel_type}</p>
            <p>Cilindros: {car.cylinders}</p>
            <p>Tracción: {car.drive}</p>
            <p>MPG en ciudad: {car.city_mpg}</p>
            <p>MPG en carretera: {car.highway_mpg}</p>
            <p>MPG combinado: {car.combination_mpg}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
