import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Card from "./Card";
import { fetchCards } from "../services/api";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const fetchDashboardCards = async () => {
      try {
        const response = await fetchCards(token);
        setCards(response.data);
      } catch (error) {
        setError("Could not load cards");
        console.error("Failed to fetch dashboard cards:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardCards();
  }, [token]);
  //console.log(cards); checking if data is getting from api

  const handleCardClick = (cardId) => {
    //console.log("Clicked card ID:", cardId); checking if right id card is being open
    navigate(`/map-view/${cardId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>

      {loading && (
        <p className="text-center text-lg text-gray-500">Loading cards...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-sm mb-4">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
