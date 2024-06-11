// Uma forma diferente de iterar em arrays
// Somente disponível em arrays !

const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 8, 11, 15, 22, 27];
let total = 0;
// for(valor of numeros){
//     console.log(valor);
// }

numeros.forEach(function(valor, indice, array){
    total += valor;
})
console.log(total)
