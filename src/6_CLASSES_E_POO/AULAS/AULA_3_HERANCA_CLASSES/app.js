// Definindo a classe base Animal.
class Animal {
  /**
   * O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
   * @param {string} nome - O nome do animal.
   * @param {string} especie - A espécie do animal.
   * @param {number} quantidade - A quantidade de animais.
   */
  constructor(nome, especie, quantidade) {
    // Inicializando as propriedades da classe.
    this.nome = nome;
    this.especie = especie;
    this.quantidade = quantidade;
  }

  /**
   * Método para obter informações sobre o animal.
   * @returns {string} - Uma string com informações sobre o animal.
   */
  informacaoAnimal() {
    return `    Nome:       ${this.nome},
    Especie:    ${this.especie},
    Quantidade: ${this.quantidade}`;
  }
}

// Criando uma instância da classe Animal (descomentado para teste).
// const animal = new Animal("Macaco", "símios", 2000);
// console.log(animal.informacaoAnimal());

// Definindo a classe Cachorro que herda de Animal.
class Cachorro extends Animal {
  /**
   * O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
   * @param {string} nome - O nome do cachorro.
   * @param {string} especie - A espécie do cachorro.
   * @param {number} quantidade - A quantidade de cachorros.
   * @param {string} cor - A cor do cachorro.
   */
  constructor(nome, especie, quantidade, cor) {
    // Chama o construtor da classe pai (Animal) com os parâmetros necessários.
    super(nome, especie, quantidade);
    // Inicializando a propriedade específica da classe Cachorro.
    this.cor = cor;
  }

  /**
   * Método para obter informações sobre o cachorro.
   * Sobrescreve o método informacaoAnimal da classe pai.
   * @returns {string} - Uma string com informações sobre o cachorro, incluindo a cor.
   */
  informacaoAnimal() {
    // Chama o método da classe pai e adiciona a informação de cor.
    return `${super.informacaoAnimal()},
    Cor:        ${this.cor}`;
  }
}

// Criando uma instância da classe Cachorro.
const cachorro = new Cachorro("Baunilha", "canídeo", 400, "Preto");

// Logando as informações do cachorro.
console.log(cachorro.informacaoAnimal());
