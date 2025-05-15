const dismissKey = "dcAlertDismissed";

// Function to handle visibility and dismissal logic
const handleDcAlert = () => {
  const alertBox = document.querySelector(".dc-alert");
  const dismissBtn = document.querySelector(".dismiss-alert");

  if (!alertBox) return false;

  // If dismissed, don't show it
  if (sessionStorage.getItem(dismissKey) === "true") {
    return true;
  }

  // Not dismissed, so show it
  alertBox.style.display = "block";

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      alertBox.remove();
      sessionStorage.setItem(dismissKey, "true");
    });
  }

  return true;
};

// Retry until the element exists
let retries = 0;
const maxRetries = 50;

const interval = setInterval(() => {
  const handled = handleDcAlert();
  if (handled || retries >= maxRetries) {
    clearInterval(interval);
  }
  retries++;
}, 100);
