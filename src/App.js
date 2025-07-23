// src/App.js

import React, { useState } from 'react';
import VehicleList from './components/VehicleList';
import Map from './components/Map';
import './App.css';

// Araç verilerimiz
const initialVehicles = [
  { id: '35 KNK 01', name: 'Otobüs A', lng: 27.1287, lat: 38.4192}, 
  { id: '35 ALS 02', name: 'Otobüs B (Pasif)', lng: 27.1432 , lat: 38.4326 }, 
  { id: '35 KSK 03', name: 'Otobüs C', lng: 27.1008, lat: 38.4600 },
  { id: '35 BRV 04', name: 'Otobüs  D', lng: 27.2200, lat:38.4600 }, 
  { id: '35 GZT 05', name: 'Otobüs  E', lng: 27.0805, lat: 38.3975}, 
  { id: '35 BLÇ 06', name: 'Otobüs  F', lng: 27.0550, lat: 38.3950 }, 
];

function App() {
  const [vehicles, setVehicles] = useState(initialVehicles);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
const [isPanelOpen, setIsPanelOpen] = useState(true);
  
  const handleVehicleClick = (vehicle) => {
   // console.log('Seçilen Araç:', vehicle.id);
    setSelectedVehicle(vehicle);
  };

  return (
    <div className="app-container">
       <button 
        // Konumu panelin durumuna göre değişecek
        className={`panel-toggle-button ${isPanelOpen ? 'panel-open' : 'panel-closed'}`}
        // Her zaman sadece durumu tersine çevirecek (açıksa kapat, kapalıysa aç)
        onClick={() => setIsPanelOpen(!isPanelOpen)}
      >
        {/* İkonu panelin durumuna göre değiştiriyoruz */}
        {isPanelOpen ? '‹' : '›'}
      </button>

      {/* isPanelOpen ise VehicleList'i göster */}
      {isPanelOpen && (
        <VehicleList 
          vehicles={vehicles} 
          onVehicleClick={handleVehicleClick} 
          selectedVehicle={selectedVehicle} 
          onClose={() => setIsPanelOpen(false)}
        />
      )}





      {/*<VehicleList 
  vehicles={vehicles} 
  onVehicleClick={handleVehicleClick} 
  selectedVehicle={selectedVehicle} 
/>*/}
      
      <Map 
  vehicles={vehicles} 
  selectedVehicle={selectedVehicle} 
  onVehicleClick={handleVehicleClick} 
/>
    </div>
  );
}

export default App;