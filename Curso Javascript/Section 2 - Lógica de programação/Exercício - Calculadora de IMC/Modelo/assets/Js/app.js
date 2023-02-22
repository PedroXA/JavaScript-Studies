// se uma function faz mais de uma coisa, é interessante já fazer outra function a parte (Boas práticas)

const form = document.querySelector(".form");
const log = document.querySelector(".log"); // Mensagem com os dados do usuário

const tipo = {
  abaixoPeso: "Abaixo do peso",
  pesoNormal: "Peso normal",
  sobrePeso: "Sobrepeso",
  obesidade1: "Obesidade grau 1",
  obesidade2: "Obesidade grau 2",
  obesidade2: "Obesidade grau 3"
 }

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector(".peso");
  const inputAltura = e.target.querySelector(".altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura invalida", false);
    return;
  }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    setResultado(nivelImc);
    log.innerHTML = `Olá, seu IMC é ${imc}`;
    
});

function getIMC(peso, altura) {
  // Function para calcular o IMC
  const result = peso / (altura * altura);
  return result.toFixed(2);
}

function setResultado(msg){
    const state = document.querySelector(".form__stateType"); 

    state.innerHTML = ''; 

    const p = criaP();

     p.innerHTML = msg;
     state.appendChild(p);
     
     if(msg == tipo[Object.keys(tipo)[0]]){
      p.classList.add('resultado-paragrafo__abaixoPeso');
    } else if(msg == tipo[Object.keys(tipo)[1]]){
      p.classList.add('resultado-paragrafo__pesoNormal');
    }
    else if(msg == tipo[Object.keys(tipo)[2]]){
      p.classList.add('resultado-paragrafo__sobrepeso')
    }
    else{
      p.classList.add('resultado-paragrafo__obesidade')
    }
}

function criaP(){
  const p = document.createElement('p');
  return p;
}

function getNivelImc(imc) {
  // Function para ver qual nível a pessoa está

  if (imc <= 18.5) {
    return tipo[Object.keys(tipo)[0]];
  } else if (imc > 18.5 && imc <= 24.9) {
    return tipo[Object.keys(tipo)[1]];
  } else if (imc >= 25 && imc <= 29.9) {
    return tipo[Object.keys(tipo)[2]];
  } else if (imc >= 30 && imc <= 34.9) {
    return tipo[Object.keys(tipo)[3]];
  } else if (imc >= 35 && imc <= 40) {
    return tipo[Object.keys(tipo)[4]];
  } else {
    return tipo[Object.keys(tipo)[5]];
  }
}

