import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation, useParams } from "react-router-dom";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const { id } = useParams();
  const [mapType, setMapType] = useState("standard");
  const [loading, setLoading] = useState(true);
  const { state } = useLocation();

  const cardTitle = state?.title || `Card ${id}`;

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        //imitating fetching map data by adding 1 second loading
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching card details:", error);
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [id]);

  const getTileLayer = () => {
    switch (mapType) {
      case "satellite":
        return (
          <TileLayer
            attribution='&copy; <a href="https://www.esri.com">Esri</a>'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        );
      case "terrain":
        return (
          <TileLayer
            attribution='&copy; <a href="https://www.opentopomap.org">OpenTopoMap</a>'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        );
      default:
        return (
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <h1 className="text-lg font-bold text-gray-800">{cardTitle}</h1>
              </div>
            </div>

            <div className="flex space-x-2">
              {["standard", "satellite", "terrain"].map((type) => (
                <button
                  key={type}
                  title={`Switch to ${type} view`}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                    mapType === type
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => setMapType(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Map Section */}
      <div className="flex-1 p-4">
        <div className="w-full h-[calc(100vh-110px)] rounded-lg shadow-md overflow-hidden relative">
          <MapContainer
            center={[20.5937, 78.9629]} //  India
            zoom={4}
            scrollWheelZoom={true}
            className="w-full h-full"
          >
            {getTileLayer()}
            <Marker position={[20.5937, 78.9629]}>
              <Popup>India</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
