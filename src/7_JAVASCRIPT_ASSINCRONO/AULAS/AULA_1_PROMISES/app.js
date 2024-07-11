function rand(min, max) {
  min = min * 1000;
  max = max * 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function answerSomething(message, time) {
  return new Promise((resolve, reject) => {
    if (typeof message !== "string") reject("Wrong value");

    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

answerSomething("Conexão com o BD", rand(1, 3))
  .then((Response) => {
    console.log(Response); // Resultado da Primeira Promisse
    return answerSomething("Buscando dados da base...", rand(1, 3));
  })
  .then((Response) => {
    console.log(Response);
    return answerSomething(22222);
  })
  .then((Response) => {
    console.log(Response);
  })
  .catch((e) => {
    // captando erros
    console.log("Erro:", e);
  });

// console.log("Isso não era para estar aqui...")
