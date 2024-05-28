const nome = 'Pedro';
const sobrenome = 'Henrique';
const idade = 18;
const peso = 111;
const alturaEmM = 1.80; // <-- NESTE LOCAL

let IMC = peso / Math.pow(alturaEmM, 2);
let anoNascimento = 2004;

console.log(IMC)
console.log(`${nome} ${sobrenome} tem ${idade} anos pesando ${peso} Kg! e tem ${alturaEmM} de altura com seu IMC de ${IMC.toFixed(2)} !`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} !`);

// ...