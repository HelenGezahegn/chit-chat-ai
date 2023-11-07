import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoadChat from "@/components/chat/LoadChat";
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from "./components/welcome";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/chat" /> : <Welcome />}
          />
          <Route
            path="/chat"
            element={isAuthenticated ? <LoadChat /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
