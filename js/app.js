const formElement = document.querySelector(".container form");
const ratingInputs = document.querySelectorAll(".rating-options input");
const ratingOutput = document.querySelector(".rating-value span");
const mainContainer = document.querySelector("main.container");
const feedbackMsg = document.querySelector(".message");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedInput = Array.from(ratingInputs).find((input) => input.checked);

  if (checkedInput) {
    ratingOutput.textContent = checkedInput.value;
    mainContainer.classList.add("swipe");
  } else {
    feedbackMsg.classList.add("warning");
  }

  formElement.reset();
});
