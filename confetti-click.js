// Requires referencing https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js
// Deprecating tapping-v2.js

document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const targetClicks = 42;
    let confettiShown = false;
  
    document.addEventListener('click', () => {
      if (confettiShown) return;
  
      clickCount++;
      console.log(`Click ${clickCount} of ${targetClicks}`);
  
      if (clickCount >= targetClicks) {
        confettiShown = true;
  
        // Show confetti
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.6 }
        });
  
        // Show achievement popup
        showAchievementPopup("Achievement Unlocked: Deep Thought", "You clicked this page 42 times without moving to another screen. You've just unlocked the meaning of life, the universe and everything!");
  
        console.log("Answer to the Ultimate Question of Life, the Universe and Everything");
      }
    });
  
    function showAchievementPopup(title, message) {
      const popup = document.createElement('div');
      popup.style.position = 'fixed';
      popup.style.bottom = '20px';
      popup.style.right = '20px';
      popup.style.padding = '20px';
      popup.style.background = '#222';
      popup.style.color = '#fff';
      popup.style.borderRadius = '10px';
      popup.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
      popup.style.zIndex = '1000';
      popup.style.fontFamily = 'sans-serif';
      popup.innerHTML = `<strong>${title}</strong><br>${message}`;
  
      document.body.appendChild(popup);
  
      setTimeout(() => {
        popup.remove();
      }, 8000);
    }
  });
  