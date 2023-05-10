 const data = new Date();
let nomeDoDia = pegarNomeDia(data.getDay())
let nomeDoMes = pegarNomeMes(data.getMonth() + 1);

function criarH1(){
    const h1 = document.createElement("h1");
    return h1;
}

function pegarNomeDia(data){
    let diaSemanaTexto;
    switch (data) {
        case 0:
            return diaSemanaTexto = 'Domingo';
        case 1:
            return diaSemanaTexto = 'Segunda-Feira';
        case 2:
            return diaSemanaTexto = 'Terça-Feira';
        case 3:
            return diaSemanaTexto = 'Quarta-Feira';
        case 4:
            return diaSemanaTexto = 'Quinta-Feira';
        case 5: 
            return diaSemanaTexto = 'Sexta-Feira';
        case 6:
            return diaSemanaTexto = 'Sábado';
        default:
            break;
    }
}

function pegarNomeMes(numeroDoMes){
    let nomeDoMes;
    switch (numeroDoMes) {
        case 1:
            return nomeDoMes = 'Janeiro';
        case 2:
            return nomeDoMes = 'Fevereiro';
        case 3:
            return nomeDoMes = 'Março';
        case 4:
            return nomeDoMes = 'Abril';
        case 5:
            return nomeDoMes = 'Maio';
        case 6: 
            return nomeDoMes = 'Junho';
        case 7:
            return nomeDoMes = 'Julho';
        case 8:
            return nomeDoMes = 'Agosto';
        case 9:
            return nomeDoMes = 'Setembro';
        case 10:
            return nomeDoMes = 'Outubro';
        case 11:
            return nomeDoMes = 'Novembro';
        case 12:
            return nomeDoMes = 'Dezembro';
        default:
            break;
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(){
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
   
    return `${ano} ${hora}:${minuto}`;
}

function exibirResultado(){
    const output = document.querySelector(".data-container");
    const h1 = criarH1();

    h1.innerHTML = `${nomeDoDia}, ${data.getDay()} de ${nomeDoMes} de ${formataData()}`;
    output.appendChild(h1);
}
exibirResultado(); 

/* const h1 = document.querySelector(".data-container h1");
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHTML = data.toLocaleString('pt-BR', opcoes); */