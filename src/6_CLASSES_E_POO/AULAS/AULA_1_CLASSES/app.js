class Cachorro { // a class sempre deve ter a letra maiuscula na primeira letra
    constructor(nome, raca, peso){
        this.nome = nome;
        this.raca = raca;
        this.peso = peso;
    }

    // Criando metodos para a minha classe cachorro
    latir(){
        console.log(`${this.nome} está latindo.`)
    }

    comer(){
        console.log(`${this.nome} está comendo.`)
    }
}

// criando um cachorro
const cachorro = new Cachorro('Nina', 'Vira-Lata', 32);
cachorro.latir();