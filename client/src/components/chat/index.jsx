import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow
} from "react-chat-engine-advanced";
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";

import AI from "@/components/customMessageForms/AI";

const Chat = ({ user }) => {
  const { nickname, user_id } = user;

  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    nickname,
    user_id // can't access password from Auth0, so make chatengine secret/password be the user_id
  );

  return (
    <>
      {user && (
        <div style={{ flexBasis: "100%" }}>
          <MultiChatSocket {...chatProps} />
          <MultiChatWindow
            {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={(chat) => <Header chat={chat} />}
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
