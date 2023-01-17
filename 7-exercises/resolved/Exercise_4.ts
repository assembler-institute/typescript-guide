// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelerar():void;
}

const conducirBatimovil = ( auto: Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

interface Batimovil extends Auto {
  encender:boolean;
  velocidadMaxima:number;
  acelerar():void;
}

const batimovil: Batimovil = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}



const reir = ( guason: Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
  (ciudadanos:string[]): number
}

const ciudadGotica = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface HumanInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio():void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Human implements HumanInterface {
  public nombre: string = 'Harry Potter';
  public edad: number = 28;
  public sexo: string = 'male';
  public estadoCivil: string = 'single';
  imprimirBio():void {
    console.log('lol');
    
  }
}