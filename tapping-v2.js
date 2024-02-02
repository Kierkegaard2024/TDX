let tapCount = 0;

// Function to increment tap count, show alert, and change background when reaching 42 taps
function handleTap() {
    tapCount++;

    if (tapCount === 42) {
        const congratulationsMessage = "Congratulations on tapping the screen 42 times without moving to another screen!\n\n" +
            "You've just unlocked the meaning of life, the universe, and everything. Keep tapping for intergalactic secrets!";

        // Change the body background to a cover image
        document.body.style.background = "url('https://p.turbosquid.com/ts-thumb/Aq/aO6901/MJ/dt_2/jpg/1636708870/1920x1080/fit_q87/12358f2b4160490128ce47083c743455430f1ceb/dt_2.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";

        // Show the alert message
        alert(congratulationsMessage);
    }
}

// Add a tap event listener to the document
document.addEventListener("click", handleTap);
