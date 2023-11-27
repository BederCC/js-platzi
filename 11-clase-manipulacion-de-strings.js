const stringPrimitivo = 'Soy un string primitivo';
console.log(typeof stringPrimitivo);

const stringPrimitivoTambien = String('Soy un string primitivo tambien');
console.log(typeof stringPrimitivoTambien);

// String objeto
const stringObjeto = new String('Soy un string objeto');
console.log(typeof stringObjeto);

// Acceder a caracteres
const saludo = 'Hola ¿Como estas?';
console.log(saludo[2]); // Muestra la letra l
console.log(saludo.charAt(2));// Muestra la letra l
console.log(saludo.indexOf('o'));   // Muestra la posicion de la primera letra o
console.log(saludo.indexOf('Como'));  // Muestra la posicion de la primera letra C de Como
console.log(saludo.lastIndexOf('o'));   // Muestra la posicion de la ultima letra o
console.log(saludo.slice(6, 10));   // Muestra la palabra Como
console.log(saludo.length); // Muestra la cantidad de caracteres
console.log(saludo.toLocaleUpperCase()); // Muestra el string en mayusculas
console.log(saludo.toLocaleLowerCase()); // Muestra el string en minusculas

const saludoDividido = saludo.split(' '); // Divide el string en un array
console.log(saludoDividido);
console.log(saludoDividido[1]);

const saludoConEspacios = '   Hola ¿Como estas?   ';
console.log(saludoConEspacios);
const saludoSinEspacios = saludoConEspacios.trim(); // Elimina los espacios en blanco al inicio y al final
console.log(saludoSinEspacios);

const saludoOrional = 'Hola Mundo';
console.log(saludoOrional);
const nuevoSaludo = saludoOrional.replace('Mundo', 'Beder'); // Reemplaza la palabra Mundo por Beder
console.log(nuevoSaludo);
