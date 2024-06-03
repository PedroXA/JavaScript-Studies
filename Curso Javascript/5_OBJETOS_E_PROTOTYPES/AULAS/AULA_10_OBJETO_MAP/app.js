const pessoas = [
    {id: 3, nome: 'luiz'},
    {id: 2, nome: 'Helena'},
    {id: 1, nome: 'Javascript'}
]

const pessoasMap = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    pessoasMap.set(id, {...pessoa});
}

// O map continua com a ordem padrão do objeto 
// 


console.log(pessoasMap);