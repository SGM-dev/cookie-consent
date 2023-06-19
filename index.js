const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector("#modal-close-btn");
const consentFormEl = document.getElementById("consent-form");
const modalTextEl = document.getElementById("modal-text");

const innerLoadingModal = document.createElement("div");
innerLoadingModal.classList.add("modal-inner-loading");

const loaderImgEl = document.createElement("img");
loaderImgEl.setAttribute("src", "images/loading.svg");
loaderImgEl.classList.add("loading");

const uploadTextEl = document.createElement("p");
uploadTextEl.setAttribute("id", "uploadText");
uploadTextEl.textContent = "Uploading your data to the dark web...";

innerLoadingModal.prepend(loaderImgEl);
innerLoadingModal.append(uploadTextEl);

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
  modalTextEl.replaceChildren(); // clear children of modalTextEl
  modalTextEl.append(innerLoadingModal);
});
