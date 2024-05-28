//  Reduce - reduzir um array para um único elemento    (Reduce)
//  Some todos os números                       (Reduce)
//  Retorne um array com os pares               (Filter)
//  Retorne um array com o dobro dos valores    (Map)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor, indice, array) {
	acumulador += valor;
	return acumulador;
}); // Valor inicial

// console.log(total);


// Retorne a pessoa mais velha
const pessoas = [
	{ nome: "Pedro", idade: 62 },
	{ nome: "Maria", idade: 23 },
	{ nome: "Eduardo", idade: 55 },
	{ nome: "Letícia", idade: 19 },
	{ nome: "Rosana", idade: 32 },
	{ nome: "Wallace", idade: 470 },
  ];

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor){
	if(acumulador.idade > valor.idade) return acumulador;
	return valor;
})
console.log(pessoaMaisVelha);