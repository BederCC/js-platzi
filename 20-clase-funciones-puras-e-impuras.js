// Funciones puras

//Side effects
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP (AJAX)
// 4. Imprimir mensajes en consola o pantalla
// 5. Manipular DOM
// 6. Obtener fecha y hora

function sum(a, b) { //Función pura
    return a + b;
}

function sum(a, b) { //Función impura
    console.log('A: ',a); //Side effect, imprimir en consola
    return a + b;
};

let total = 0
function sumWithSideEffect(a) { //Función impura
    total += a                  //Side effect, modificar variable global
    return total;
};

function square(x) { //Función pura
    return x * x;
};

function addTen(y){ //Función pura
    return y + 10;
};

const number = 5;
const finalResult = addTen(square(number)); //Función pura
console.log(finalResult); //35