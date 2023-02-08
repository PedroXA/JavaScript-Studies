function calculateFunction(){

    const form = document.querySelector('.form');
    var person = [];
    const log = document.querySelector('.log');
    const stateTypeImc = document.querySelector('.form__stateType');

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

            if(result <= 18.5)
            {
                
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Magresa 🦴</h2>`
            } 
            else if(result > 18.5 && result <= 24.9)
            {
                
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Peso Normal 💪</h2>`
            } 
            else if (result >= 25 && result <= 29.9)
            {
                
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Sobrepeso 🍖</h2>` 
            }
            else if(result >= 30 && result <= 34.9){
                
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Obesidade Grau 1 💊</h2>`
                
            } 
            else if(result >= 35 && result <= 40){
                stateTypeImc.innerHTML = ``
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Obesidade Grau 2 💊💊</h2>`
            }else{
                stateTypeImc.innerHTML = ``
                log.innerHTML += `Olá ${nome}, seu peso é de ${peso} kg com a altura de ${altura}, seu IMC é ${result.toFixed()}`
                stateTypeImc.innerHTML = `<h2>Obesidade Grau 3 🌭</h2>`
            }
        
    }

   

    form.addEventListener('submit', recieveData);
}
calculateFunction();


