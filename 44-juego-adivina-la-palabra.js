/* juguemos a adivinar la palabra

El usuario tiene 3 intentos para adivinar la palabra

Requerimientos:
- El juego debe tener una palabra oculta.
- El juego debe dar 1 pista de la palabra oculta.
- El usuario debe ingresar una suposicion.
- El juego debe verificar si la suposicion es correcta.
- El juego debe tener un numero de intentos.
- El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos.

*/

let palabraOculta = 'javascript';
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
    if (suposicion.toLowerCase() === palabraOculta) {
        return true;
    } else {
        return false;
    }
}

function jugarAdivinaLaPalabra() {
    alert('Bienvenido a adivina la palabra');
    alert('Tienes 3 intentos para adivinar la palabra');
    alert('La palabra es un lenguaje de programación');

    while(intentos > 0){
        let suposicion = prompt('Adivina la palabra');

        if (verificarSuposicion(suposicion, palabraOculta)) {
            alert('Felicidades, adivinaste la palabra');
            break;
        } else {
            intentos--;
            if (intentos > 0) {
                alert(`Fallaste, te quedan ${intentos} intentos`);
            }else{
                alert(`Fallaste, se te acabaron los intentos, la palabra era ${palabraOculta}`);
            }
        }
    }
}

jugarAdivinaLaPalabra();