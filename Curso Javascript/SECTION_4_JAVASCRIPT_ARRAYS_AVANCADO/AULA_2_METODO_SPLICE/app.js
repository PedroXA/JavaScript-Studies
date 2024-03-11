//                 -5          -4          -3      -2      -1
//                  1           2           3       4       5
const animais = ['Cachorro', 'Periquito', 'Gato', 'Leão', 'Zebra'];

// const animaisRemovidos = animais.splice(-2, 2);
// console.log(animais , animaisRemovidos);

/* 
animais.splice(n, m) 
n -> primeiro elemento no qual eu quero começar (indicando o indice dele)
m -> segundo elemento no qual quer parar.
*/

// Adicionando elementos no lugar de outros elementos
const adicionandoElementos = animais.splice(3,2,'Lebre', 'Papo')
console.log(animais, adicionandoElementos);