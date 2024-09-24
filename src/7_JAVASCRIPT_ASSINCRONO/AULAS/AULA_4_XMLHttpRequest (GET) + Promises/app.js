// Função que realiza uma requisição HTTP baseada no objeto de configuração fornecido
const request = objeto => {
    return new Promise((resolve, reject) => {
        // Cria uma nova instância do objeto XMLHttpRequest para fazer a requisição
        const xhr = new XMLHttpRequest();
        
        // Configura a requisição: método (GET, POST, etc.), URL e se será assíncrona (true)
        xhr.open(objeto.method, objeto.url, true);
        
        // Envia a requisição
        xhr.send();
    
        // Adiciona um listener para quando a requisição for concluída
        xhr.addEventListener('load', () => {
            // Verifica se o status da resposta está entre 200 e 299, indicando sucesso
            if(xhr.status >= 200 && xhr.status < 300){
                // Resolve a Promise com o conteúdo da resposta
                resolve(xhr.responseText);
            } else {
                // Rejeita a Promise caso o status não indique sucesso
                reject(xhr.statusText);
            }
        });
    });
}

// Adiciona um listener para o evento de clique em qualquer parte do documento
document.addEventListener('click', e => {
    const el = e.target; // Elemento clicado
    const tag = el.tagName.toLowerCase(); // Tag do elemento em letras minúsculas

    // Verifica se o elemento clicado é uma tag 'a' (link)
    if (tag == 'a'){
        e.preventDefault(); // Evita que o comportamento padrão do link ocorra (navegação)
        carregaPagina(el); // Chama a função para carregar a página do link clicado
    }
});

// Função assíncrona que carrega o conteúdo da página do link clicado
async function carregaPagina(el){
    const referencia = el.getAttribute('href'); // Obtém o valor do atributo href do link
    
    // Objeto de configuração para a requisição
    const objConfig = {
        method: 'GET', // Método GET para buscar a página
        url: referencia // URL do link
    };

    try {
        // Tenta realizar a requisição usando a função request
        const response = await request(objConfig);
        // Se bem-sucedida, carrega o resultado da resposta no HTML
        carregaResultado(response);
    }
    catch(e) {
        // Se ocorrer um erro, imprime no console
        console.log(e);
    }
}

// Função que insere o conteúdo da resposta no elemento com a classe 'resultado'
function carregaResultado(response){
    const resultado = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    resultado.innerHTML = response; // Insere o conteúdo da resposta dentro desse elemento
}
