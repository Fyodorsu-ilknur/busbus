// src/components/Map.js

import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import './Map.css'; // Stil dosyasını import ediyoruz

function Map({ selectedVehicle }) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Harita zaten oluşturulduysa tekrar oluşturma

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      // Ücretsiz bir harita stili kullanıyoruz.
    style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=boHgitm9Copjety599um',
      center: [27.1428, 38.4237],  // DEĞİŞİKLİK: İzmir'in koordinatları [boylam, enlem]
      zoom: 10,                   // DEĞİŞİKLİK: İzmir'i göstermek için daha uygun bir zoom seviyesi
    });
  }, []);

  // Seçili araç değiştiğinde bu useEffect çalışacak
  useEffect(() => {
    if (!map.current || !selectedVehicle) return; // Harita veya seçili araç yoksa bir şey yapma

    // Haritayı seçilen aracın konumuna animasyonlu bir şekilde kaydır
    map.current.flyTo({
      center: [selectedVehicle.lng, selectedVehicle.lat],
      zoom: 14 // Yakınlaşma seviyesi
    });

  }, [selectedVehicle]); // Bu effect, selectedVehicle değiştiğinde tetiklenir

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;