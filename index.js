const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector("#modal-close-btn");
const consentFormEl = document.getElementById("consent-form");
const modalTextEl = document.getElementById("modal-text");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  modalTextEl.innerHTML = `<div class="modal-inner-loading"><img src="images/loading.svg" class="loading"><p id="uploadText">Uploading your data to the dark web...</p></div>`;

  setTimeout(() => {
    document.getElementById("uploadText").textContent = `Making the sale...`;
  }, 1500);
});
