const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");
const modalCloseBtn = document.querySelector(".modal_close-btn");

const HIDDEN_CLASSNAME = "hidden";

function onClick() {
  console.log("it is clicked!!!");
}
function openModal() {
  modal.classList.remove(HIDDEN_CLASSNAME);
  if (!modal.classList.contains(HIDDEN_CLASSNAME)) {
    body.style.overflow = "hidden";
  }
}
function closeModal() {
  modal.classList.add(HIDDEN_CLASSNAME);
  if (modal.classList.contains(HIDDEN_CLASSNAME)) {
    body.style.overflow = "auto";
  }
}

btnOpenPopup.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);
