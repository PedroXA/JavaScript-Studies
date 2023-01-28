function cadastrarPessoas() {
    const form = document.querySelector('.form')
    const painel = document.getElementById('painel');
    var pessoa = [];
    

    function recebendoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.name').value;   // só tem um form na minha página, então o .form é o mais apropriado 
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.weight').value;
        const altura = form.querySelector('.altura').value;

        
        /* pessoa.push(
            nome, 
            sobrenome,
            peso,
            altura
        );   MINHA RESOLUÇÃO    || erros: faltando virgulas (tentando manipular o )   */                               

         pessoa.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }); 

        console.log(pessoa);

        /* painel.innerHTML += `${pessoa}`;     || MINHA RESOLUÇÃO  || erros: manipulação das informações foram totalmente erradas   */
        painel.innerHTML += `<p>${nome}  ${sobrenome}  ${peso}  ${altura} <br></p>`;
    }
    
   
    form.addEventListener('submit', recebendoForm);

}
cadastrarPessoas();