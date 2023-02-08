function calculateFunction(){

    const form = document.querySelector('.form')
    var person = [];
    const painel = document.querySelector('.container')

    function recieveData(event){
        event.preventDefault();
        const nome = form.querySelector('.nome').value;
        let peso = form.querySelector('.peso').value;
        let altura = form.querySelector('.altura').value;

        person.push({
            nome: nome,
            peso: peso,
            altura: altura
        });
        console.log(person)

        let result = peso / (altura * altura);

        painel.innerHTML += `<p>Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()} </p>`
    }

    form.addEventListener('submit', recieveData);
}
calculateFunction();


