//  Somente a função padrão Function tem uma variável especial
//  chamada arguments que armazena os parâmetros mesmo que a função não peça parâmetros.

function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
}
funcao(1, 2, 3, 4, 5);

function funcao2(a, b = 0) {
  console.log(a + b);
}
funcao2(1);

function funcao3({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

let obj = { nome: "Pedro", sobrenome: "Henrique", idade: 19 };
funcao3(obj); // Também posso mandar {nome: 'Pedro', sobrenome: 'Henrique', idade: 19}
