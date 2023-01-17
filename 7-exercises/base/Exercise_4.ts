// // Crear interfaces

// // Cree una interfaz para validar el auto (el valor enviado por parametro)
// const conducirBatimovil = ( auto ):void => {
//   auto.encender = true;
//   auto.velocidadMaxima = 100;
//   auto.acelerar();
// }

// const batimovil = {
//   encender:false,
//   velocidadMaxima:0,
//   acelerar(){
//     console.log("...... gogogo!!!");
//   }
// }

// // Cree una interfaz con que permita utilzar el siguiente objeto
// // utilizando propiedades opcionales

// const guason = {
//   reir: true,
//   comer:true,
//   llorar:false
// }

// const reir = ( guason ):void => {
//   if( guason.reir ){
//     console.log("JAJAJAJA");
//   }
// }


// // Cree una interfaz para la siguiente funcion

// const ciudadGotica = ( ciudadanos:string[] ):number => {
//   return ciudadanos.length;
// }

// // Cree una interfaz que obligue crear una clase
// // con las siguientes propiedades y metodos

// /*
//   propiedades:
//     - nombre
//     - edad
//     - sexo
//     - estadoCivil
//     - imprimirBio(): void // en consola una breve descripcion.
// */
// class Persona {}