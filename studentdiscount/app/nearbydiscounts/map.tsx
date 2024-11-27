import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([17.4239, 78.4486], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      const customIcon = L.icon({
        iconUrl:  '/location.svg',
        iconSize: [32, 32], 
        iconAnchor: [16, 32], 
        popupAnchor: [0, -32],
      });

      const marker = L.marker([17.4239, 78.4486], { icon: customIcon }).addTo(mapRef.current);
      marker.bindPopup("<b>Muffakham Jah College of Engineering & Technology</b>").openPopup();

      
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className="mt-16 z-0"
      ref={mapContainerRef}
      style={{
        height: "60vh",
        width: "100%", 
        border: "1px solid #ccc", 
        borderRadius: "4px", 
      }}
    />

  );
};

export default MapComponent;
