import React from "react";
import { useAuth } from "../../context/AuthContext";

const LogoutButton: React.FC = () => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <button onClick={handleLogout} className="text-error hover:text-error-dark">
      Logout
    </button>
  );
};

export default LogoutButton;
