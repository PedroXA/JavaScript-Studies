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
    if (typeof message !== "string") {
      reject("Wrong value");
      return;
    }

    // Aguarda o tempo especificado e então resolve a promessa com a mensagem.
    setTimeout(() => {
      resolve(message + " - Passei na promisse");
    }, time);
  });
}

/**
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */

// Array de promessas que serão usadas nas demonstrações.
const arrayPromises = [
  // Criando três promessas que resolvem com uma mensagem após um tempo aleatório.
  answerSomething("Promise 1", rand(1, 3)),
  answerSomething("Promise 2", rand(1, 3)),
  answerSomething("Promise 3", rand(1, 3)),
];

// Promise.all: Espera que todas as promessas no array sejam resolvidas.
// Se todas resolverem, o array de resultados é passado para o próximo 'then'.
// Se qualquer uma das promessas for rejeitada, o 'catch' é acionado.
Promise.all(arrayPromises)
  .then(function (value) {
    // Loga o array de valores resolvidos.
    console.log(value);
  })
  .catch(function (error) {
    // Loga o erro se qualquer promessa for rejeitada.
    console.log(error);
  });

// Promise.race: Retorna a primeira promessa que for resolvida ou rejeitada.
Promise.race(arrayPromises)
  .then(function (value) {
    // Loga o valor da primeira promessa resolvida.
    console.log(value);
  })
  .catch(function (error) {
    // Loga o erro da primeira promessa rejeitada.
    console.log(error);
  });

/**
 * Função para simular o download de uma página, verificando primeiro se ela está em cache.
 * @returns {Promise<string>} - Uma promessa que resolve com uma mensagem de cache ou de download completo.
 */
function downloadPage() {
  const cached = true; // Simula a existência de uma página em cache.

  if (cached) {
    // Se a página estiver em cache, retorna uma promessa resolvida imediatamente.
    return Promise.resolve("Página em cache");
  } else {
    // Se não estiver em cache, retorna uma promessa que resolve após um tempo aleatório.
    return answerSomething("Download completo da página", rand(1, 5));
  }
}

// Chama a função downloadPage e lida com a promessa retornada.
downloadPage()
  .then((data) => {
    // Loga a mensagem de sucesso.
    console.log(data);
  })
  .catch((e) => {
    // Loga o erro, se ocorrer.
    console.log(e);
  });
