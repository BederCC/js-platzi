// Create PowerpuffGirl object
function PowerpuffGirl(name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;
    this.achievements = [];
    this.enemies = [];

    this.displayInfo = function () {
        console.log(`Powerpuff Girl Information: \n
        Name: ${this.name}\n
        Color: ${this.color}\n
        Superpower: ${this.superpower}\n
        ${this.isLeader ? 'Is the leader' : 'Is not the leader'}
        \nAchievements: ${this.achievements.join(', ')}
        \nEnemies: ${this.enemies.join(', ')}
        `);
    }

    this.becomeLeader = function () {
        this.isLeader = true;
        this.achievements.push('Became the leader');
        console.log(`${this.name} is the leader now!`);
    }

    this.addAchievement = function (achievement) {
        this.achievements.push(achievement);
        console.log(`${this.name} achieved: ${achievement}`);
    }

    this.addEnemy = function (enemy) {
        this.enemies.push(enemy);
        console.log(`${this.name} has a new enemy: ${enemy}`);
    }

    this.fly = function () {
        if (this.superpower.toLowerCase().includes('flight')) {
            console.log(`${this.name} is flying high in the sky!`);
        } else {
            console.log(`${this.name} cannot fly.`);
        }
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Supersonic flight');

// Additional features
blossom.addAchievement('Saved the Townsville');
buttercup.addAchievement('Defeated Mojo Jojo');
bubbles.addEnemy('HIM');

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

blossom.becomeLeader();
blossom.addAchievement('Mastered the Ice Breath');
buttercup.addEnemy('Fuzzy Lumpkins');
bubbles.fly();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();
