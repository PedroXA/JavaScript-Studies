function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const max = 1;
const min = 50;
let numeroRandom = 0;

// WHILE
// while (numeroRandom !== 10 ) {
//     numeroRandom = random(min,max);
//     console.log(numeroRandom);
// }


// DO WHILE
// o do while faz primeiro antes de checar diferente do while
// do {
//     numeroRandom = random(min,max);
//     console.log(numeroRandom);
// } while (numeroRandom !== 10);