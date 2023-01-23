// Não são indexados pelo valor mas sim pelo elemento dentro dele
                // 0        1           2
const alunos = ['Pedro', 'Henrique', 'Chagas']; // é possível colocar todos os tipos de valores, funções, boolean (Porém não é recomendado)
/* console.log(alunos) */


/* alunos.unshift('Mamaco', 'Joseph') */ // Adicionando itens no meu array começando do principio 
/* alunos.push('Marcos', 'João', 'Mamaco') */ // Adicionando sem precisar saber o tamanho do meu array (é adicionado ao fim do array)

/* 
alunos[alunos.length] = 'Padre Kelvin';
alunos[alunos.length] = 'Ana';
alunos[alunos.length] = 'Twitch'; 
*/

/*   alunos.pop();   */         // REMOVENDO ITENS DO MEU ARRAY - CHAGAS SENDO REMOVIDO (começa do final)
/*   alunos.shift(); */         // REMOVENDO ITENS DO MEU ARRAY - PEDRO SENDO REMOVIDO (começa do principio)

/*   delete alunos[1] */        // removendo por posição - Porém vai ficar como undefined



/* console.log(alunos.slice(0, 1)); */ // Cortando o meu Array

