
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "10kb" }));

// Serve only the public website files.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "style.css"));
});

app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "script.js"));
});

app.post("/ask-ai", async (req, res) => {
  try {
    const question = req.body?.question;

    if (typeof question !== "string" || !question.trim()) {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    if (question.length > 2000) {
      return res.status(400).json({
        error: "Please keep your question under 2000 characters.",
      });
    }

    const prompt = `You are GreenBuddy, a friendly environmental assistant.
Give simple, practical, beginner-friendly answers about:
- Recycling and waste management
- Reducing plastic
- Saving water and electricity
- Eco-friendly daily habits
- Safe outdoor activities and connecting with nature

Keep answers clear, useful, and concise.
For waste questions, mention that local recycling rules may differ.

User question: ${question.trim()}`;

    // On Render, use hosted Gemma when the API key is configured.
    if (process.env.GEMINI_API_KEY) {
      const model =
        process.env.GEMINI_MODEL || "gemma-4-26b-a4b-it";

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": process.env.GEMINI_API_KEY,
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 400,
            },
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        console.error(
          "Hosted Gemma API returned status:",
          response.status,
          data.error?.message || ""
        );

        return res.status(502).json({
          error:
            "GreenBuddy's hosted AI could not respond. Please try again.",
        });
      }

      const answer = (data.candidates?.[0]?.content?.parts || [])
        .map((part) => part.text || "")
        .filter(Boolean)
        .join("\n")
        .trim();

      if (!answer) {
        return res.status(502).json({
          error: "GreenBuddy received an empty AI response. Please try again.",
        });
      }

      return res.json({ answer });
    }

    // On your laptop, keep using your existing local Ollama model.
    const response = await fetch(
      "http://127.0.0.1:11434/api/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemma3:1b",
          prompt,
          stream: false,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Ollama returned status ${response.status}`);
    }

    const data = await response.json();

    return res.json({
      answer: data.response || "Please try asking your question again.",
    });
  } catch (error) {
    console.error("AI request failed:", error.message);

    return res.status(502).json({
      error: "GreenBuddy couldn't reach its AI service. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`GreenBuddy is running on port ${PORT}`);
});