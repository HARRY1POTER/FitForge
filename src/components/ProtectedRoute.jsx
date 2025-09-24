import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../auth"; // adjust path as needed

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
