import React from "react";

const Card = ({ title, description, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
  >
    <img
      src={
        "https://images.unsplash.com/photo-1520299607509-dcd935f9a839?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
      alt={title}
      className="w-full h-40 object-cover rounded-md mb-4"
    />

    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    <div className="mt-4">
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>
  </div>
);

export default Card;
