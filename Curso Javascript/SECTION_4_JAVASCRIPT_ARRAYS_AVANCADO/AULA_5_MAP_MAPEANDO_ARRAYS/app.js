// Dobre os valores do array
const numeros = [5 , 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 15, 22, 27];
const numerosDobrados = numeros.map(function(valor){
    return valor * 2;
});
/* console.log(numerosDobrados); */


// Para cada elemento.
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chabe "nome" do projeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome:  'Pedro',     idade: 62},
    {nome:  'Maria',     idade: 23},
    {nome:  'Eduardo',   idade: 55},
    {nome:  'Letícia',   idade: 19},
    {nome:  'Rosana',    idade: 32},
    {nome:  'Wallace',   idade: 47}
];

const nomes = pessoas.map((obj) => {
    return obj.nome;
})

const idades = pessoas.map((obj) => {
    return {idade: obj.idade};
})

/* 
    const idades = pessoas.map(obj => ({idade: obj.idade}));  Neste caso vira uma expressão
*/

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj}
    newObj.id = (indice + 1);
    return newObj
})

console.log(pessoas);
console.log(comIds);