// Escreva uma função chamada ePaisagem que receba dois argumentos
// largura e altura de uma imagem (number)
// retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura) {
    return largura > altura ? true : false;
}

// const ePaisagem = (largura, altura) => largura > altura ? true : false;

console.log(ePaisagem(1080,720));