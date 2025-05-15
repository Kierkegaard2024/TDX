const dismissKey = "dcAlertDismissed";

// Function to check for alert and remove or bind
const handleDcAlert = () => {
  const alertBox = document.querySelector(".dc-alert");
  const dismissBtn = document.querySelector(".dismiss-alert");

  if (!alertBox) return false; // Not injected yet

  if (sessionStorage.getItem(dismissKey) === "true") {
    alertBox.remove(); // Nuked immediately once found
    return true;
  }

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      alertBox.remove();
      sessionStorage.setItem(dismissKey, "true");
    });
    return true;
  }

  return false;
};

// Retry until alert exists (if needed)
let retries = 0;
const maxRetries = 50;

const interval = setInterval(() => {
  const handled = handleDcAlert();
  if (handled || retries >= maxRetries) {
    clearInterval(interval);
  }
  retries++;
}, 100);
