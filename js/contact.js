const overskrift = document.querySelector(`#skjema`)
const form = document.querySelector(`form`)
const fullName = document.querySelector(`#fullName`)
const nameError = document.querySelector(`#nameError`)
const subject = document.querySelector(`#subject`)
const subjectError = document.querySelector(`#subjectError`)
const email = document.querySelector(`#email`)
const emailError = document.querySelector(`#emailError`)
const address = document.querySelector(`#address`)
const addressError = document.querySelector(`#addressError`)
const button = document.querySelector(`button`)

function formCheck(event) {
    event.preventDefault();

    if (check(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (check(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (check(address.value, 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (check(fullName.value, 0) && check(subject.value, 10) && checkEmail(email.value) && check(address.value, 25)) {
    overskrift.innerHTML = `<h3 class="submitVal">You have submitted successfully</h3>`
    form.reset();
    }
}

form.addEventListener("submit", formCheck);

function check(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function checkEmail(email) {
    const regEx = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const match = regEx.test(email);
    return match;
}