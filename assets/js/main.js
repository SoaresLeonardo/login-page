const campos_input = document.querySelectorAll(".input-validation");
const signup_button = document.querySelector(".signup-button");
const login_button = document.querySelector(".button");
const form = document.querySelector(".form");
const span_message_error = document.querySelectorAll(".error-validation");

const validationRegexName = /^[a-z\s]{0,255}$/i;
const validationRegexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function showMessageError(index, msg) {
  campos_input[index].style.border = "1px solid red";
  campos_input[index].style.marginBottom = "10px";
  span_message_error[index].style.display = "flex";
  span_message_error[index].style.marginBottom = "10px";
  span_message_error[index].innerHTML = msg;
}

function removeMessageError(index) {
  campos_input[index].style.border = "";
  campos_input[index].style.marginBottom = "";
  span_message_error[index].style.display = "none";
  span_message_error[index].style.marginBottom = "";
  span_message_error[index].innerHTML = "";
}

function nameValidate(index, msg1) {
  if (!campos_input[index].value) {
    showMessageError(index, msg1);
    return;
  }

  if (!validationRegexName.test(campos_input[index].value)) {
    showMessageError(index, "Insira somente letras neste campo!");
    return;
  }
  removeMessageError(index);
}

function emailValidate(index, msg) {
  if (!campos_input[index].value) {
    showMessageError(index, msg);
    return;
  }

  if (!validationRegexEmail.test(campos_input[index].value)) {
    showMessageError(
      index,
      "Esse e-mail é inválido. O formato correto é assim: <br> exemplo@email.com"
    );
    return;
  }
  removeMessageError(index);
}

function passwordValidate(index, msg) {
  if (!campos_input[index].value) {
    showMessageError(index, msg);
    return;
  }
  if (
    campos_input[index].value.length <= 2 ||
    campos_input[index].value.length > 50
  ) {
    showMessageError(index, "Sua senha precisa ter entre 5 e 50 caracteres.");
    return;
  }
  removeMessageError(index);
}

function passwordConfirmValidate(index1, index2, msg) {
  if (!campos_input[index2].value) {
    showMessageError(index2, msg);
    return;
  }
  if (campos_input[index1].value !== campos_input[index2].value) {
    showMessageError(index2, "As senhas não coincidem");
    return;
  }
  removeMessageError(index2);
}

function nameUserValidate(index, msg) {
  if (!campos_input[index].value) {
    showMessageError(index, msg);
    return;
  }
  removeMessageError(index);
}

function loginButton() {
  emailValidate(0, "Digite seu email.");
  passwordValidate(1, "Digite sua senha");
}

function signupButton() {
  nameValidate(0, "Você deve inserir seu nome.");
  nameValidate(1, "Você deve inserir seu sobrenome.");
  emailValidate(2, "Você deve inserir seu e-mail.");
  passwordValidate(3, "Você precisa inserir uma senha.");
  passwordConfirmValidate(3, 4, "Cofirme sua senha.");
  nameUserValidate(5, "Insira um nome para seu perfil.");
}

