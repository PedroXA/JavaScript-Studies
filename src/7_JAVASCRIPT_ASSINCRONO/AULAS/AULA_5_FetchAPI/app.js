fetch('index.html')
    .then(response => {
        if(response.status !== 200) throw new Error('Erro 404');
        return response.text();
    })
    .then(html => console.log(html))
.catch(e => console.log(e));


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
    try{
     
    const referencia = el.getAttribute('href'); // Obtém o valor do atributo href do link
    const response = await fetch(referencia);

    if(response.status !== 200) throw new Error('Página não encontrada')
    const html = await response.text();
    carregaResultado(html);   
    }
    catch(e){
        carregaResultado(e);
    }
}

// Função que insere o conteúdo da resposta no elemento com a classe 'resultado'
function carregaResultado(response){
    const resultado = document.querySelector('.resultado'); // Seleciona o elemento com a classe 'resultado'
    resultado.innerHTML = response; // Insere o conteúdo da resposta dentro desse elemento
}