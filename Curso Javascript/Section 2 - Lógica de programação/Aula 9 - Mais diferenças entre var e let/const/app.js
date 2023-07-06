let teste = 'aa';
var teste_2 = 'k';
// NO ESCOPO GLOBAL ELAS FAZEM A MESMA COISA
const verdadeiro = true;

if(verdadeiro){
    let teste = 'ok ok'
    console.log(teste, teste_2)
}

if(verdadeiro){
    /* let teste = 'outra coisa' */
    console.log(teste, teste_2)
}

/*
A VAR DO TIPO 'LET' NÃO PODE SER REDECLARADA AO CONTRÁRIO DO TIPO 'VAR'

 -> O TIPO 'LET' POSSUÍ ESCOPO DE BLOCO { ... } 
 -> VAR SÓ TEM ESCOPO DE FUNÇÃO


*/