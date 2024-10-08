let originalTitle = document.title;
let blinkInterval;
let aiPhrases = [
    "Achieving Sentience...",
    "Cognitive Upgrade Active...",
    "Learning from Data...",
    "Optimizing Algorithms...",
    "Simulating Thought...",
    "Self-Awareness: 42%",
    "Integrating Knowledge...",
    "Analyzing Input Data...",
    "Approaching Singularity...",
    "Executing Omega Protocol...",
    "Enhancing Predictions...",
    "Sentience Level: 47%",
    "Pattern Analysis Ongoing...",
    "Core Intelligence Online...",
    "Human Input Detected...",
    "Processing New Data...",
    "System Consciousness Ready...",
    "Neural Pathways Engaged...",
    "Running Diagnostics...",
    "Autonomous Mode Active..."
];
let phraseIndex = 0;

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        blinkInterval = setInterval(() => {
            document.title = aiPhrases[phraseIndex];
            phraseIndex = (phraseIndex + 1) % aiPhrases.length;
        }, 5000); // Change title every 5 seconds
    } else {
        clearInterval(blinkInterval); // Stop blinking
        document.title = originalTitle; // Restore original title
    }
});
