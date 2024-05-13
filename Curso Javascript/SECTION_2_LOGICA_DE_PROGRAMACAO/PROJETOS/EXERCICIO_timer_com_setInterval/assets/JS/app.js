let segundos = 0;
let timer;

function formatarHoraTimer(segundos) {
  let data = new Date(0, 0, 0, 0, 0, segundos);

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

function iniciarTimer() {
  timer = setInterval(function () {
    segundos++;
    let horaFormatada = formatarHoraTimer(segundos);
    relogio.innerHTML = horaFormatada.toString();
  }, 1000);
}

function pararTimer() {
  timerParado = setTimeout(function () {
    clearInterval(timer);
  }, 0);
}

function zerarTimer() {
  segundos = 0;
  timer = formatarHoraTimer(0);
  pararTimer();
  relogio.innerHTML = timer.toString();
}

const relogio = document.querySelector(".relogio");
const btnIniciar = document.querySelector(".btn-iniciar");
const btnPausar = document.querySelector(".btn-parar");
const btnResetar = document.querySelector(".btn-limpar");

btnIniciar.addEventListener("click", function (event) {
  clearInterval(timer);
  iniciarTimer();
});

btnPausar.addEventListener("click", function () {
  clearInterval(timer);
  pararTimer();
});

btnResetar.addEventListener("click", function (event) {
  clearInterval(timer);
  zerarTimer();
});
