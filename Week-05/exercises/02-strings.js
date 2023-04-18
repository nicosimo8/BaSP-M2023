// Strings
console.log('--EXERCISE 2:\nSTRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
//   toUpperCase).

var strUpper = 'hello world!'

console.log('-Excercise 2.a: \n' + strUpper.toUpperCase());

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5
//   caracteres guardando el resultado en una nueva variable (utilizar substring).

var strHelWor = 'Hello World!'
var strSub = strHelWor.substring(0, 5);

console.log('-Excercise 2.b: \n' + strSub);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//   caracteres guardando el resultado en una nueva variable (utilizar substring).

var strHelloWorld = 'Hello World!';
var strSubLast = strHelloWorld.substring(9, strHelloWorld.length);

console.log('-Excercise 2.c: \n' + strSubLast);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en
//   mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
//   toLowerCase y el operador +).

var strBadHelWor = 'hELLO WORLD!';
var strUpLowPlus =
  strBadHelWor.substring(0, 1).toUpperCase() +
  strBadHelWor.substring(1, strBadHelWor.length).toLowerCase()
;

console.log('-Excercise 2.d: \n' + strUpLowPlus);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
//   primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var strSearch = 'Hello World!';
var strIndex = strSearch.indexOf(' ');

console.log('-Excercise 2.e: \n' + strIndex);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
//   Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//   palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
//   operador +).

var strLarge = 'Supercalafragalistic expialadocious';
var spaceInd = strLarge.indexOf(' ');
var strComplete = 
  strLarge.substring(0,1).toUpperCase() +
  strLarge.substring(1, spaceInd + 1).toLowerCase() +
  strLarge.substring((spaceInd + 1), (spaceInd + 2)).toUpperCase() +
  strLarge.substring((spaceInd + 2), strLarge.length).toLowerCase()
;

console.log('-Excercise 2.f: \n' + strComplete)