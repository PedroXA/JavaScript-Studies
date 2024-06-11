// Closures
// É a habilidade da função acessar o escopo léxico

function returnFunction(nome) {
  // Escopo 1
  return function () {
    // Esta é uma função anonima
    // esta função tem acesso ao escopo léxico do pai "Return Function"
    return nome; // Escopo 2
  };
}

// escopo global

const funcao = returnFunction("pedro");
console.log(funcao());
