import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow
} from "react-chat-engine-advanced";
import NavBar from "@/components/navBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";

import AI from "@/components/customMessageForms/AI";

const Chat = ({ user }) => {
  const { nickname, user_id, picture } = user;
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/chat");
  }, []);

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    nickname,
    user_id // can't access password from Auth0, so make chatengine secret/password be the user_id
  );

  return (
    <>
      {user && (
        <div style={{ flexBasis: "100%" }}>
          <NavBar username={nickname} avatar={picture} />
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow
            {...chatProps}
            style={{ height: "calc(99vh - 81px)" }}
            renderMessageForm={(props) => {
              if (chatProps.chat?.title === "SupportBot") {
                return <AI props={props} activeChat={chatProps.chat} />;
              }
              return (
                <StandardMessageForm
                  props={props}
                  activeChat={chatProps.chat}
                />
              );
            }}
          />
        </div>
      )}
    </>
  );
};

export default Chat;
