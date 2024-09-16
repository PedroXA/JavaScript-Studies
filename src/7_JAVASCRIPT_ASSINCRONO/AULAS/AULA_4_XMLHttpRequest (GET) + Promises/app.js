const request = objeto => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(objeto.method, objeto.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        })
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag == 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    const referencia = el.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: referencia
    }

    try{
        const response = await request(objConfig);
        carregaResultado(response);
    }
    catch(e){
        console.log(e);
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}