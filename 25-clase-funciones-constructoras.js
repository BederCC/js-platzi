const personalizedMessage = () => 'Good bye, see you soon!';

function Rocket (name, ownMessage) {
    this.name = name
    this.launchMessage = () => ownMessage;
}

const falcon9Rocket = new Rocket('Falcon 9', personalizedMessage());
const falconHeavyRocket = new Rocket('Falcon Heavy', 'Successful launch!');
console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

const rocketWithArrowFunction = (name, ownMessage) => ({
    name: name,
    launchMessage: ownMessage
});

const personalizedMessageForArrowFunction = () => 'Successful launch!';
const falcon9Rocket1 = rocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction);

console.group(falcon9Rocket1.name);
console.group(falcon9Rocket1.launchMessage());


//Ejemplo

// Definición de una clase para juegos de PS4
class PS4Game {
    constructor(title, genre, releaseYear, rating) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.rating = rating;
      this.isReleased = false;
    }
  
    release() {
      console.log(`"${this.title}" has been released in ${this.releaseYear}.`);
      this.isReleased = true;
    }
  
    getDetails() {
      return `${this.title} (${this.releaseYear}) - Genre: ${this.genre}, Rating: ${this.rating}`;
    }
  }
  
  // Crear juegos de PS4
  const theLastOfUs2 = new PS4Game('The Last of Us Part II', 'Action-Adventure', 2020, 'Mature');
  const ghostOfTsushima = new PS4Game('Ghost of Tsushima', 'Action-Adventure', 2020, 'Mature');
  
  // Función para imprimir detalles y estado de un juego
  const printGameDetails = (game) => {
    console.log(game.getDetails());
    if (!game.isReleased) {
      console.log(`${game.title} has not been released yet.`);
    }
  };
  
  // Imprimir detalles y estado de los juegos
  printGameDetails(theLastOfUs2);
  printGameDetails(ghostOfTsushima);
  
  // Lanzar los juegos
  theLastOfUs2.release();
  ghostOfTsushima.release();
  
  // Imprimir detalles y estado actualizados
  printGameDetails(theLastOfUs2);
  printGameDetails(ghostOfTsushima);
  