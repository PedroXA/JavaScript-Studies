/* 
&& -> todas precisam ser verdadeiras para retornar True || False && True -> false || não precisa checar mais depois do meu and
|| -> true || false vai retornar o valor verdadeiro
 */

console.log('pedro' && 1 && 'pessoa'); /*  */

/*  
    false -> valor falso literal
    FALSY -> 
    0 
    '' "" ´´ 
    null / undefined 
    NaN 
 */

function sayHello(){
    return 'Hello ! :D'
}

let executeHello = 'Pedrinho';

console.log(executeHello && sayHello()); // curto circuito e será exibido o valor false

console.log(0 || false || null || 'Pedro Henrique' || true) // vai mostrar o primeiro verdadeiro 
let calvinho
const corPadrao = calvinho || 'preto'
console.log(corPadrao)
