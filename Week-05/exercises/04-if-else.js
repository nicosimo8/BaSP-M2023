// If Else
console.log('--EXERCISE 4:\nIF ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5
//  mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var randomNum = Math.random();

if (randomNum >= 0.5){
  alert('-Excercise 4.a: \nGreater than of equal to 0,5');
}else{
  alert('-Excercise 4.a: \nLower than 0,5');
};

// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// i.   “Bebe” si la edad es menor a 2 años;
// ii.  “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv.  “Joven” entre 20 y 30 años;
// v.   “Adulto” entre 31 y 60 años;
// vi.  “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.

var age = Math.floor(Math.random() * 101);

if(age < 2){
  alert('-Excercise 4.b: \nBaby');
}else if(age >= 2 && age <= 12){
  alert('-Excercise 4.b: \nChild');
}else if(age >= 13 && age <= 19){
  alert('-Excercise 4.b: \nTeenager');
}else if(age >= 20 && age <= 30){
  alert('-Excercise 4.b: \nYoung');
}else if(age >= 31 && age <= 60){
  alert('-Excercise 4.b: \nAdult');
}else if(age >= 61 && age <= 75){
  alert('-Excercise 4.b: \nOlder adult');
}else{
  alert('-Excercise 4.b: \nOld');
};