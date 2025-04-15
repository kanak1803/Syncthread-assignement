import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./components/Dashboard";
import MapView from "./components/MapView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/map-view/:id"
          element={
            <ProtectedRoute>
              <MapView />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
