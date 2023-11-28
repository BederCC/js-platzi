// Create PowerpuffGirl object
function PowerpuffGirl(name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;

    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information: \n
        Name: ${this.name}\n
        Color: ${this.color}\n
        Superpower: ${this.superpower}
        ${this.isLeader ? 'Is the leader' : 'Is not the leader'}
        `);
    }

    this.bacomeLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} is the leader now!`);
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Supersonic flight');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.bacomeLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
