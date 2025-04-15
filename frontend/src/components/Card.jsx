import React from "react";

const Card = ({ title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all"
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
