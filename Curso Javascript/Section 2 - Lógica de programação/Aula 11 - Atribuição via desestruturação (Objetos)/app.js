const pessoa = {
    nome: 'Pedro',
    Sobrenome: 'Henrique',
    idade: 30,
    endereco:{
        rua: 'Rio Verde',
        numero: 383
    }
}

// Atribuição via desestruturação
const { nome, Sobrenome, idade } = pessoa; // = pessoa pois estou pegando em especifico os atributos do objeto Pessoa

console.log(nome, Sobrenome, idade)