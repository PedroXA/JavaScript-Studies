// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;
	this.estoque = estoque;

	Object.defineProperty(this, "estoque", { // define Property - elemento único
		enumerable: true, 		// Mostra a chave
		value: estoque, 		// Valor da chave
		writable: false, 		// Modificavel
		configurable: false, 	// Configurável
	});

	Object.defineProperties(this, {// Properties - multiplos
		nome: {
			enumerable: true, 		// Mostra a chave
			value: nome, 		// Valor da chave
			writable: false, 		// Modificavel
			configurable: true, 	// Configurável
		},
		preco: {
			enumerable: true, 		// Mostra a chave
			value: estoque, 		// Valor da chave
			writable: true, 		// Modificavel
			configurable: true, 	// Configurável
		},
	});
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 5000000;
console.log(p1);
