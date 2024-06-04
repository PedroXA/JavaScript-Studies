const _tamanho = Symbol("tamanho"); // atributo pseudo-privado
class Planeta {
  // #nome;      // Atributos privado
  // #tamanho;   // Atributo privado

  constructor(nome, tamanho) {
    this.nome = nome;
    this[_tamanho] = tamanho;
  }

  get tamanho() {
    return this[_tamanho];
  }

  set tamanho(novoTamanho) {
    if(novoTamanho <= 0) return;
    return (this[_tamanho] = novoTamanho);
  }

  informacaoPlaneta() {
    return `${this.nome} tem o tamanho de ${this.tamanho} metros !`;
  }
}
// sem o Get o pseudo-privado não funciona

const planeta = new Planeta("Pluto", 255);
planeta.tamanho = -1;
console.log(planeta.tamanho);
