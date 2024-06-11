// new Object -> Object.prototype

const objWesley = {
	role: "Pai",
};

const objPedro = {
	role: "Filho",
};

const objZelia = {
	role: "Mãe",
};

Object.setPrototypeOf(objPedro, objWesley); // O objeto Pedro herda de seu pai, Wesley
Object.setPrototypeOf(objPedro, objZelia);

// =====================================================================================

function Produto(nome, preco) {
	this.nome = nome;
	this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
	this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
	this.preco = this.preco + this.preco * (percentual / 100);
};

const p2 = {
	nome: "Caneca",
	preco: 50,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(50);
console.log(p2);

const p3 = Object.create(Produto.prototype , {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 40
    }
})

p3.aumento(20);
console.log(p3);
