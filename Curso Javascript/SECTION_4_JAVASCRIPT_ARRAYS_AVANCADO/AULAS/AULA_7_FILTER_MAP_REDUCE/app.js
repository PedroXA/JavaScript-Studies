// Retorne a soma do dobro de todos os pares
// -> FIltrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 15, 22, 27];
const numerosPares = numeros
	.filter(function (valor) {
		return valor % 2 == 0;
	})
	.map(function (valor) {
		return valor * 2;
	})
	.reduce(function (ac, valor) {
		return ac + valor;
	});

// Resultado Numeros pares: [50,80,2,4,6,8,22]

// Numeros pares dobrados: [100,160,4,8,12,16,44]

// Soma total: 344

console.log(numerosPares);
