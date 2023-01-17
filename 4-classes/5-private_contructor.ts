// A private constructor is a constructor that can only be called from the same class
// this is useful when we want to create a singleton pattern

// The singleton pattern
// The singleton pattern is a design pattern that restricts the instantiation of a class to one object

class Animal {
  static instance: Animal;

  private constructor(public name: string) {}

  static getInstance(): Animal {
    if (!Animal.instance) {
      Animal.instance = new Animal('Dog');
    }
    return Animal.instance;
  }

  changeName(newName: string): void {
    this.name = newName;
  }
}

const animal = Animal.getInstance();
animal.changeName('Cat');

console.log(animal);
