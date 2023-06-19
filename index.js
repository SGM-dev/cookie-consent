const modal = document.getElementById("modal");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

const closeModalBtn = document.querySelector("#modal-close-btn");

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
