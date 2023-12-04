/*

for in --> objetos

propiedades = valor

array, string

item

for (variable){
    // código a ejecutar
}

*/

const listaDeCompras = {
    'manzanas': 1,
    'peras': 2,
    'naranjas': 3,
    'uvas': 4
};

for(fruta in listaDeCompras) {
    console.log(fruta);
}

for(fruta in listaDeCompras) {
    console.log(`${fruta}: ${listaDeCompras[fruta]}`);
}

for(fruta of listaDeCompras) {
    console.log(fruta);// error
}
