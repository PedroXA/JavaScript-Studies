// Declaração de função (Function hoisting) -> não faz diferença se chamar a função antes do escopo dela
// falaOi();

function falaOi() {
  console.log("Oi");
}
// falaOi();

// First-class (Objetos de primeira classe)
// Function expression - criar uma variável e atribuir uma função nela

const souUmDado = function () {
  console.log("Sou um dado.");
};
// souUmDado();

function executaFuncao(funcao) {
  funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

// Dentro de um objeto
const obj = {
  falar() {
    console.log("estou falando...");
  },
};
obj.falar();
