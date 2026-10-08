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