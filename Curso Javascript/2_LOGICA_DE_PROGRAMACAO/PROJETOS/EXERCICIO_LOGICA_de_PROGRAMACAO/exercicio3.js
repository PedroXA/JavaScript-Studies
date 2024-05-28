//  Escreva uma função que receba um número e retorne o seguinte:
//  Número é divisível por 3 = Fizz                             OK
//  Número é divisível por 5 = Buzz                             OK
//  Número é divisível por 3 e 5 = FizzBuzz                     OK
//  Número NÃO divisível por 3 e 5 = retorna o próprio número   OK
//  Checar se o número é realmente um número = retorna o próprio numero
//  Usar somente números de 0 a 100                             OK

function fizzBuzz(x) {
  if (x > 100 || x < 0)
    return console.log("Passe um valor maior que 0 e menor que 100");

  return Math.floor(x % 3) == 0 && Math.floor(x % 5) == 0
    ? "FizzBuzz"
    : Math.floor(x % 5) == 0
    ? "Buzz"
    : Math.floor(x % 3) == 0
    ? "Fizz"
    : x;
}

for (let i = 0; i < 101; i++) {
  console.log(i, fizzBuzz(i));
}
