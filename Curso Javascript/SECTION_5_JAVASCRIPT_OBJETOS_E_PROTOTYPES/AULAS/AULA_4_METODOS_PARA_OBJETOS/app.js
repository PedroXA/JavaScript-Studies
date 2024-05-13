const produto = { nome: "Produto", preco: 1.8 };

// const caneca = {nome: produto.nome, preco: produto.preco};
// const caneca = Object.assign({}, produto);
// const caneca = {...produto};

console.log(Object.values(produto)); // pega o valor das chaves
console.log(Object.entries(produto)); // separa os elementos do objeto em arrays

// Fazendo Destructuring
for (let valor of Object.entries(produto)) {
	console.log(valor[0], valor[1]);
}

Object.assign(/*des,any*/)