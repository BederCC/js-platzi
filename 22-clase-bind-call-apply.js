const owner = 'Beder';
const address = 'Calle siempre viva';

function dogGretting(owner, address) {
    console.log(`Hi, my name is ${this.dogName} and my owner is ${owner} and I live in ${address}`);
}

const newHouse = {
    dogName: 'Scannor'
}

dogGretting.call(newHouse, owner, address); //Hi, my name is Scannor and my owner is Beder and I live in Calle siempre viva

const necessaryValues = [owner, address];
dogGretting.apply(newHouse, necessaryValues); //Hi, my name is Scannor and my owner is Beder and I live in Calle siempre viva

const bindingWithBind = dogGretting.bind(newHouse, owner, address) //Hi, my name is Scannor and my owner is Beder and I live in Calle siempre viva
bindingWithBind();

const caricatura = {
    nombre: 'vaca y pollito'
}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca');//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de vaca
recuerdo.apply(caricatura, ['pollito']);//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito
const recuerdoBind = recuerdo.bind(caricatura, 'pollito');
recuerdoBind();//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito