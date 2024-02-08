// return 
// retorna um valor 
// termina a função

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// }); // a função acima não precisa de um retorno porém ela faz alguma coisa e retorna o que ela promete fazer.



function criarPessoa( nome, sobrenome ){
    return { nome, sobrenome }
}   


const p1 = criarPessoa ('Pedro', 'henrique');

const p2 = {
    nome: 'Pedro',
    sobrenome: 'Henrique'
};

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco  + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo');
console.log(resto);


function criaMultiplicador(multiplicador){
    // multiplicador scope
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2)
console.log(duplica(2));