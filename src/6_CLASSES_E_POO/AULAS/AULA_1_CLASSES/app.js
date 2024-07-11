// Definindo a classe Cachorro. Nota: Classes em JavaScript têm a primeira letra maiúscula por convenção.
class Cachorro {
    /**
     * O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
     * @param {string} nome - O nome do cachorro.
     * @param {string} raca - A raça do cachorro.
     * @param {number} peso - O peso do cachorro.
     */
    constructor(nome, raca, peso) {
        // Inicializando as propriedades da classe.
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }

    /**
     * Método para fazer o cachorro latir.
     * Exibe uma mensagem no console indicando que o cachorro está latindo.
     */
    latir() {
        console.log(`${this.nome} está latindo.`);
    }

    /**
     * Método para fazer o cachorro comer.
     * Exibe uma mensagem no console indicando que o cachorro está comendo.
     */
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
}

// Criando uma instância da classe Cachorro.
const cachorro = new Cachorro('Nina', 'Vira-Lata', 32);
// Chamando o método latir na instância criada.
cachorro.latir();
