// não é necessário o ; nesse tipo de função

function sayHello(nome){
    return `Bom dia ${nome} !`; // retornando o valor para a variável ''valor''
}

const valor = sayHello('Pedro'); // Mandando um argumento para o parametro da minha função
/* console.log(valor) */


function soma(x, y){
    const resultado = x + y;
    return resultado; // return é o ponto final da minha function
}

const resultado = soma(2,2)
console.log(resultado)

/* console.log(soma(5,2)) */


const raiz = function (n){
    return n ** 0.5
}; // esse caso precisa de ; porque começa com a atribuição de uma function para uma variável


const raizArrowFunction = (n) =>{ // isso é Arrow Function, não precisa da palavra Function
    return n ** 0.5
}

/* 
console.log(raizArrowFunction(64))
console.log(raiz(9)) 
*/