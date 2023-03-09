const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const btnOpenPopup = document.querySelector(".btn-open-popup");
const modalCloseBtn = document.querySelector(".modal_close-btn");
const dialog = document.querySelector("dialog");

btnOpenPopup.addEventListener("click", () => {
  dialog.showModal();
});
