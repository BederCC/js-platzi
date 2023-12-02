/*

array.forEach((item) => {
    // código a ejecutar
});

*/

let list = ['eat', 'sleep', 'code', 'repeat'];

list.forEach((item) => {
    console.log(item);
});

// Array de números
let numbers = [1, 2, 3, 4, 5];

// Variables para almacenar la suma y el producto
let sum = 0;
let product = 1;

// Utilizando forEach para calcular la suma y el producto
numbers.forEach((number) => {
  sum += number;
  product *= number;
});

// Imprimir los resultados
console.log('Array: ' + numbers.join(', '));
console.log('Sum: ' + sum);
console.log('Product: ' + product);
