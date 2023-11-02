import { useState } from "react";
import MessageFormUI from "./MessageFormUI";
import { usePostAITextMutation } from "@/state/api";

const AI = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [trigger] = usePostAITextMutation();

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = async () => {
    const date = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", `${Math.floor(Math.random() * 1000)}+00:00`);
    const att = attachment ? [{ blob: attachment, file: attachment.name }] : [];
    const form = {
      attachments: att,
      created: date,
      sender_username: props.username,
      text: message,
      activeChatId: activeChat.id
    };

    props.onSubmit(form);
    setMessage("");
    setAttachment("");
    await trigger(form); // trigger open ai api call
  };

  
  return (
    <MessageFormUI
      setAttachment={attachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default AI;
