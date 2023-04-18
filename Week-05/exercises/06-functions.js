// Functions
console.log('--EXERCISE 6:\nFUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
//  resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function sum(num1, num2){
  var sumPlus = num1 + num2;
  return sumPlus;
}

var add = sum(1, 2);

console.log('-Excercise 6.a: \n' + add);

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros no es un
//  número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y retornar el valor
//  NaN como resultado.

function sum2(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    return NaN;
  }else{
    var sumPlus = num1 + num2;
    return sumPlus;
  };
};

console.log('-Excercise 6.b: \n' + sum2(1, 2));

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es un número
//  entero.

function validateInteger(num1){
  if(Math.round(num1) == num1){
    return true;
  }else{
    return false;
  }
};

console.log('-Excercise 6.c: \n' + validateInteger(1));

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 6c. y que
//  valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar el número
//  convertido a entero (redondeado).

function sum3(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    return NaN;
  }else if(validateInteger(num1) != true || validateInteger(num2) != true){
    alert('Not an integer');
    var sumPlus = num1 + num2;
    return Math.round(sumPlus);
  }else{
    var sumPlus = num1 + num2;
    return sumPlus;
  };
};

console.log('-Excercise 6.d: \n' + sum3(1, 2));

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función probando
//  que todo siga funcionando igual que en el apartado anterior.

function parseIntValidation(num1, num2){
  if(validateInteger(num1) != true || validateInteger(num2) != true){
    alert('Not an integer');
    var sumPlus = num1 + num2;
    return Math.round(sumPlus);
  }else{
    var sumPlus = num1 + num2;
    return sumPlus;
  };
}

function sum4(num1, num2){
  if(isNaN(num1) || isNaN(num2)){
    return NaN;
  }else if(validateInteger(num1) != true || validateInteger(num2) != true){
    return parseIntValidation(num1, num2);
  }else{
    var sumPlus = num1 + num2;
    return sumPlus;
  };
};

console.log('-Excercise 6.e: \n' + sum4(1, 2));