import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "@/components/login";
import Chat from "@/components/chat";

function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = user && secret;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login setUser={setUser} setSecret={setSecret} />}
          />
          <Route
            path="/chat"
            element={
              isAuth ? (
                <Chat user={user} secret={secret} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
