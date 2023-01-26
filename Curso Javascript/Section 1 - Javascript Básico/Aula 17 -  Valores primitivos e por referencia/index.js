/*
Primitivos (imutáveis) - String, number, boolean, undefined, null (bigint symbol)

Referência (mutável) - Array, object, function - Passados por referência

(Exemplo de referênciação)
let A = [1 , 2 , 3 , 4];
let b = A; // Tanto A quanto b apontam para o mesmo array armazenado na memória, B não possuí um array próprio.


*/

let nome = 'Pedro';
nome = 'Henrique';
nome[0] = 'P' // não vai mudar porque a String é imutável


let A = [1 , 2 , 3 , 4];
let b = A; // Tanto A quanto b apontam para o mesmo array armazenado na memória, B não possuí um array próprio.

/* 
para deixar que os valores de A sejam realmente copiados por b é só fazer b = [...A] | esse processo se chama spreading  


*/