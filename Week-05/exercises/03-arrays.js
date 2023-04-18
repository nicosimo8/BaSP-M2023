// Arrays
console.log('--EXERCISE 3:\nARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
//   "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
var months = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre",
  "Octubre", "Noviembre", "Diciembre"
];

console.log('-Excercise 3.a: \n' + months[5] + ' and ' + months[11]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
months.sort();

console.log('-Excercise 3.b: \n' + months);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
months.unshift('Eneciembre');
months.push('Dicienero');

console.log('-Excercise 3.c: \n' + months[0] + ' and ' + months[(months.length - 1)]);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
months.shift();
months.pop();

console.log('-Excercise 3.d: \n' + months[0] + ' and ' + months[(months.length - 1)]);

// e. Invertir el orden del array (utilizar reverse).
months.reverse();

console.log('-Excercise 3.e: \n' + months);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión
//   - (utilizar join).

console.log('-Excercise 3.f: \n' + months.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var months2 = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre",
  "Octubre", "Noviembre", "Diciembre"
];
var monthsCopy = months2.slice(4, 11);

console.log('-Excercise 3.g: \n' + monthsCopy);