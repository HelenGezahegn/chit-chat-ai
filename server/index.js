import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { Configuration, OpenAIApi } from "openai";
import openAIRoutes from "./routes/openai.js";

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
// NOTE: looks at requests where the Content-Type: application/json header is present and
// transforms the text-based JSON input into JS-accessible variables under req.body
app.use(bodyParser.json({ limit: "30mb", extended: true }));
// NOTE: does the same for URL-encoded requests. extended: true precises that the req.body
// object will contain values of any type instead of just strings.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// OPEN AI CONFIGURATION
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

// ROUTES
app.use("/openai", openAIRoutes);

// SERVER SETUP
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

export { openai };
