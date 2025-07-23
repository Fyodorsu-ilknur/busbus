// src/components/VehicleList.js

import React from 'react'; 
import './VehicleList.css'; 

function VehicleList({ vehicles, onVehicleClick, selectedVehicle,o}) {
  return (
    <div className="vehicle-list-container">
          {/*} <div className="list-header">*/}

      <h2>Active Vehicles</h2>
       

      <ul>
        {vehicles.map((vehicle) => {
          const isSelected = selectedVehicle && selectedVehicle.id === vehicle.id;
          return (
            <li 
              key={vehicle.id} 
              className={`vehicle-item ${isSelected ? 'selected' : ''}`}
              onClick={() => onVehicleClick(vehicle)}
            >
              {vehicle.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VehicleList;