const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector("#modal-close-btn");
const consentFormEl = document.getElementById("consent-form");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

consentFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submitted");
});
