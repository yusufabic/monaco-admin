import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./containers/routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import "./App.less";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div>
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
