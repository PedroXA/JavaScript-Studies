// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
	this.nome = nome;
	this.preco = preco;
	this.estoque = estoque;

	Object.defineProperty(this, "estoque", {
		enumerable: true, // Mostra a chave
		configurable: false, // Configurável
        get: function(){
            return estoque;
        },
        set: function(valor){
            estoque = valor;
        }
	});
}

function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    }
}

const p1 = new Produto("Camiseta", 20, 3);
const p2 = criaProduto("Pedra");
console.log(p2);
