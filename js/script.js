const zucchine = [
  {
    varietà: 'zucchina rossa',
    pesoKg: 2.2,
    lunghezzaCm: 20,
  },
  {
    varietà: 'zucchina gialla',
    pesoKg: 3.3,
    lunghezzaCm: 21,
  },
  {
    varietà: 'zucchina verde',
    pesoKg: 4.1,
    lunghezzaCm: 14,
  },
  {
    varietà: 'zucchina viola',
    pesoKg: 2.7,
    lunghezzaCm: 16,
  },
  {
    varietà: 'zucchina rosa',
    pesoKg: 5.2,
    lunghezzaCm: 7,
  },
  {
    varietà: 'zucchina arancione',
    pesoKg: 2.9,
    lunghezzaCm: 12,
  },
  {
    varietà: 'zucchina bianca',
    pesoKg: 1.7,
    lunghezzaCm: 31,
  },
  {
    varietà: 'zucchina nera',
    pesoKg: 1.8,
    lunghezzaCm: 11,
  },
  {
    varietà: 'zucchina grigia',
    pesoKg: 8.3,
    lunghezzaCm: 4,
  },
  {
    varietà: 'zucchina marrone',
    pesoKg: 3.5,
    lunghezzaCm: 16,
  }
]

// console.log(zucchine);
let pesoTot = 0;
for(i in zucchine) {
  // console.log(zucchine[i].pesoKg);
  pesoTot += zucchine[i].pesoKg;
}
// console.log(pesoTot);

const zucchineGrandi = [];
const zucchinePiccole = [];

for (i in zucchine) {
  if (zucchine[i].lunghezzaCm>=15) zucchineGrandi.push(zucchine[i]);
  else zucchinePiccole.push(zucchine[i]);
}

console.log(zucchineGrandi);
console.log(zucchinePiccole);

let pesoTotGrandi = 0;
let pesoTotPiccole = 0;

for(i in zucchineGrandi) {
  // console.log(zucchine[i].pesoKg);
  pesoTotGrandi += zucchineGrandi[i].pesoKg;
  console.log(pesoTotGrandi);
}

for(i in zucchinePiccole) {
  // console.log(zucchine[i].pesoKg);
  pesoTotPiccole += zucchinePiccole[i].pesoKg;
  console.log(pesoTotPiccole);

}

console.log(pesoTotGrandi);
console.log(pesoTotPiccole);

function invert(string) {
  let inverted = [];
  for (i=string.length-1; i>=0; i--) {
    // console.log(string[i]);
    inverted.push(string[i]);
  }
  return inverted.join('');
}

console.log(invert('ciao'));

const biciclette = [
  {
      nome: 'mountainbike',
      Pesokg: 14
  },
  {
      nome: 'trailbike',
      Pesokg: 28
  },
  {
      nome: 'streetbike',
      Pesokg: 7
  },
  {
      nome: 'racebike',
      Pesokg: 13
  }
]; 

let peso = biciclette[0].Pesokg;

let biciPiuLeggera = {};

for(let bici of biciclette){
  const {Pesokg} = bici;
  // console.log(kg);


  if(peso > bici.Pesokg){
      peso = bici.Pesokg;
      biciPiuLeggera = bici
  }

}

printBike(biciPiuLeggera);

// console.log('Peso minore', peso)

function printBike(bike){
  const {nome, Pesokg} = bike;
  console.log(nome);
  console.log(Pesokg);
  document.querySelector('body').innerHTML = `<h1>La bici col peso minore é ${nome} con un peso di ${Pesokg}!</h1>`;
}

