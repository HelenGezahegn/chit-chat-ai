import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePostLoginMutation, usePostSignUpMutation } from "@/state/api";
import Chat from "@/components/chat";
import { useAuth0 } from "@auth0/auth0-react";
import Background from "../welcome/Background";

const LoadChat = () => {
  const [chatDBSynced, setChatDBSynced] = useState(false);
  const [triggerLogin] = usePostLoginMutation();
  const [triggerSignUp] = usePostSignUpMutation();
  const { user, getAccessTokenSilently, isLoading } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = import.meta.env.VITE_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `${domain}/api/v2/`,
            scope: "read:current_user"
          }
        });

        const userDetailsByIdUrl = `${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const userData = await metadataResponse.json();
        setUserMetadata(userData);
      } catch (e) {
        console.error(e.message);
      }
    };

    const syncChatDB = async () => {
      const { logins_count, nickname, user_id } = userMetadata;
      const username = nickname;
      const password = user_id;
      if (logins_count > 1) {
        await triggerLogin({ username, password });
      } else {
        await triggerSignUp({ username, password });
      }
      setChatDBSynced(true);
    };

    if (!isLoading && !chatDBSynced) {
      getUserMetadata();
    }

    if (userMetadata && !chatDBSynced) {
      syncChatDB();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAccessTokenSilently, user?.sub, userMetadata?.logins_count]);

  const renderLoadingScreen = () => {
    return (
      <div className="loader-container">
        <Background />
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            duration: 2,
            repeat: Infinity
          }}
        />
      </div>
    );
  };

  return (
    <>
      {userMetadata && chatDBSynced && !isLoading ? (
        <Chat user={userMetadata} />
      ) : (
        renderLoadingScreen()
      )}
    </>
  );
};

export default LoadChat;
