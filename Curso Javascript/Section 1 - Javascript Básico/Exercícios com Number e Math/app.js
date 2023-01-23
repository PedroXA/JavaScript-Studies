const num = Number(prompt("Digite um número: ")); // pode converter o prompt para ser valores numericos
const numeroTittle =  document.getElementById('numero');
const text = document.getElementById('texto');

numeroTittle.innerHTML = num;

text.innerHTML =  ` <p> Raiz quadrada do seu número é: <b> ${Math.sqrt(num)} </b> <br>
                        ${num} é inteiro ? <b>${Number.isInteger(num)}</b> <br>
                        é NaN ? <b>${Number.isNaN(num)}</b> <br>
                        Arredondando ${num} pra baixo: <b>${Math.floor(num)}</b> <br>
                        Arredondando ${num} pra cima: <b>${Math.round(num)}</b> <br>
                        Com duas casas decimais: <b>${num.toFixed(2)}</b>  <br>
</p>`




