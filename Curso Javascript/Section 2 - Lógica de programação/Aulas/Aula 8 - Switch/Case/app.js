function mostrarDiaSemana(diaSemanaNumero){
    switch (diaSemanaNumero) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
    
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        
        case 2: 
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
    
        case 3: 
            diaSemanaTexto = 'Quarta';
            break;
    
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
    
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
    
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
    
        default:
            break;
    }
    return diaSemanaTexto;
}



const data = new Date(2019 , 3 , 25);
console.log(mostrarDiaSemana(data.getDay()), data.getDay());