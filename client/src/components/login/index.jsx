import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Elevating conversations with the power of AI</h1>
        <div className="login-actions">
          <button className="login-button" type="button" onClick={handleLogin}>
            Try ChitChat
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
