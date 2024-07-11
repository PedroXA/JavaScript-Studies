/**
 * Gera um número aleatório entre um intervalo de valores fornecidos.
 * @param {number} min - Valor mínimo do intervalo (em segundos).
 * @param {number} max - Valor máximo do intervalo (em segundos).
 * @returns {number} - Um valor aleatório em milissegundos.
 */
function rand(min, max) {
  // Converte os valores para milissegundos.
  min = min * 1000;
  max = max * 1000;
  // Retorna um número aleatório dentro do intervalo especificado.
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Retorna uma promessa que resolve com uma mensagem após um tempo específico.
 * @param {string} message - Mensagem a ser retornada pela promessa.
 * @param {number} time - Tempo em milissegundos para aguardar antes de resolver a promessa.
 * @returns {Promise<string>} - Uma promessa que resolve com a mensagem fornecida.
 */
function answerSomething(message, time) {
  return new Promise((resolve, reject) => {
    // Verifica se o parâmetro 'message' é uma string.
    if (typeof message !== "string") reject("Wrong value");

    // Aguarda o tempo especificado e então resolve a promessa com a mensagem.
    setTimeout(() => {
      resolve(message);
    }, time);
  });
}

// Inicia a sequência de promessas
answerSomething("Conexão com o BD", rand(1, 3))
  .then((Response) => {
    // Loga o resultado da primeira promessa.
    console.log(Response);
    // Retorna uma nova promessa.
    return answerSomething("Buscando dados da base...", rand(1, 3));
  })
  .then((Response) => {
    // Loga o resultado da segunda promessa.
    console.log(Response);
    // Tenta retornar uma promessa com um valor inválido (não-string).
    return answerSomething(22222);
  })
  .then((Response) => {
    // Este código não será executado porque a promessa anterior foi rejeitada.
    console.log(Response);
  })
  .catch((e) => {
    // Captura e loga erros ocorridos em qualquer uma das promessas anteriores.
    console.log("Erro:", e);
  });
