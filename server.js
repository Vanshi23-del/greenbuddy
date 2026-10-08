require("dotenv").config();

const express = require("express");
const path = require("path");
const { GoogleGenAI } = require("@google/genai");

const app = express();
const PORT = 3000;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.use(express.json());
app.use(express.static(__dirname));

app.post("/ask-ai", async (req, res) => {
  try {
    const question = req.body.question;

    if (!question) {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemma-4-26b-a4b-it",
      contents: `You are GreenBuddy, a friendly environmental assistant.
Give simple, practical and beginner-friendly answers about:
- recycling
- waste management
- reducing plastic
- saving water
- saving electricity
- eco-friendly habits

User question: ${question}`,
    });

    res.json({
      answer: response.text,
    });
  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      error: "Sorry, GreenBuddy AI could not answer right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`🌱 GreenBuddy is running at http://localhost:${PORT}`);
});