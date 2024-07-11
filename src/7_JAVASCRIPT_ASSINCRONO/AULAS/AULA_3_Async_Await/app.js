/**
 * Gera um número aleatório entre um intervalo de valores fornecidos (em segundos), 
 * convertendo-os para milissegundos.
 * @param {number} min - Valor mínimo do intervalo (padrão é 3 segundos).
 * @param {number} max - Valor máximo do intervalo (padrão é 5 segundos).
 * @returns {number} - Um valor aleatório em milissegundos.
 */
function rand(min = 3, max = 5) {
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
  
  // Exemplo de utilização de promessas com encadeamento 'then'.
  // answerSomething('Primeira ação', rand())
  //     .then(value => {
  //         console.log(value);
  //         return answerSomething('Segunda ação', rand());
  //     })
  //     .then(value => {
  //         console.log(value);
  //         return answerSomething('Terceira ação', rand());
  //     })
  //     .then(value => {
  //         console.log(value);
  //     })
  //     .catch(e => console.log(e));
  
  /**
   * Função assíncrona para executar uma série de ações utilizando 'await'.
   * Utiliza try/catch para tratar erros.
   */
  async function execute() {
    try {
      // Espera a resolução da primeira promessa.
      const fase1 = await answerSomething("Primeira ação", rand());
      console.log(fase1);
  
      // Tenta esperar a resolução da segunda promessa, que contém um valor inválido.
      const fase2 = await answerSomething(2222, rand());
      console.log(fase2);
  
      // Espera a resolução da terceira promessa.
      const fase3 = await answerSomething("Terceira ação", rand());
      console.log(fase3);
    } catch (e) {
      // Captura e loga erros ocorridos durante a execução das promessas.
      console.log(e);
    }
  }
  
  // Executa a função assíncrona.
  execute();
  
  /**
   * Estados das Promessas:
   * Pending - A promessa está em execução e ainda não foi resolvida nem rejeitada.
   * Resolved - A promessa foi concluída com sucesso e retornou um valor.
   * Rejected - A promessa foi rejeitada devido a um erro ou condição não atendida.
   */
  