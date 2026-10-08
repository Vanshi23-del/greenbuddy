function generateActivity() {

    const time = document.getElementById("time").value;
    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    let activity;

    if (mood === "relaxed") {
        activity = "🌿 Take a peaceful walk in a nearby park. Leave your phone in your pocket and spend a few minutes noticing trees, sounds and fresh air.";
    }

    else if (mood === "active") {
        activity = "🏃 Go for a brisk walk or light jog. Try to keep moving continuously and enjoy the surroundings instead of looking at your phone.";
    }

    else if (mood === "curious") {
        activity = "🐦 Go outside and look for three different plants, birds or interesting natural objects. Take notes about what you discover.";
    }

    else if (mood === "social") {
        activity = "👭 Ask a friend or family member to join you for a walk. Talk about something interesting instead of scrolling on your phones.";
    }

    result.innerHTML = `
        <h2>Your ${time}-minute plan 🌱</h2>
        <p>${activity}</p>
        <br>
        <strong>📵 Touch Grass Challenge:</strong>
        Try to spend the whole activity without scrolling social media.
    `;
}


async function askGreenBuddy() {

    const questionInput = document.getElementById("aiQuestion");
    const aiResult = document.getElementById("aiResult");

    const question = questionInput.value.trim();

    if (!question) {
        aiResult.innerHTML = "🌱 Please type a question first!";
        return;
    }

    aiResult.innerHTML = "🤖 GreenBuddy is thinking...";

    try {
        const response = await fetch("/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        aiResult.innerHTML = `
            <h3>🌱 GreenBuddy says:</h3>
            <p>${data.answer}</p>
        `;

    } catch (error) {

        console.error(error);

        aiResult.innerHTML = `
            ❌ Sorry, I couldn't connect to GreenBuddy AI.
            <br>
            Please make sure the GreenBuddy server is running.
        `;
    }
}