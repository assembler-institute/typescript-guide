
// Objects
const batimovil: { bodywork: string, model: string, bulletProof: boolean, passengers: number } = {
  bodywork: "Negra",
  model: "6x6",
  bulletProof: true,
  passengers:4
};

const bumblebee: { bodywork: string, model: string, bulletProof: boolean, passengers: number, shoot: () => void } = {
  bodywork: "Amarillo con negro",
  model: "4x2",
  bulletProof: true,
  passengers:4,
  shoot(){ // the shoot() method is optional
    console.log("Shooting");
  }
};


// The villain variable must be an array of custom objects

type Villians = {
  name: string,
  age?: number,
  mutant: boolean
}

const villains: Villians[] = [{
  name:"Lex Luthor",
  age: 54,
  mutant:false
},{
  name: "Erik Magnus Lehnsherr",
  age: 49,
  mutant: true
},{
  name: "James Logan",
  age: undefined,
  mutant: true
}];

// Multiples types
// Create two types, one for charles and another for apocalipsis

type Stats = {
  power: string,
  heigth: number
}

const charles: Stats = {
  power:"psiquico",
  heigth: 1.78
};

type EndOfTheWorld = {
  leader: boolean,
  members: string[]
}

const apocalipsis = {
  leader:true,
  members: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: ( Stats | EndOfTheWorld );

mystique = charles;
mystique = apocalipsis;
