// src/App.js

import React, { useState } from 'react';
import VehicleList from './components/VehicleList';
import Map from './components/Map';
import './App.css';

// Araç verilerimiz
const initialVehicles = [
  { id: '35 KNK 01', name: 'Kamyon A', lng: 27.1287, lat: 38.4192}, 
  { id: '35 ALS 02', name: 'Kamyon B (Sorunlu)', lng: 27.1432 , lat: 38.4326 }, 
  { id: '35 KSK 03', name: 'Tır C', lng: 27.1008, lat: 38.4600 },
  { id: '35 BRV 04', name: 'Kamyonet D', lng: 27.2200, lat:38.4600 }, 
  { id: '35 GZT 05', name: 'Panelvan E', lng: 27.0805, lat: 38.3975}, 
  { id: '35 BLÇ 06', name: 'Kamyon F', lng: 27.0550, lat: 38.3950 }, 
];

function App() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  // Bu fonksiyon, VehicleList bileşeninden bir araç tıklandığında çalışacak.
  const handleVehicleClick = (vehicle) => {
    console.log('Seçilen Araç:', vehicle.id);
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="app-container">
      <VehicleList vehicles={vehicles} onVehicleClick={handleVehicleClick} />
      <Map selectedVehicle={selectedVehicle} />
    </div>
  );
}

export default App;