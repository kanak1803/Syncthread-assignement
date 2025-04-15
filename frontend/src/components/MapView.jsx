import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Map View</h1>
      <p className="text-lg mb-6">Showing map for Card ID: {id}</p>

      <div className="w-full h-[500px]">
        <MapContainer
          center={[20.5937, 78.9629]} // for center of india
          zoom={4}
          scrollWheelZoom={true}
          className="w-full h-full rounded-lg shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
