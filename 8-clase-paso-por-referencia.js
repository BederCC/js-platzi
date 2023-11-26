// Tipo de dato complejo - Paso por referencia

let frutas = {
    naranja: '🍊',
}

let verduras = frutas
verduras.naranja = '🥕'
console.log(frutas);

let ropa = {
    blusa: '👚',
}

ropa.pantalon = '👖'
console.log(ropa);