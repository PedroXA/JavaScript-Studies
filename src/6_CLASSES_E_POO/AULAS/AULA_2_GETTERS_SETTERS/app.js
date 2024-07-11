// Criando um símbolo para um atributo pseudo-privado.
const _tamanho = Symbol("tamanho");

// Definindo a classe Planeta.
class Planeta {
  // #nome;      // Atributo privado (disponível a partir do ES2022)
  // #tamanho;   // Atributo privado (disponível a partir do ES2022)

  /**
   * O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
   * @param {string} nome - O nome do planeta.
   * @param {number} tamanho - O tamanho do planeta em metros.
   */
  constructor(nome, tamanho) {
    // Inicializando as propriedades da classe.
    this.nome = nome;
    this[_tamanho] = tamanho; // Usando o símbolo para criar um atributo pseudo-privado.
  }

  /**
   * Getter para acessar o tamanho do planeta.
   * @returns {number} - O tamanho do planeta.
   */
  get tamanho() {
    return this[_tamanho];
  }

  /**
   * Setter para modificar o tamanho do planeta.
   * @param {number} novoTamanho - O novo tamanho do planeta.
   */
  set tamanho(novoTamanho) {
    // Verifica se o novo tamanho é maior que zero.
    if (novoTamanho <= 0) return;
    // Define o novo tamanho do planeta.
    return (this[_tamanho] = novoTamanho);
  }

  /**
   * Método para obter informações sobre o planeta.
   * @returns {string} - Uma string com informações sobre o planeta.
   */
  informacaoPlaneta() {
    return `${this.nome} tem o tamanho de ${this.tamanho} metros!`;
  }
}

// Criando uma instância da classe Planeta.
const planeta = new Planeta("Pluto", 255);

// Tentando definir um valor inválido para o tamanho.
planeta.tamanho = -1;

// Logando o tamanho atual do planeta (deve ser 255, já que -1 é inválido).
console.log(planeta.tamanho);
