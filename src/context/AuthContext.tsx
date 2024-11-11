import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../models/user";
import { authService } from "../services/authServices";

interface AuthContextType {
  user: UserModel | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserModel | null>(
    authService.getCurrentUser()
  );
  const navigate = useNavigate();

  const login = (email: string, password: string): boolean => {
    const user = authService.login(email, password);
    if (user) {
      setUser(user);
      navigate("/home");
      return true;
    }
    return false;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
