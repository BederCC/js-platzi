let expr = 'Papaya';

switch (expr) { //=== es estrictamente igual
    case 'Naranja':
        console.log('El kilo de naranjas cuesta $0.59.');
        break;
    case 'Manzana':
        console.log('El kilo de manzanas cuesta $0.32.');
        break;
    case 'Platanos':
        console.log('El kilo de platanos cuesta $0.48.');
        break;
    case 'Mango':
    case 'Papaya':
        console.log('El kilo de mango y papaya cuesta $0.56.');
        break;
    default:
        console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
}

console.log('¿Hay algo más que te quisiera consultar?');