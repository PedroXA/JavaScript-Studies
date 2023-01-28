const array = [1,2,3];
// é possível alterar valores de um array mesmo sendo const mas só alterando o conteúdo dentro || array.push || array.pop || array[0] = 'Alguma coisa' || a regra é só não reatribuir

const pessoa = { // Objeto: {} || array: []
    nome: [],
    sobrenome: [],
    idade: [] 
}// este é um objeto literal


/* pessoa.nome.push('Pedro','Ricardo','Marcelo', 'Kakw')
console.log(pessoa) 
*/

function criarPessoa(nome, sobrenome, idade){
        return{
            nome,
            sobrenome,
            idade
        };
} // Função factory

const pessoa1 = criarPessoa('Pedro', 'Henrique', 18) // enviando argumentos para o meu parametro da minha função criarPessoa
/* console.log(pessoa1) */


const pessoa2 = { // Objeto: {} || array: []
    nome: 'Pedro',
    sobrenome: 'Henrique',
    idade: 18,
    
    fala(){ // É possível criar funções dentro de objetos
        console.log(`${this.nome} ${this.sobrenome} está falando Oi`);
    },

    incrementalIdade(){
        this.idade++;
    }
}



/* pessoa2.fala(); */