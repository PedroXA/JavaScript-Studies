// Super Classe
function Conta(agencia, saldo, conta){
    this.agencia = agencia;
    this.saldo = saldo;
    this.conta = conta;
}

Conta.prototype.sacar = function(valor){
    if(valor > this.saldo)
        throw new Error("Tente sacar um valor que você tenha");
    
    this.saldo -= valor;
    return this.verSaldo() 
}

Conta.prototype.depositar = function(valor){
    if(valor < 0)
        throw new Error("Forneça um valor válido de deposito");

    this.saldo += valor;
    return this.verSaldo() 
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag.${this.agencia} | Saldo: ${this.saldo}`);
}

// const conta = new Conta("3221", 100, "Corrente");
// conta.depositar(100);
// conta.sacar(200);

function ContaCorrente(agencia, saldo, conta, limite){
    Conta.call(this, agencia, saldo, conta);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite))
        throw new Error("Limite Ultrapassado");
    
    this.saldo -= valor;
    return this.verSaldo() 
}

const CC = new ContaCorrente("3301", 100, "Corrente", 100);
CC.sacar(2000);