// yield  -> como se fosse um return
// return -> o return é a parada final da função geradora
function* geradora1(){
    // Código qualquer ...
    yield 'Valor 1';
     // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';
}

function* geradora2(){
    i = 0
    while(true){
        yield i;
        i++
    }
}

g2 = geradora2()

/* RODAR ISSO PODE SER PERIGOSO
for(let valor of g2){
    console.log(g2.next().value);
}
*/



/*
g1 = geradora1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next()); 
*/

/*
Value:
Done: se terminou a sequencia de valores a ser mostrados
*/