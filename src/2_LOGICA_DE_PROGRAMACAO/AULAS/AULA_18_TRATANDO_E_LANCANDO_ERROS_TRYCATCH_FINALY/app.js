function retornaHora(data){
    if(!(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hora12: false
    });
}

try{
    // const hora = retornaHora();  
    const hora = new Date; 
    console.log(retornaHora(hora));
}catch(erro){
    // Tratar erro
}finally{
    console.log('Função executada');
}


// try{
//     console.log('Abri um arquivo');
// }
// catch(error){
//     // Executado quando há erros
//     console.log('tratando o erro');
// }
// finally{
//     // Sempre
//     console.log('Finalmente fui executado')
// }