// src/components/Map.js

import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import './Map.css'; 

function Map({ vehicles, selectedVehicle, onVehicleClick }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markersRef = useRef([]);

  // Haritayı ilk oluşturan effect
  useEffect(() => {
    if (map.current) return; 

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://api.maptiler.com/maps/positron/style.json?key=boHgitm9Copjety599um', 
      center: [27.1428, 38.4237], 
      zoom: 10,                   
    });
  }, []);


  useEffect(() => {
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    vehicles.forEach(vehicle => {
      const isSelected = selectedVehicle && selectedVehicle.id === vehicle.id;
      
      const el = document.createElement('div');
      el.className = `vehicle-marker ${isSelected ? 'selected' : ''}`;

      const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat([vehicle.lng, vehicle.lat])
        .addTo(map.current);
      
      el.addEventListener('click', () => {
        onVehicleClick(vehicle);
      });

      markersRef.current.push(marker);
    });

  }, [vehicles, onVehicleClick, selectedVehicle]); 


  // Seçili araç değiştiğinde haritayı kaydıran effect
  useEffect(() => {
    if (!map.current || !selectedVehicle) return;

    map.current.flyTo({
      center: [selectedVehicle.lng, selectedVehicle.lat],
      zoom: 13
    });

  }, [selectedVehicle]); 

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;