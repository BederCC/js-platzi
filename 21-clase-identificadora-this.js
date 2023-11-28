// Enlace implicito --> implicit binding

const house = {
    dogName: 'Sheldon',
    dogGretting: function() {
        console.log(`Hi, my name is ${this.dogName}`);
    }
}
house.dogGretting(); //Hi, my name is Sheldon

// Enlace explicito --> explicit binding
function dogGretting() {
    console.log(`Hi, my name is ${this.dogName}`);
}

const newHouse = {
    dogName: 'Scannor',
}

dogGretting.call(newHouse); //Hi, my name is Scannor

function newDogGretting(owner, address) {
    console.log(`Hi, my name is ${this.dogName} and my owner is ${owner} and I live in ${address}`);
}

const owner = 'Beder';
const address = 'Calle 123';

newDogGretting.call(newHouse, owner, address); //Hi, my name is Scannor and my owner is Beder and I live in Calle 123