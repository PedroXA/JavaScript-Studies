const numeros = [1,2,3];

const continuaNumeros = [4,5,6];

// const juntandoNumeros = numeros.concat(continuaNumeros);

// .concat -> metodo para concatenar arrays
// arrayPrincipal.concat(segundoArray, terceiroArray...)


// ... rest -> ... spread outro meio de concatenar array
const juntandoNumeros = [...numeros, ...continuaNumeros, 'Camisa10', ...[12,22,32,42]]
console.log(juntandoNumeros);


