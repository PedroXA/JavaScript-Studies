const array = [1,2,3,4,5,6,7,8,9];
    [a,b,c, ...resto] = array;

    // ... Operador REST ou Spread - Usado para armazenar o resto do array

/* console.log(a,b,c)
console.log(resto)
console.log(array2)
 */

// Array dentro de Array - NÃO RECOMENDADO
const numeros = [
    // 0
    [1,2,3] // -> 0 1 2
    ,
     // 1
    [4,5,6] // -> 0 1 2
    ,
     // 2
    [7,8,9] // -> 0 1 2
];
const [,[,,seis]] = numeros

console.log(numeros[1][2])
console.log(seis)