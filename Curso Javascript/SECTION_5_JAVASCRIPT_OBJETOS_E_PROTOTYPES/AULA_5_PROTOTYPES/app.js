// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
	return `${this.nome} ${this.sobrenome}`;
};

// instância
// const pessoa1 = new Pessoa("Pedro", "H");
const pessoa2 = new Pessoa("Aline", "O");

const data = new Date();

console.dir(data);
console.dir(pessoa2);
