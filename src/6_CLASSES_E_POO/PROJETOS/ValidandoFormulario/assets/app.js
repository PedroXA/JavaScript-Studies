class form {
  constructor() {
    this.form = document.querySelector(".form");
    this.eventos();
  }

  eventos() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if(this.validatingInputs()){
      alert("Formulário enviado");
      this.form.submit();
    }
  }

  validatingInputs() {
    let valid = true;

    // limpando erros passados
    this.clearErrors();

    for (let input of this.form.querySelectorAll(".checkInput")) {
      let label = input.previousElementSibling.innerText;
      if (!input.value) {
        this.createError(input, `Campo ${label} não pode estar em branco`);
        valid = false;
      }
      // Mandando uma solicitação para ver se o campo Nome é válido
      if (input.classList.contains("nome")){
        if(!this.isUserValid(input)) valid = false;
       } 

      // Mandando uma solicitação para ver se o campo Cpf é válido
      if (input.classList.contains("cpf")) {
        if (!this.isCpfValid(input)) valid = false; 
      }

      // Mandando uma solicitação para ver se o campo Senha é válido
      if (input.classList.contains("senha")){
        if(!this.isPasswordValid(input)) valid = false;
      }
    }
     return valid;
  }

  isUserValid(input) {
    const name = input.value;
    let onlyLettersAndNumbersRegex = /^[a-zA-Z0-9]+$/;

    if(name.length < 3 || name.length > 12){
        this.createError(input, `O nome deve ter de 3 até 12 caracteres!`);
        return false;
    }

    if(!onlyLettersAndNumbersRegex.test(name)){
      this.createError(input, 'O nome deve conter somente letras e números');
      return false;
    }

    return true;
  }

  isPasswordValid(passwordInput) {
    const password = passwordInput.value;
    const secondPassword = this.form.querySelector(".repetir-senha").value;
    let valid = true;
  
    if (password.length < 3 || password.length > 12) {
      valid = false;
      this.createError(passwordInput, 'A senha deve conter entre 3 e 12 caracteres');
    }
  
    if (password !== secondPassword) {
      valid = false;
      this.createError(passwordInput, "As senhas devem ser iguais.");
      this.createError(this.form.querySelector(".repetir-senha"), "As senhas devem ser iguais.");
    }
  
    return valid;
  }
  

  isCpfValid(input) {
    const cpf = new ValidaCPF(input.value);

    if (!cpf.completeCpf()) {
      this.createError(input, "CPF inválido.");
      return false;
    }

    return true;
  }

  /*
        1. Recebendo os inputs vazios e a messagem de erro referente ao input vazio
        2. Criando uma div com uma classe "form-text-error" e adicionando a message 
        3. Inserindo a div em baixo do elemento pai dela que é o input
    */
  createError(input, message) {
    let div = document.createElement("div");
    div.innerHTML = message;
    div.classList.add("form-text-error");
    input.insertAdjacentElement("afterend", div);
  }

  clearErrors() {
    for (const errorDivs of this.form.querySelectorAll(".form-text-error")) {
      errorDivs.remove();
    }
  }
}
const formCheck = new form();
