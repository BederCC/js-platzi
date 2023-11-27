// Explicit Type Casting

const string = "1000";
const integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

const stringDecimal = "10.50";
const float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

const binary = "1011";
const decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting
const suma = 10 + "10";
console.log(suma);

const sumWithBoolean = '3' + true;
console.log(sumWithBoolean);

const sumWithNumber = 3 + true;
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 20;
const booleanValue = true;

console.log('v-----------------------v');
console.log(stringValue + stringValue);//concatena
console.log(stringValue + numberValue);//concatena
console.log(stringValue + booleanValue);//concatena
console.log('v-----------------------v');
console.log(numberValue + booleanValue);//suma
console.log(numberValue + numberValue);//suma
console.log(numberValue + stringValue);//concatena
console.log('v-----------------------v');
console.log(booleanValue + booleanValue);//suma
console.log(booleanValue + numberValue);//suma
console.log(booleanValue + stringValue);//concatena

const numero = '596';
const numeroConvertido = parseInt(numero);

console.log(typeof numero);// es de tipo string
console.log(typeof numeroConvertido);// es de tipo number
