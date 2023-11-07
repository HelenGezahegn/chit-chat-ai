import { useAuth0 } from "@auth0/auth0-react";
import Background from "./Background.jsx";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const Welcome = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <>
      <Background />

      <div className="welcome-page">
        <div className="welcome-top-nav">
          <img className="welcome-logo" src="/chitChatLogo.png" alt="logo" />
          <a href="https://github.com/HelenGezahegn/chit-chat-ai">
            <img
              className="welcome-github-icon"
              src="https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png"
              alt="github icon"
            />
          </a>
        </div>
        <h1 className="welcome-title">
          Elevating conversations with the power of AI
        </h1>
        <button className="welcome-button" type="button" onClick={handleLogin}>
          Try ChitChat
          <ArrowRightCircleIcon className="welcome-button-icon" />
        </button>
      </div>
    </>
  );
};

export default Welcome;
