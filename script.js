function generateActivity() {

    const time = document.getElementById("time").value;
    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    let activity = "";

    if (mood === "relaxed") {
        activity = `🌿 Take a peaceful ${time}-minute nature walk. Find a quiet place, breathe slowly, and enjoy the surroundings.`;
    } 
    else if (mood === "active") {
        activity = `🏃 Try a ${time}-minute outdoor workout! Walk, jog, stretch, or do some jumping jacks.`;
    } 
    else if (mood === "curious") {
        activity = `🔎 Go on a ${time}-minute mini nature adventure. Look for interesting plants, birds, insects, or unusual objects around you.`;
    } 
    else if (mood === "social") {
        activity = `👫 Invite a friend for a ${time}-minute outdoor activity. You could walk, talk, play a game, or explore a nearby place together.`;
    }

    result.innerHTML = `
        <h3>🌱 Your Outdoor Plan</h3>
        <p>${activity}</p>
        <p>🌳 <strong>Touch Grass Challenge:</strong> Spend at least ${time} minutes outside today!</p>
    `;
}


async function askGreenBuddy() {

    const questionInput = document.getElementById("aiQuestion");
    const aiResult = document.getElementById("aiResult");

    const question = questionInput.value.trim();

    if (!question) {
        aiResult.innerHTML = "🌱 Please ask me something first!";
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
            <h3>🤖 GreenBuddy says:</h3>
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


async function sortWaste() {

    const wasteInput = document.getElementById("wasteItem");
    const wasteResult = document.getElementById("wasteResult");

    const item = wasteInput.value.trim();

    if (!item) {
        wasteResult.innerHTML = "♻️ Please enter an item first!";
        return;
    }

    wasteResult.innerHTML = "🤖 GreenBuddy is checking...";

    try {

        const response = await fetch("/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: `I have this waste item: "${item}". Tell me how I should dispose of it in a simple and practical way. Mention whether it is generally recyclable, reusable, compostable, or should go to general waste. Also mention if local rules may differ. Keep the answer short and beginner-friendly.`
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        wasteResult.innerHTML = `
            <h3>♻️ GreenBuddy says:</h3>
            <p>${data.answer}</p>
        `;

    } catch (error) {

        console.error(error);

        wasteResult.innerHTML = `
            ❌ Sorry, I couldn't check that item.
            <br>
            Please make sure the GreenBuddy server is running.
        `;
    }
}