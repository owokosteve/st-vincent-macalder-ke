import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  const position = [-0.9686150152876483, 34.296268896995606]; // Replace with your office coordinates

  return (
    <div style={{ maxWidth: '1200px', height: '600px', margin: '0 auto' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>St. Vincent De Paul Macalder</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
