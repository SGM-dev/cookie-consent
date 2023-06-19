const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector("#modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);

  modalText.innerHTML = `<div class="modal-inner-loading"><img src="images/loading.svg" class="loading"><p id="uploadText">Uploading your data to the dark web...</p></div>`;

  setTimeout(() => {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);

  setTimeout(() => {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks you sucker! </h2><p>We just sold the rights to your eternal soul.</p><div class="idiot-gif"><img src="images/pirate.gif">
  </div>`;
  }, 3000);
});
