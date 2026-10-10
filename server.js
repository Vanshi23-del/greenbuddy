
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.post("/ask-ai", async (req, res) => {
  try {
    const question = req.body.question;

    if (typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gemma3:1b",
        prompt: `You are GreenBuddy, a friendly environmental assistant.
Give simple, practical, beginner-friendly answers about:
- Recycling and waste management
- Reducing plastic
- Saving water and electricity
- Eco-friendly daily habits
- Safe outdoor activities and connecting with nature

Keep answers clear and useful.

User question: ${question.trim()}`,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama returned status ${response.status}`);
    }

    const data = await response.json();

    res.json({
      answer: data.response || "Please try asking your question again.",
    });
  } catch (error) {
    console.error("Local AI error:", error.message);

    res.status(500).json({
      error: "GreenBuddy's local AI could not respond. Please check that Ollama is running.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`GreenBuddy is running at http://localhost:${PORT}`);
});