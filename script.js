const emailInput = document.getElementById("mail");
const submitButton = document.getElementById("btn");
const errorMessage = document.getElementById("error");


submitButton.addEventListener("click", () => {
  if (emailInput.checkValidity() === false) {
    emailInput.style.backgroundColor = "#ffe8e6";
    emailInput.style.color = "var(--tomato)";
    emailInput.style.outline = "1px solid red";
    error.style.display = "block";
  }
});

emailInput.addEventListener("input", () => {
  emailInput.style.backgroundColor = "white";
  emailInput.style.color = "#000";
  emailInput.style.outline = "0px solid black";
  error.style.display = "none";
});




