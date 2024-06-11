class Animal {
  constructor(nome, especie, quantidade) {
    this.nome = nome;
    this.especie = especie;
    this.quantidade = quantidade;
  }

  informacaoAnimal() {
    return `    Nome:       ${this.nome},
    Especie:    ${this.especie},
    Quantidade: ${this.quantidade}`;
  }
}

// const animal = new Animal("Macaco", "símios", 2000);
// console.log(animal.informacaoAnimal());

class Cachorro extends Animal {
  constructor(nome, especie, quantidade, cor) {
    super(nome, especie, quantidade);
    this.cor = cor;
  }

  informacaoAnimal() { // Herdando o método da classe animal para a filha
    return `${super.informacaoAnimal()},
    Cor:        ${this.cor}`;
  }
}

const cachorro = new Cachorro("Baunilha", "canídeo", 400, "Preto");
console.log(cachorro.informacaoAnimal());