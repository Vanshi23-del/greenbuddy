
async function sortWaste() {
    const itemInput = document.getElementById("wasteItem");
    const wasteResult = document.getElementById("wasteResult");

    const item = itemInput.value.trim();

    if (!item) {
        wasteResult.textContent = "♻️ Please enter an item first!";
        return;
    }

    wasteResult.textContent = "🤖 GreenBuddy is checking...";

    try {
        const response = await fetch("/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: `I have this waste item: "${item}". Explain in simple, practical terms whether it can generally be recycled, reused, composted, or should go to general waste. Mention that local rules may differ. Keep the answer short and beginner-friendly.`
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        wasteResult.replaceChildren();

        const heading = document.createElement("h3");
        heading.textContent = "♻️ GreenBuddy says:";

        const paragraph = document.createElement("p");
        paragraph.textContent = data.answer;

        wasteResult.append(heading, paragraph);
    } catch (error) {
        console.error(error);
        wasteResult.textContent =
            "Sorry! We couldn't check this item right now. Please try again.";
    }
}

function generateActivity() {
    const time = document.getElementById("time").value;
    const mood = document.getElementById("mood").value;
    const result = document.getElementById("result");

    const activities = {
        relaxed: [
            "Take a peaceful walk in a nearby park.",
            "Sit under a tree and enjoy the fresh air.",
            "Spend some quiet time observing birds and plants."
        ],
        active: [
            "Go for a brisk walk or a light jog.",
            "Explore a nearby walking trail.",
            "Try an outdoor stretching session."
        ],
        curious: [
            "Explore different plants and identify their leaves.",
            "Observe birds and listen to their calls.",
            "Discover a new nature spot in your neighbourhood."
        ],
        social: [
            "Invite a friend for a walk in the park.",
            "Plan a small outdoor picnic with reusable containers.",
            "Take a friend on a nature photography walk."
        ]
    };

    const options = activities[mood] || activities.relaxed;
    const activity = options[Math.floor(Math.random() * options.length)];

    result.innerHTML = `
        <h3>Your Green Adventure 🌿</h3>
        <p><strong>Time available:</strong> ${time} minutes</p>
        <p><strong>Your activity:</strong> ${activity}</p>
        <p>Enjoy nature and leave the place as clean as you found it! 💚</p>
    `;
}

async function askGreenBuddy() {
    const question = document.getElementById("aiQuestion").value.trim();
    const result = document.getElementById("aiResult");

    if (!question) {
        result.textContent = "Please enter a question first. 🌱";
        return;
    }

    result.textContent = "GreenBuddy is thinking... 💚";

    try {
        const response = await fetch("/ask-ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: question })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "The server could not answer.");
        }

        result.textContent =
            data.answer || data.response || data.reply ||
            "I couldn't find an answer. Please try again.";
    } catch (error) {
        console.error("GreenBuddy AI error:", error);
        result.textContent =
            "Sorry, I couldn't connect to the AI. Please check that the server is running and try again.";
    }
}