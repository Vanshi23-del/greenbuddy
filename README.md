\# 🌱 GreenBuddy



\*\*GreenBuddy is an AI-powered environmental companion that encourages people to spend time outdoors and make simple eco-friendly choices.\*\*



It combines an outdoor activity planner with a \*\*Gemma-powered AI assistant\*\* that provides beginner-friendly environmental advice.



\## ✨ Features



\### 🌳 Outdoor Activity Planner



Choose:



\* ⏱️ How much time you have

\* 😊 Your current mood



GreenBuddy then suggests a simple outdoor activity that matches your time and mood.



\### 🤖 Gemma AI Assistant



Ask GreenBuddy questions about:



\* ♻️ Recycling

\* 🗑️ Waste management

\* 🥤 Reducing plastic

\* 💧 Saving water

\* ⚡ Saving electricity

\* 🌱 Eco-friendly habits



The AI assistant uses \*\*Gemma 4\*\* to generate practical and easy-to-understand answers.



\### 📵 Touch Grass Challenge



GreenBuddy also encourages users to spend their outdoor activity away from social media and enjoy the real world around them.



\## 🛠️ Tech Stack



\* HTML

\* CSS

\* JavaScript

\* Node.js

\* Express.js

\* Google GenAI SDK

\* Gemma 4



\## 🧠 How Gemma Is Used



GreenBuddy sends the user's environmental question from the frontend to an Express.js backend.



The backend sends the question to \*\*Gemma 4\*\* and returns the generated response to the webpage.



```text

User

&#x20; ↓

GreenBuddy Webpage

&#x20; ↓

Express.js Backend

&#x20; ↓

Gemma 4

&#x20; ↓

AI Response

&#x20; ↓

GreenBuddy Webpage

```



\## 🚀 Run Locally



\### 1. Clone the repository



```bash

git clone https://github.com/Vanshi23-del/greenbuddy.git

cd greenbuddy

```



\### 2. Install dependencies



```bash

npm install

```



\### 3. Create your environment file



Create a file named:



```text

.env

```



Add your Gemini API key:



```text

GEMINI\_API\_KEY=YOUR\_API\_KEY\_HERE

```



\*\*Never upload your `.env` file or expose your API key publicly.\*\*



\### 4. Start GreenBuddy



```bash

node server.js

```



Then open:



```text

http://localhost:3000

```



\## 🔐 Security



The API key is stored in an environment variable and `.env` is excluded from Git using `.gitignore`.



\## 🌍 Vision



GreenBuddy aims to make environmental awareness simple, practical and engaging.



Instead of only telling people to care about the



