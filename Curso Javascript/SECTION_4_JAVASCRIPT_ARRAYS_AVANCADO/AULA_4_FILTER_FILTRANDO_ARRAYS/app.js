// filter, map, reduce

// Retornar os números maiores que 10
const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 15, 22, 27];
/* 
Value -> cada elemento dentro do meu array
Boolean -> ele sempre espera um valor boolean para alocar ao filtro
*/

const maioresQueDez = numeros.filter(value => {
    return value > 10;
});

// console.log(maioresQueDez)

const pessoas = [
    {nome:  'Pedro',     idade: 62},
    {nome:  'Maria',     idade: 23},
    {nome:  'Eduardo',   idade: 55},
    {nome:  'Letícia',   idade: 19},
    {nome:  'Rosana',    idade: 32},
    {nome:  'Wallace',   idade: 47}
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const nomesPessoasComNomeGrande = pessoas.filter((pessoa) => pessoa.nome.length >= 5);                      // Questão 1
// Retorne as pessoas com mais de 50 anos
const pessoasMaisVelhas = pessoas.filter(pessoa => pessoa.idade > 50);                                    // Questão 2
// Retorne as pessoas cujo o nome termina com "a"
const nomeTerminaComA = pessoas.filter(value => value.nome.toLocaleLowerCase().endsWith('a'));          // Questão 3

console.log(nomesPessoasComNomeGrande)

console.log(pessoasMaisVelhas)

console.log(nomeTerminaComA)