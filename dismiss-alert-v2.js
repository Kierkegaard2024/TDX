const attachDismissHandler = () => {
  const dismissBtn = document.querySelector(".dismiss-alert");
  const alertBox = document.querySelector(".dc-alert");

  if (dismissBtn && alertBox) {
    dismissBtn.addEventListener("click", function () {
      alertBox.remove();
    });
    return true;
  }
  return false;
};

let retries = 0;
const maxRetries = 50;

const interval = setInterval(() => {
  const success = attachDismissHandler();
  if (success || retries >= maxRetries) {
    clearInterval(interval);
  }
  retries++;
}, 100);
