# 🌱 GreenBuddy — Your AI-Powered Environmental Companion

GreenBuddy is an AI-powered environmental web application designed to encourage sustainable habits, help users explore the outdoors, and make environmentally responsible decisions.

Built using HTML, CSS, JavaScript, Node.js, Express, and Google's Gemma model, GreenBuddy combines outdoor activity planning with practical AI-powered environmental guidance.

## ✨ Features

### 🌳 1. Outdoor Activity Planner

* Suggests outdoor activities based on your mood.
* Lets you choose how much time you have available.
* Encourages users to spend more time outdoors through a simple nature challenge.

### 🤖 2. Gemma AI Environmental Assistant

* Answers questions about environmental sustainability.
* Provides beginner-friendly tips for reducing plastic waste, saving water, saving electricity, and recycling.
* Uses Google's Gemma model through the Google Gen AI SDK.

### ♻️ 3. AI Waste Sorting Helper

* Helps users understand how to dispose of everyday waste items.
* Provides general guidance on recycling, reuse, composting, and general waste.
* Reminds users that disposal rules can vary by location.

## 🛠️ Tech Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| HTML              | Web page structure                |
| CSS               | Styling and layout                |
| JavaScript        | Interactive features              |
| Node.js           | Backend runtime                   |
| Express.js        | Server and API endpoint           |
| Google Gen AI SDK | Communication with the AI model   |
| Google Gemma      | AI-powered environmental guidance |

## ⚙️ Run GreenBuddy Locally

### Prerequisites

* Node.js and npm
* A Google AI API key with access to the selected model

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Vanshi23-del/greenbuddy.git
   ```

2. Open the project folder:

   ```bash
   cd greenbuddy
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and add your API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your own API key. Never share your real key or commit the `.env` file to GitHub.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your browser at:

   http://localhost:3000

## 🔐 Security

* API credentials should be stored in a local `.env` file.
* The `.env` file and `node_modules/` directory should remain excluded from Git using `.gitignore`.
* Never publish API keys in source code, screenshots, or public repositories.

## 🌍 Vision

GreenBuddy aims to make sustainable living easier through accessible AI guidance and simple everyday actions. The goal is to help people build greener habits, one small step at a time.

## 👩‍💻 Author

**Vanshika Kapoor**

GitHub: [@Vanshi23-del](https://github.com/Vanshi23-del)

---

*Small actions. Greener choices. A better planet. 🌎*
