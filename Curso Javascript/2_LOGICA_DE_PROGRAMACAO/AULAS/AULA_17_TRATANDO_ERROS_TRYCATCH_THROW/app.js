function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number')
    {
        throw new Error('x ou y precisam ser números'); //LANÇANDO O ERRO
    }
    return x + y;
}

try
{
    console.log(soma('a',2))
}
catch(error) // ERRO LANÇADO PELO THROW
{
    console.log(error)
}


// try
// {
//     console.log(naoExisto)
// } 
// catch(error)
// {
//     console.log('Variável não.')
//     console.log(error)
// }
