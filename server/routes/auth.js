import express from "express";
import axios from "axios";

const router = express.Router();

const createSupportBotChat = async (username, password, res) => {
  try {
    const chatEngineResponse = await axios.post(
      "https://api.chatengine.io/chats/",
      {
        title: "SupportBot",
        is_direct_chat: true
      },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": username,
          "User-Secret": password
        }
      }
    );
    res.status(201).json({ response: chatEngineResponse.data });
    const chatId = chatEngineResponse.data.id;
    await addSupportBotToChat(username, password, chatId, res);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: error.message });
  }
};

const addSupportBotToChat = async (username, password, chatId, res) => {
  try {
    const chatEngineResponse = await axios.post(
      `https://api.chatengine.io/chats/${chatId}/people/`,
      {
        username: "SupportBot"
      },
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": username,
          "User-Secret": password
        }
      }
    );
    res.status(201).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: error.message });
  }
};

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const chatEngineResponse = await axios.get(
      "https://api.chatengine.io/users/me",
      {
        headers: {
          "Project-ID": process.env.PROJECT_ID,
          "User-Name": username,
          "User-Secret": password
        }
      }
    );

    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/signUp", async (req, res) => {
  try {
    const { username, password } = req.body;

    const chatEngineResponse = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: password
      },
      {
        headers: { "Private-Key": process.env.PRIVATE_KEY }
      }
    );

    await createSupportBotChat(username, password, res);
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("Error", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
