// FUNÇÃO CONSTRUTORA -> OBJETOS -> não precisa de virgula
// FUNÇÃO FABRICA -> OBJETOS
// CONSTRUTORA -> Pessoa (new)

// SEMPRE INICIANDO COM LETRA MAIÚSCULA

function Pessoa(nome, sobrenome){
    // ATRIBUTO PRIVADO 
    const ID = 123; 

    // ATRIBUTOS OU MÉTODOS PUBLICOS
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    }
}

// New -> cria um objeto Vazio
const p = new Pessoa('Pedro', 'Henrique');
p.metodo();
