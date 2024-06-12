const main = document.querySelector("main");
const mainSection = main.querySelector(".main-section");
const modalSection = main.querySelector(".modal-section");
const overlay = main.querySelector(".overlay");

const form = modalSection.querySelector("#login-form");

const buttonStart = mainSection.querySelector(".button-start");
const buttonCross = modalSection.querySelector(".cross");
const buttonSubmit = modalSection.querySelector(".button-submit");

buttonStart.onclick = () => {
  overlay.style.display = "block";
  modalSection.style.display = "block";
};

buttonCross.onclick = () => {
  overlay.style.display = "none";
  modalSection.style.display = "none";
};

overlay.onclick = (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
    modalSection.style.display = "none";
  }
};

buttonSubmit.onclick = (event) => {
  handleFormSubmit(event);
  overlay.style.display = "none";
  modalSection.style.display = "none";
};

function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const values = {};
  for (const value of formData.entries()) {
    values[value[0]] = value[1];
  }
  console.log(values);
}
