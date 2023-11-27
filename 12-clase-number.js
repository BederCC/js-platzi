// 1. Tipo entero y decimal
const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)

// 2. Notación científica
const cientifico = 2e3

// 3. Infinitos y NaN
const infinito = 'infinity'
const noEsUnNumero = NaN

// Operaciones aritméticas
// 1. Suma, resta, multiplicación y división
const suma = 1 + 2
const resta = 1 - 2
const multiplicacion = 2 * 3
const division = 9 / 3
console.log(suma, resta, multiplicacion, division)


// 2. Modulo y Exponencial
const modulo = 9 % 3
const exponente = 2 ** 3
console.log(modulo, exponente)

// 3. Precision
const numeroUno = 0.1 + 0.2
console.log(numeroUno)
console.log(numeroUno.toFixed(1)) // Redondea a 1 decimal
console.log(numeroUno === 0.3) // false

// 4. Operaciones avanzadas
const raizCuadrada = Math.sqrt(9)
const valorAbsoluto = Math.abs(-9)
const aleatorio = Math.random() // Entre 0 y 1
console.log(raizCuadrada, valorAbsoluto, aleatorio)