import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../models/user";
import { authService } from "../services/authServices";
import axios from "axios";

interface AuthContextType {
  user: Omit<UserModel, "Password"> | null;
  token: string | null;
  theme: string;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  setTheme: (theme: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Omit<UserModel, "Password"> | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [theme, setTheme] = useState<string>("light");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("authToken");
    const storedTheme = localStorage.getItem("theme");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedToken) setToken(storedToken);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      setLoading(true);
      try {
        const response = await authService.login(email, password);
        if (response) {
          setUser(response.user);
          setToken(response.token);
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("authToken", response.token);
          navigate("/home");
          return true;
        }
        return false;
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  const logout = useCallback(() => {
    authService.logout();
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    navigate("/login");
  }, [navigate]);

  const setThemePreference = useCallback((theme: string) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      theme,
      loading,
      login,
      logout,
      setTheme: setThemePreference,
    }),
    [user, token, theme, loading, login, logout, setThemePreference]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
