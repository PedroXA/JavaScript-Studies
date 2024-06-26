// user só pode ter letras e/ou números
// usuário deverá ter entre 3 e 12 caracteres
// senha precisa ter entre 3 e 12 caracteres

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
    this.validatingInputs();
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
      // Mandando uma solicitação para ver se o campo Nome é
      if (input.classList.contains("nome")){
        // console.log(input);
        if(!this.isUserValid(input)) valid = false;
       } 

      // Mandando uma solicitação para ver se o campo Cpf é válido
      if (input.classList.contains("cpf")) {
        // console.log(input);
        if (!this.isCpfValid(input)) valid = false; 
      }
    }
     return valid;
  }

  isUserValid(input) {
    const name = input.value;
    let valid = true;
    // console.log(name.length);
    if(name.length < 3 || name.length > 12){
        console.log(name);
        this.createError(input, `O nome deve ter de 3 até 12 caracteres!`)
        valid = false;
    }
    // if(input.value.lenght < 3 || input.value.lenght > 12){
    //     console.log(input.value);
    //     this.createError(input, `O nome deve ter de 3 até 12 caracteres!`)
    //     return false;
    // }
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
