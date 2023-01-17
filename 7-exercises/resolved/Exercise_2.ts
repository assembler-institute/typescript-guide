// Funciones Básicas
function sum( a:number, b:number ): number {
  return a + b;
}

const count = ( heros:string[] ):number => {
  return heros.length;
}
const superHeros: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
count(superHeros);

//Default Params
const callBatman = ( call: boolean = true ):void => {
  if( call ){
    console.log("Batsignal activated");
  }
}

callBatman();

// Rest?
const uniteHeroes = ( ...people:string[] ):string => {
  return people.join(", ");
}


 // Type Function
const doNothing = ( numero:number, texto:string, booleano:boolean, arreglo:string[] )=> {}


// Create the type of function that accepts the "doNothing" function
let doNothingEither: (n:number, t:string, b:boolean, arr:string[]) => void;
doNothingEither = doNothing
