// src/components/VehicleList.js

import React from 'react';
import './VehicleList.css'; // Stil dosyasını import ediyoruz

// Bu bileşen, 'vehicles' adında bir prop (özellik) alacak.
function VehicleList({ vehicles, onVehicleClick }) {
  return (
    <div className="vehicle-list-container">
      <h2>Aktif Araçlar</h2>
      <ul>
        {vehicles.map((vehicle) => (
          <li 
            key={vehicle.id} 
            className="vehicle-item"
            onClick={() => onVehicleClick(vehicle)}
          >
            {vehicle.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;