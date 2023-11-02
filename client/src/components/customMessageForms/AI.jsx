import { useEffect, useState } from "react";
import MessageFormUI from "./MessageFormUI";
import {
  usePostAITextMutation,
  usePostAICompleteTextMutation
} from "@/state/api";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const AI = ({ props, activeChat }) => {
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [appendText, setAppendText] = useState("");
  const [trigger] = usePostAITextMutation();
  const [triggerAssist, resultAssist] = usePostAICompleteTextMutation();

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
    setAppendText("");
    await trigger(form); // trigger open ai api call
  };

  const debouncedValue = useDebounce(message, 1500);

  useEffect(() => {
    if (debouncedValue) {
      const form = { text: message.trim() };
      triggerAssist(form);
    }
  }, [debouncedValue]); // eslint-disable-line

  const handleKeyDown = (e) => {
    // handle enter and tab
    if (e.keyCode === 9 || e.keyCode === 13) {
      e.preventDefault();
      setMessage(`${message} ${appendText}`);
    }
    setAppendText("");
  };

  useEffect(() => {
    // the triggerAssist's result from the back-end
    if (resultAssist.data?.text) {
      setAppendText(resultAssist.data?.text);
    }
  }, [resultAssist]); // eslint-disable-line

  return (
    <MessageFormUI
      setAttachment={setAttachment}
      message={message}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      appendText={appendText}
      handleKeyDown={handleKeyDown}
    />
  );
};

export default AI;
