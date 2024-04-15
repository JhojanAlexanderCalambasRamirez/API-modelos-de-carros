import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';

function CarList() {
  const [carModel, setCarModel] = useState('');
  const [carData, setCarData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  //const location = useLocation();

  const handleChange = (event) => {
    const value = event.target.value;
    setCarModel(value);
    // Filtrar sugerencias basadas en el valor de entrada
    const filteredSuggestions = recentSearches.filter((search) =>
      search.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSubmit = () => {
    fetch(`https://api.api-ninjas.com/v1/cars?model=${carModel}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': 'pgSMtTlugtFy1S6JvjAVdQ==o7ve1mMiFLVaMxPL'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Filtrar resultados duplicados por modelo de carro
        const uniqueCars = [];
        data.forEach((car) => {
          if (!uniqueCars.some((uniqueCar) => uniqueCar.model === car.model)) {
            uniqueCars.push(car);
          }
        });
        setCarData(uniqueCars);
        // Agregar la búsqueda reciente al estado solo si no existe previamente
        if (!recentSearches.includes(carModel)) {
          setRecentSearches((prevSearches) => [carModel, ...prevSearches]);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    // Aquí puedes añadir cualquier código que quieras ejecutar cuando el componente se monte
    // Por ejemplo, cargar datos iniciales
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>Buscar Modelos de Carro</h1>
        <div className="search-bar">
          <input
            type="text"
            value={carModel}
            onChange={handleChange}
            placeholder="Ingrese el modelo del carro"
          />
          <button onClick={handleSubmit}>Buscar</button>
        </div>
      </div>

      {carData.length > 0 && (
        <div>
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
      )}

      {suggestions.length > 0 && (
        <div>
          <h3>Sugerencias de búsqueda:</h3>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CarList;
