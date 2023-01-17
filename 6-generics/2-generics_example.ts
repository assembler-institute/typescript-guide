import { Boat, CargoShip } from './interfaces';
// 👆🏻 we can use a barrel file to export all the interfaces from a folder

// in this example we will use the newGenericArrowFunction() and the Boat and CargoShip interfaces

// let say we have boat that can be a boat and a cargo ship

const titanic = {
  name: 'Titanic',
  year: new Date(),
  port: 'Southampton',
  cargo: 1000,
};

// look what happens when we use the newGenericArrowFunction() with the titanic object
// using the Boat interface, we can't access to the cargo property

const newGenericArrowFunction = <T>(something: T): T => {
  return something;
};
console.log(newGenericArrowFunction<Boat>(titanic).name);
console.log(newGenericArrowFunction<CargoShip>(titanic).cargo);
