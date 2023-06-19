const modal = document.getElementById("modal");
const modalCloseBtn = document.querySelector("#modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  console.log("hovered");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const userName = consentFormData.get("fullName");

  modalText.innerHTML = `<div class="modal-inner-loading"><img src="images/loading.svg" class="loading"><p id="uploadText">Uploading your data to the dark web...</p></div>`;

  setTimeout(() => {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks <span class="modal-display-name">${userName}</span>, you sucker! </h2><p>We just sold the rights to your eternal soul.</p><div class="idiot-gif"><img src="images/pirate.gif">
  </div>`;
    modalCloseBtn.disabled = false;
  }, 3000);
});
