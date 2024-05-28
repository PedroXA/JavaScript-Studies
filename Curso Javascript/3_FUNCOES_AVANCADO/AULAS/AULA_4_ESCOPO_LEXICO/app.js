// const myName = 'Pedro';

function sayName() {
  //   const myName = 'Pedro';
  console.log(myName);
}

function useSayName() {
  // nada que eu adicionar aqui vai mudar o escopo léxico
  //    const myName = 'Pedro';
  sayName();
}
useSayName();
