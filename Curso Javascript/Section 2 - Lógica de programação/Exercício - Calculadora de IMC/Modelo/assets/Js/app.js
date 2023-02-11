// se uma function faz mais de uma coisa, é interessante já fazer outra function a parte (Boas práticas)

const form = document.querySelector(".form");
const log = document.querySelector(".log"); // Mensagem com os dados do usuário
const state = document.querySelector(".form__stateType");const state = document.querySelector(".form__stateType");

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

    log.innerHTML = `Olá, seu IMC é ${imc.toFixed()}`;
    state.innerHTML = nivelImc;
});

function getIMC(peso, altura) {
  // Function para calcular o IMC
  const result = peso / (altura * altura);
  return result.toFixed(2);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    /* const state = document.querySelector(".form__stateType"); */
    state.innerHTML = '';

    const p = criaP();
}

function getNivelImc(imc) {
  // Function para ver qual nível a pessoa está
  const type = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc <= 18.5) {
    return type[0];
  } else if (imc > 18.5 && imc <= 24.9) {
    return type[1];
  } else if (imc >= 25 && imc <= 29.9) {
    return type[2];
  } else if (imc >= 30 && imc <= 34.9) {
    return type[3];
  } else if (imc >= 35 && imc <= 40) {
    return type[4];
  } else {
    return type[5];
  }
}








/* if(result <= 18.5)
{
    
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Magresa 🦴</h2>`
} 
else if(result > 18.5 && result <= 24.9)
{
    
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Peso Normal 💪</h2>`
} 
else if (result >= 25 && result <= 29.9)
{
    
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Sobrepeso 🍖</h2>` 
}
else if(result >= 30 && result <= 34.9){
    
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Obesidade Grau 1 💊</h2>`
    
} 
else if(result >= 35 && result <= 40){
    stateTypeImc.innerHTML = ``
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Obesidade Grau 2 💊💊</h2>`
}else{
    stateTypeImc.innerHTML = ``
    log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
    stateTypeImc.innerHTML = `<h2>Obesidade Grau 3 💊💊💊</h2>`
}
} */
/*     calculateFunction(); */
/* form.addEventListener('submit', recieveData); */
