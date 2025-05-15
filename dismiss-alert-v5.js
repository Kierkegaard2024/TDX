const dismissKey = "dcAlertDismissed";

// Function to handle visibility and dismissal logic
const handleDcAlert = () => {
  const alertBox = document.querySelector(".dc-alert");
  const dismissBtn = document.querySelector(".dismiss-alert");

  if (!alertBox) return false;

  // If dismissed before, don't show it
  if (localStorage.getItem(dismissKey) === "true") {
    return true;
  }

  // Not dismissed yet — show it
  alertBox.style.display = "block";

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      alertBox.remove();
      localStorage.setItem(dismissKey, "true");
    });
  }

  return true;
};

// Retry until the alert appears in the DOM
let retries = 0;
const maxRetries = 50;

const interval = setInterval(() => {
  const handled = handleDcAlert();
  if (handled || retries >= maxRetries) {
    clearInterval(interval);
  }
  retries++;
}, 100);
