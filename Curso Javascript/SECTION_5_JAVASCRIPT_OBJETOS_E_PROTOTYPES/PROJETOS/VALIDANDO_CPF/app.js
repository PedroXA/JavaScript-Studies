/*
(INPUT)
705.484.450-52      070.987.720-03

(CALCULO DE VALIDAÇÃO) - POR CARACTERE

7X  0X  5X  4X  8X  4X  4X  5X  0X  
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0   =   237

11 - (237 % 11) = 5 (Primeiro Digito) dos dois últimos
-- Se o número do digito for maior que 9, consideramos 0

7X  0X  5X  4X  8X  4X  4X  5X  0X  5X  
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  =   284

11 - (284 % 11) = 2 (Segundo Digito)
-- Se o número do digito for maior que 9, consideramos 0

*/
// ================================================================================================================

// ================================================================================================================

// let cpfInput = "161.558.716-04";
// let simplifiedCpf = cpfInput.replace(/\D+/g, ""); // Formatando o CPF (Tirando a pontuação) 70548445052
// let cpfArray = Array.from(simplifiedCpf);
// let cpfArrayFirstDigit = [...cpfArray];
// let aux = 10;

// // Primeiro calculo para achar o primeiro digito final
// for (let index = 0; index < 9; index++) {
// 	cpfArrayFirstDigit[index] = Number(cpfArray[index]) * aux;
// 	aux--;
// }
// cpfArrayFirstDigit = cpfArrayFirstDigit.slice(0, -2);

// // Somando cada posição do meu array
// let firstDigitSum = cpfArrayFirstDigit.reduce(function (ac, value) {
// 	ac += value;
// 	return ac;
// });

// let firstDigitResult = 11 - (firstDigitSum % 11);
// if (firstDigitResult > 9) firstDigitResult = 0;

// cpfArray = cpfArray.slice(0, -2);
// // Adicionando o output do primeiro numero
// cpfArray.push(firstDigitResult);

// let cpfArraySecondDigit = [...cpfArray];
// aux = 11;

// for (let index = 0; index < 10; index++) {
// 	cpfArraySecondDigit[index] = Number(cpfArray[index]) * aux;
// 	aux--;
// }

// // Somando cada posição do meu array
// let secondDigitSum = cpfArraySecondDigit.reduce(function (ac, value) {
// 	ac += value;
// 	return ac;
// });

// let secondDigitResult = 11 - (secondDigitSum % 11);
// if (secondDigitResult > 9) secondDigitResult = 0;

// cpfArray.push(secondDigitResult);
// let cpfString = "";
// cpfArray.forEach((digits) => {
// 	cpfString = cpfString.concat(digits);
// });

// if (cpfString == simplifiedCpf) {
// 	console.log("CPF válido");
// } else {
// 	console.log("CPF inválido");
// }
// ================================================================================================================

function ValidaCPF(cpf) {
	Object.defineProperty(this, "cpf", {
		enumerable: true,
		get: function () {
			return cpf.replace(/\D+/g, "");
		},
	});
}

ValidaCPF.prototype.completeCpf = function () {
	const cpfArray = this.firstLastArray();

	// Calcula os números multiplicados para o primeiro dígito verificador
	const numerosCalculadosPrimeiroDigito = this.multiplyArray(cpfArray, 10); // output 5
	cpfArray.push(numerosCalculadosPrimeiroDigito);

	// Calcula os números multiplicados para o segundo dígito verificador
	const numerosCalculadosSegundoDigito = this.multiplyArray(cpfArray, 11); // output 2
	cpfArray.push(numerosCalculadosSegundoDigito);

	const fullArray = this.agroupArray(cpfArray);
    const result = this.arrayIsValid(fullArray);
	const cpfInicial = this.cpf;

	return { fullArray , cpfInicial};
};

ValidaCPF.prototype.arrayIsValid = function (array) {
	const arrayInicial = this.cpf;
	const arrayFinal = array;

	if (arrayInicial === arrayFinal) {
		 console.log("CPF válido");
	} else {
		 console.log("CPF inválido");
	}
};

ValidaCPF.prototype.agroupArray = function (array) {
	let cpfString = "";
	array.forEach((digits) => {
		cpfString = cpfString.concat(digits);
	});
	return cpfString;
};

ValidaCPF.prototype.firstLastArray = function () {
	const cpfLimpo = this.unBindLastNumbers(); // Pegando o CPF sem máscara
	return Array.from(cpfLimpo); // Transformando string em array
};

ValidaCPF.prototype.checkIfHigherThanNine = function (arraySomado) {
	// Number or 0
	let DigitResult = 11 - (arraySomado % 11);
	if (DigitResult > 9) DigitResult = 0;
	return DigitResult;
};

ValidaCPF.prototype.multiplyArray = function (array, aux) {
	const numerosCalculados = array.map((valor) => {
		valor *= aux;
		aux--;
		return valor;
	});

	return this.sumArray(numerosCalculados); // mandando o array multiplicado para a soma
};

ValidaCPF.prototype.sumArray = function (array) {
	const arraySomado = array.reduce((acumulador, valor) => {
		acumulador += valor;
		return acumulador;
	});
	return this.checkIfHigherThanNine(arraySomado);
};

ValidaCPF.prototype.unBindLastNumbers = function () {
	let cpf = this.cpf.slice(0, -2);
	return cpf;
};

const cpfInput = new ValidaCPF("150.439.062-00");
console.log(cpfInput.completeCpf());
