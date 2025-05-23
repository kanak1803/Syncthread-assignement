import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  // If token exists, redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;
