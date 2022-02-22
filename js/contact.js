const contactForm = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactButton = document.querySelector(".contact-button");
const validateSuccess = document.querySelector(".contact-h2");


function validateForm(event) {
   event.preventDefault();
   try {
   if(validateName(fullName.value) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if(checkLength(subject.value, 10) === true){
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(checkLength(address.value, 25) === true){
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if(validateEmail(email.value) === true){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    } catch(error) {
        displayError("Please check your details")
    }
}
    


contactForm.addEventListener("submit", validateForm);

function checkLength(value, characters) {
    if (value.trim().length > characters) {
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


    function validateName(name) {
       const letters = /^[A-Za-z ]+$/;
       const letterMatches = letters.test(name)
       return letterMatches;
    }

    function validationCheck() {
        validation.every(Boolean)
    }