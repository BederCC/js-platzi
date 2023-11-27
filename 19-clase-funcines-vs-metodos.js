// Capacidades que tienen las funciones al igual que otros objetos
/*
// 1. Pasar funciones como argumentos --> Callbacks
function a () {}//Se declara una función llamada a que no hace nada (es una función vacía).
function b (a) {}//Se declara una función llamada b que recibe como argumento una función a.
b(a);//Se llama a la función b y se le pasa como argumento la función a.7

// 2. Retornar funciones
function a () {
    function b () {}//Se declara una función b dentro de la función a.
    return b;//Se retorna la función b.
}

// 3. Asignar funciones a variables --> Expresiones de funciones
const a = function () {};

// Tener propiedade y métodos
function a () {};
const obj = {}
a.call(obj);

// anidación de funciones --> Nested functions
function a () {
    function b () {
        function c () {
            console.log('Función c');
        }
        c();
        console.log('Función b');
    }
    b();
    console.log('Función a');
}
a();
*/
// Es posible almacenar funciones en objetos?
const rocket = {
    name: 'Falcon 9',
    launch: function () {
        console.log('Lanzando el cohete ' + this.name + '...');
    }
};

rocket.launch();

//Sí, es posible almacenar funciones en objetos. 
//En el ejemplo anterior, la función launch es una propiedad del objeto rocket.