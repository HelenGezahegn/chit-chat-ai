import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            element={isAuthenticated ? <LoadChat /> : <Welcome />}
          />
          <Route
            path="/chat"
            element={isAuthenticated ? <LoadChat /> : <Welcome />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
