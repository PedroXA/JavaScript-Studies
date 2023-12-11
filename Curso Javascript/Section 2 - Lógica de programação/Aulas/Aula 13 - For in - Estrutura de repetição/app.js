const apps = ['Discord', 'Skype', 'TeamSpeak'];

const pessoa = {
    nome: "Pedro",
    sobrenome: "Henrique",
    idade: 19
}
// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// For in -> lê os indices ou chaves dos objetos 
for(let i in apps){
    console.log(i);
}

for(let chaves in pessoa){
    console.log(chaves);
}

for (const chave in pessoa) {
    console.log(chave, pessoa[chave])
}

// for (let i = 0; i < apps.length; i++) {
//     console.log(i);
// }