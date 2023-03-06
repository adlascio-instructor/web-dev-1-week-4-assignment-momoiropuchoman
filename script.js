const mailTextbox = document.querySelector(".mail-textbox")
mailTextbox.addEventListener("focus", addFocusToMail)
mailTextbox.addEventListener("blur", removeFocusFromMail)

const passwordTextbox = document.querySelector(".password-textbox")
passwordTextbox.addEventListener("focus", addFocusToPassword)
passwordTextbox.addEventListener("blur", removeFocusFromPassword)

const passwordVisibleImage = document.querySelector(".password-visible-image")
passwordVisibleImage.addEventListener("click", switchPasswordVisibility)

function addFocusToMail() {
    const mailImage = document.querySelector(".mail-image")
    mailImage.src = "images/mail-focus.svg"

    const mailField = document.querySelector(".mail-field")
    mailField.style.border = "1px solid var(--primary-color)"
}

function removeFocusFromMail() {
    const mailImage = document.querySelector(".mail-image")
    mailImage.src = "images/mail.svg"

    const mailField = document.querySelector(".mail-field")
    mailField.style.border = "1px solid var(--text-base)"
}

function addFocusToPassword() {
    const lockImage = document.querySelector(".lock-image")
    lockImage.src = "images/lock-focus.svg"

    const passwordField = document.querySelector(".password-field")
    passwordField.style.border = "1px solid var(--primary-color)"
}

function removeFocusFromPassword() {
    const lockImage = document.querySelector(".lock-image")
    lockImage.src = "images/lock.svg"

    const passwordField = document.querySelector(".password-field")
    passwordField.style.border = "1px solid var(--text-base)"
}

function switchPasswordVisibility() {
    if(passwordTextbox.type === "text") {
        passwordTextbox.type = "password"
    } else {
        passwordTextbox.type = "text"
    }
}