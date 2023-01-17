// - what are the differences between abstract classes and interfaces?
// abstract classes can have properties and methods, interfaces can only have properties and methods signatures

// - what are the abstract classes used for?
// abstract classes are used to create a base class that can be extended by other classes

// define an abstract class using the abstract keyword
// you can't create an instance of an abstract class
abstract class Mutant {
  constructor(public name: string, public realName: string) {}
}

// typescript will allow us to create an instance of the class XMEN without calling the constructor of the parent class
class XMEN extends Mutant {
  sayPhrase(): void {
    console.log("I'm a mutant");
  }
}

const magneto = new XMEN('Magneto', 'Magnus');
console.log(magneto);
magneto.sayPhrase();

// we can use the abstract class as a type, and see what properties and methods it has
const printName = (character: Mutant): void => {
  console.log(character.name);
};

printName(magneto);
