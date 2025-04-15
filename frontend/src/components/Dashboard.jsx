import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Card from "./Card";
import { fetchCards } from "../services/api";
// Import Lucide React icons
import { Search, AlertCircle, Loader, FrownIcon } from "lucide-react";

const Dashboard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { token, setToken } = useAuth();

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

  const handleCardClick = (card) => {
    navigate(`/map-view/${card.id}`, { state: { title: card.title } });
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const filteredCards = cards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <div className="mt-4 md:mt-0 w-full md:w-2/3 flex items-center justify-end gap-4">
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Search cards..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <Search size={20} />
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg text-sm font-medium transition"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {loading && (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader size={48} className="animate-spin text-blue-500" />
              <p className="mt-4 text-gray-600">Loading your cards...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <AlertCircle size={20} className="text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-700">
                  {searchTerm ? "Search Results" : "All Mission"}
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredCards.length}{" "}
                  {filteredCards.length === 1 ? "Mission" : "Missions "} found
                </span>
              </div>

              {filteredCards.length === 0 ? (
                <div className="text-center py-20">
                  <FrownIcon size={48} className="mx-auto text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No cards found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm
                      ? "Try a different search term."
                      : "Get started by creating your first card."}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => handleCardClick(card)}
                      className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Card title={card.title} description={card.description} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
