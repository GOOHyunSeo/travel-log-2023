const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");
const modalClose = document.querySelector(".modal_close");

function onClick() {
  console.log("it is clicked!!!");
}
function openModal() {
  modal.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
}

btnOpenPopup.addEventListener("click", onClick, openModal);
modalClose.addEventListener("click", onClick, closeModal);
