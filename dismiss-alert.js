const attachDismissHandler = () => {
    const dismissBtn = document.querySelector(".dismiss-alert");
    const alertBox = document.querySelector(".dc-alert");
  
    if (dismissBtn && alertBox) {
      dismissBtn.addEventListener("click", function () {
        alertBox.style.opacity = "0";
        alertBox.style.maxHeight = "0";
        setTimeout(() => {
          alertBox.style.display = "none";
        }, 500);
      });
      console.log("Dismiss handler attached (by class).");
      return true;
    }
    return false;
  };
  
  // Retry every 100ms for up to 5 seconds
  let retries = 0;
  const maxRetries = 50;
  const interval = setInterval(() => {
    const attached = attachDismissHandler();
    if (attached || retries >= maxRetries) {
      clearInterval(interval);
      if (!attached) console.warn("Failed to attach handler (by class).");
    }
    retries++;
  }, 100);
  
