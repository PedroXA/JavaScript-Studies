// Produto -> Aumento, desconto
// Camiseta = Cor. Caneca = Material

function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}

Produto.prototype.aumento = function (value) {
	this.preco = this.preco + this.preco * (value / 100);
};

Produto.prototype.desconto = function (value) {
	this.preco = this.preco - this.preco * (value / 100);
};

// =======================================================================================

function Camiseta(nome, preco, cor) {
	Produto.call(this, nome, preco);
	this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);

const camiseta = new Camiseta("T-shirt", 7.5, "Preto");

console.log(camiseta);

// =======================================================================================

function Caneca(nome, preco, material, estoque) {
	Produto.call(this, nome, preco); // This -> Function Produto
	this.material = material;

	Object.defineProperty(this, "estoque", {
		enumerable: true,
		get: function () {
			return estoque;
		},
		set: function (valor) {
			if (typeof valor !== "number") return;
			estoque = valor;
		},
	});
}
Caneca.prototype = Object.create(Produto.prototype); // Herdar os métodos de Produto
Caneca.prototype.constructor = Caneca; // corrigindo a referência do construtor no protótipo da função construtora Caneca

const caneca = new Caneca("Caneca Curuja", 50.55, "Isopor", 99);
console.log(caneca);
