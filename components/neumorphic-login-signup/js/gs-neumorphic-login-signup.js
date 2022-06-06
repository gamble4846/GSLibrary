var loginHeader = document.querySelector('[data-button="gs-neumorphic-login"]');
var signupHeader = document.querySelector('[data-button="gs-neumorphic-signup"]');
var loginContainer = loginHeader.parentElement;
var signupContainer = signupHeader.parentElement;

loginHeader.addEventListener('click', function handleClick(event) {
    loginContainer.classList.add("gs-open");
    loginHeader.classList.add("gs-open");
    signupHeader.classList.remove("gs-open");

    loginContainer.classList.add("gs-form-open");
    signupContainer.classList.remove("gs-form-open");
});

signupHeader.addEventListener('click', function handleClick(event) {
    loginContainer.classList.remove("gs-open");
    loginHeader.classList.remove("gs-open");
    signupHeader.classList.add("gs-open");

    loginContainer.classList.remove("gs-form-open");
    signupContainer.classList.add("gs-form-open");
});