import React from 'react';

function CarList() {
  const cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2018 }
  ];

  return (
    <div className="car-list">
      {cars.map(car => (
        <div key={car.id} className="car-card">
          <strong>{car.brand}</strong> - {car.model} ({car.year})
        </div>
      ))}
    </div>
  );
}

export default CarList;
