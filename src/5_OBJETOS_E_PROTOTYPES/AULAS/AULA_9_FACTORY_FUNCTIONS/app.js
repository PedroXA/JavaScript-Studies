const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }
}

const bebendo = {
    bebendo(){
        console.log(`${this.nome} está bebendo`);
    }
}

const cozinhando = {
    cozinhando(){
        console.log(`${this.nome} está cozinhando`);
    }
}

const pessoaPrototype = Object.assign({}, falar, bebendo, cozinhando);

function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}