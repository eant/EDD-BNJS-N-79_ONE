const readline = require('readline-sync');

const ej1 = function () {

  let aux = 0;

  for (let index = 0; index < 5; index++) {
    let nro = readline.question('ingrese un nro ');
    aux = aux + Number(nro);
  }

  return aux;

}

const ej2 = function () {

  let aux = 0;

  for (let index = 0; index < 5; index++) {
    let nro = Number(readline.question('ingrese un nro '));
    if (nro > aux) {
      aux = nro
    }
    
  }

  return aux;

}

const ej3 = function () {

  let arr = [];

  for (let index = 0; index < 5; index++) {
    let nro = Number(readline.question('ingrese un nro '));
    arr.push(nro)   
  }

  return arr;

}

const ej4 = function () {

  let arr = [];

  while (arr.length < 5) {
    let nro = Math.floor(Math.random() * 10);
    if (!arr.includes(nro)) {
      arr.push(nro); 
    }
  }

  return arr;

}


const ej5 = char => {
  const array = ['a','b','c','d'];

  return array.includes(char)
}

const result1 = ej1();

console.log(result1);

const result2 = ej2();

console.log(result2);

const result3 = ej3();

console.log(result3);

const result4 = ej4();

console.log(result4);

const result5 = ej5('g');

console.log(result5);

