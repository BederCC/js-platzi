// Paso por valor
let x = 1
let y = 'Hola'
let z = null

let a = x
let b = y
let c = z

console.log(x, y, z, a, b, c);

a = 12
b = 'platzi'
c = undefined

console.log(x, y, z, a, b, c);

// Paso por referencia
let frutas = ['manzana']
frutas.push('pera')
console.log(frutas);

let panes = ['🥐​', '🥖​', '🥨​']
let copiaDePanes = panes
panes.push('🥯​')
console.log(panes, copiaDePanes);