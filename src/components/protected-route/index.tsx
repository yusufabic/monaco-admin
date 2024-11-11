import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute: React.FC = () => {
  const auth = useAuth();

  return auth.user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
