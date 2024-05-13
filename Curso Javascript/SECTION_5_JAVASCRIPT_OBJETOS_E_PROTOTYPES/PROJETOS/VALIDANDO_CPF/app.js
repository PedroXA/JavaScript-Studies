/*
(INPUT)
705.484.450-52      070.987.720-03

(CALCULO DE VALIDAÇÃO) - POR CARACTERE

7X  0X  5X  4X  8X  4X  4X  5X  0X  
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0   =   237

11 - (237 % 11) = 5 (Primeiro Digito) dos dois últimos
-- Se o número do digito for maior que 9, consideramos 0

7X  0X  5X  4X  8X  4X  4X  5X  0X  5X  
11  10  9   8   7   6   5   4   3   2
77  0   45  32  56  24  20  20  0   10  =   284

11 - (284 % 11) = 2 (Segundo Digito)
-- Se o número do digito for maior que 9, consideramos 0

*/

// Deixar o cpf só em números
// converter para Number

let cpfInput = '705.484.450-52';
let simplifiedCpf = cpfInput.reduce()