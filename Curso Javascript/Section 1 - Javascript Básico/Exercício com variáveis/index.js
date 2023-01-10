let varA = 'A'  // B
let varB = 'B'  // C
let varC = 'C'  // A
let varRecipiente = ''

varRecipiente = varA // Valor temporario

varA = varB 
varB = varC
varC = varRecipiente

console.log(varA, varB, varC)