const pessoa = {
	// Corpo do objeto
	// Chave o local onde vou conseguir acessar o valor no objeto
	nome: "Pedro",
	sobrenome: "Henrique",
	idade: 20,
};

pessoa.getAnoNascimento = function () {
	const dataAtual = new Date();
	return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa.getAnoNascimento());
console.log(pessoa.nome); // anotação de .
console.log(pessoa["sobrenome"]); // anotação de []

// new Array(); []

// **********************************************************

const cachorro = new Object();
cachorro.nome = "Nina";
cachorro.peso = 10;

// console.log(cachorro.nome);
// console.log(cachorro.peso);

// Métodos são funções dentro do objeto que desempenham funções

// **********************************************************

function criaPessoa(nome, sobrenome) {
	return {
		nome,
		sobrenome,
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},
	};
}

// new -> cria um objeto vazio
//

const p1 = criaPessoa("Pedro", "Henrique");
console.log(p1);

// **********************************************************

// Factory Functions
function Animal(raca, peso) {
	this.raca = raca;
	this.peso = peso;
}

const animalObject = new Animal("raça 1", 21);
console.log(animalObject);