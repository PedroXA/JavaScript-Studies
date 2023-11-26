// Época Unix - 01/01/1970 Primeira data fornecida pelo metodo date Marco 0 -- Hora 0

/* 
const data = new Date(0);
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000; // o JavaScript trabalha em milisegundos
const UmDia = 60 * 60 * 24 * 1000; // Um dia em milesimos de segundos

 */


// const data = new Date(2019, 3 , 20 ,15 , 14, 27); // 20/Abril/2019 - 15:14:27 | a, m ,d, h, M, s, ms
// console.log('Dia', data.getDate(), 'Mês', data.getMonth(), 'Ano', data.getFullYear());
// console.log(data.toString());


function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());

    return `${dia}/${mes}/${ano}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);