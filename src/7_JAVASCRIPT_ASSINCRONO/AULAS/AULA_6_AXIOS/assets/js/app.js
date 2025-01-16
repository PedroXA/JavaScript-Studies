// Faz uma requisição para o arquivo 'pessoas.json' usando Axios
// Em seguida, carrega os elementos na tela chamando a função loadElementsOnScreen
axios('./data/pessoas.json')
    .then(response => loadElementsOnScreen(response.data)); // Passa os dados da resposta para a função

/**
 * Função responsável por criar uma tabela na tela com os dados recebidos
 * @param {Array} json - Array de objetos contendo os dados das pessoas
 */
function loadElementsOnScreen(json) {
    // Cria um elemento de tabela e atribui uma classe de estilo
    const table = document.createElement('table');
    table.className = "table-warning";

    // Itera sobre cada objeto no array JSON
    json.forEach(person => {
        // Cria uma nova linha da tabela para cada pessoa
        const tr = document.createElement('tr');

        // Itera sobre os valores de cada propriedade do objeto pessoa
        Object.values(person).forEach(value => {
            // Cria uma célula da tabela para cada valor
            const td = document.createElement('td');
            td.textContent = value; // Define o texto da célula como o valor atual
            tr.appendChild(td); // Adiciona a célula à linha
        });

        table.appendChild(tr); // Adiciona a linha à tabela
    });

    // Adiciona a tabela completa ao elemento com a classe 'container' no DOM
    document.querySelector('.container').appendChild(table);
}
