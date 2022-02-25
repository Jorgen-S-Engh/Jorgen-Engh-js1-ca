const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (checkName(name.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkName(subject.value, 9)) {
    subError.style.display = "none";
  } else {
    subError.style.display = "block";
  }
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkName(address.value, 24)) {
    adError.style.display = "none";
  } else {
    adError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkName(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
