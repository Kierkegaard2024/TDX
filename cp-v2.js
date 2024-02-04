document.addEventListener('DOMContentLoaded', function () {
  // Call a function to generate the link and modal dynamically
  generateDynamicLinkAndModal("https://www.bing.com/chat", "Copilot");
});

function generateDynamicLinkAndModal(linkUrl, linkText) {
  // Create the link
  var dynamicLink = document.createElement("a");
  dynamicLink.textContent = linkText;
  dynamicLink.style.cursor = "pointer";
  dynamicLink.onclick = openDynamicModal;

  // Append the link to the existing <li> element
  var copilotLi = document.querySelector(".copilot");
  copilotLi.appendChild(dynamicLink);

  // Create the modal
  var dynamicModalContainer = document.body; // Append modal directly to the body

  var dynamicModal = document.createElement("div");
  dynamicModal.id = "dynamicModal";
  dynamicModal.style.display = "none";
  dynamicModal.style.position = "fixed";
  dynamicModal.style.top = "0";
  dynamicModal.style.left = "0";
  dynamicModal.style.width = "100%";
  dynamicModal.style.height = "100%";
  dynamicModal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  dynamicModal.onclick = closeDynamicModal;

  var dynamicModalContent = document.createElement("div");
  dynamicModalContent.id = "dynamicModalContent";
  dynamicModalContent.style.position = "absolute";
  dynamicModalContent.style.top = "50%";
  dynamicModalContent.style.left = "50%";
  dynamicModalContent.style.transform = "translate(-50%, -50%)";
  dynamicModalContent.style.width = "850px";
  dynamicModalContent.style.height = "850px";
  dynamicModalContent.style.backgroundColor = "#fff";
  dynamicModalContent.onclick = function (event) {
    event.stopPropagation();
  };

  var dynamicIframe = document.createElement("iframe");
  dynamicIframe.src = linkUrl;
  dynamicIframe.style.width = "100%";
  dynamicIframe.style.height = "100%";
  dynamicIframe.style.border = "none";

  var dynamicCloseButton = document.createElement("button");
  dynamicCloseButton.textContent = "Close";
  dynamicCloseButton.style.position = "absolute";
  dynamicCloseButton.style.top = "10px";
  dynamicCloseButton.style.right = "10px";
  dynamicCloseButton.onclick = closeDynamicModal;

  // Append elements to the modal
  dynamicModalContent.appendChild(dynamicIframe);
  dynamicModalContent.appendChild(dynamicCloseButton);

  dynamicModal.appendChild(dynamicModalContent);

  // Append modal to the body
  dynamicModalContainer.appendChild(dynamicModal);
}

function openDynamicModal() {
  document.getElementById('dynamicModal').style.display = 'block';
}

function closeDynamicModal() {
  document.getElementById('dynamicModal').style.display = 'none';
}
