const form = document.getElementById("form");
const success = document.getElementById("success");
const main = document.querySelector(".main-container");
const popup = document.querySelector("#popup");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateRecoveryForm()) {
    console.log("request");
    main.classList.add("blur");
    popup.classList.add("showPopup");
    setTimeout(() => {
      main.classList.remove("blur");
      popup.classList.remove("showPopup");
      success.classList.add("show");
      setTimeout(() => {
        success.classList.remove("show");
      }, 1500);
    }, 1500);
  } else {
    console.log("error")
    failed.classList.add("show")
    setTimeout(() =>{
        failed.classList.remove("show")
    }, 1500)
  }
});

function validateRecoveryForm() {
  let proceed = true;

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailError.classList.add("visible");
    proceed = false;
  } else {
    email.classList.remove("error");
    emailError.classList.remove("visible");
    proceed = true;
  }

  function shuldProceed(v) {
    if (!v) {
      return false;
    }
    return true;
  }
  return shuldProceed(proceed);
}
