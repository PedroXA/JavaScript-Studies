// IIFE -> IMMEADIETELY INVOKED FUNCTION EXPRESSION
(function(/* parametros */){
    // essa função é protegida do escopo global
    const nome = 'Pedro';
    console.log(nome)

    function falaOi(){
        console.log('Oi')
    }

    falaOi();

})( /* Argumentos da função anonima */);

const nome = 'Alguma coisa' // essa função não interfere no escopo da função IIFE