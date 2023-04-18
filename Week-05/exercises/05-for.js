// For
console.log('--EXERCISE 5:\nFOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
//  una alerta utilizando cada una de las palabras.
var myForArray = ['blue','crimson','cian','emerald','light blue'];

for(i = 0; i < myForArray.length; i++){
  alert('-Excercise 5.a: \n' + myForArray[i]);
}

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra
//  modificada.

for(i = 0; i < myForArray.length; i++){
  alert('-Excercise 5.b: \n' +
    myForArray[i].substring(0, 1).toUpperCase() +
    myForArray[i].substring(1, myForArray[i].length)
  );
}

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un
//  bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la
//  cadena completa.

var sentence = '';

for(i = 0; i < myForArray.length; i++){
  sentence += myForArray[i];
}

alert('-Excercise 5.c: \n' + sentence);

// d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es
//  decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0
//  hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var emptyArray = [];

for(i = 0; i < 10; i++){
  emptyArray.push(i);
}

console.log('-Excercise 5.d: \n' + emptyArray);