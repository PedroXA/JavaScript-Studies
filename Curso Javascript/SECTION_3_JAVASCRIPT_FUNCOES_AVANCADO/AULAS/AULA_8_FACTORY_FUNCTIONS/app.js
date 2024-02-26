// Factory Functions
// Quando uma função está dentro de um objeto ele se chama método

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(conteudo){
            conteudo = conteudo.split(' '); // vetoriando o valor recebido
            nome = conteudo.shift(); // tirando o meu 
            sobrenome = conteudo.join(' ');
        },

        fala: function(){
            return `${this.nome} ${sobrenome}`
        },

        altura: altura,
        peso: peso,

    // Getter
       get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        }
    };
}
// o this sempre vai ser refenciado pelo objeto que está chamando o método
const p1 = criaPessoa('Pedro', 'Henrique', 192, 101);
p1.nomeCompleto = 'Pedro Dos Reis';
console.log(p1.fala())