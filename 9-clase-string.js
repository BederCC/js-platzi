//Creacion de string
const primeraOption = 'Comillas simples'
const segundaOption = "Comillas dobles"
const terceraOption = `Backtick`

// 1. Concatenacion: opcion +
const direccion = 'Av. Siempre viva 123'
const ciudad = 'Springfield'
const direccionCompleta = 'Mi direccion es: ' + direccion + ' ' + ciudad
console.log(direccionCompleta);

// 2. Concatenacion: Teamplate Literals
const nombre = 'Beder'
const pais = 'Peru'
const presentacion = `Hola mi nombre es ${nombre} y soy de ${pais}`;
console.log(presentacion);

// 3. Concatenacion: join()
const primeraParte = 'Me encanta'
const segundaParte = 'los juegos de'
const terceraParte = 'Ps4'
const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(' '));

// 4. Concatenacion: concat()
const hobbie1 = 'Jugar'
const hobbie2 = 'Leer'
const hobbie3 = 'Programar'
const hobbies = 'Mis hobbies son: '.concat(hobbie1, ', ', hobbie2, ' y ', hobbie3,'.');
console.log(hobbies);

// 5. Caracteres de escape
const whatDoIdo = 'Soy un "programador" de "javascript"';
console.log(whatDoIdo);

// 6. barras invertidas
const barrasInvertidas = 'Soy un \'programador\' de "javascript"';
console.log(barrasInvertidas);

// 7. template literals
const escapeComillasInvertidas = `Soy un 'programador' de 'javascript'`;
console.log(escapeComillasInvertidas);

// Escritura de string Largos

/*Las rosas son rojas,
  Las violetas son azules,
  Caracter inesperado,
  en la linea 32.
*/

const poema = 'Las rosas son rojas,\nLas violetas son azules,\nCaracter inesperado,\nen la linea 32.';
console.log(poema);

const poema2 = 'Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
en la linea 32.';
console.log(poema2);

const poema3 = `Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
en la linea 32.`
console.log(poema3);