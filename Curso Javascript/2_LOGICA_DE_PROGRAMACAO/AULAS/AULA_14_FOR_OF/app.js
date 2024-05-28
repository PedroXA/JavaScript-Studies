const meuNome = ["Pedro", "Henrique"]
// For of -> retorna valores
for (const i of meuNome) {
    console.log(i)
}

console.log("**********")

meuNome.forEach(function(valor, indice){
    console.log(valor, indice)
});


// OverView
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)