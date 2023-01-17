// define a basic class
class Person {
  // define properties and methods
  private name: string;
  private lastName: string;
  private age: number;
  static realName?: string = 'Jhon Doe';

  public getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
}

// typescript allows us to define classes, and if we hover over the new instance of the Person class
// we notice that we can see its properties and the type of data of each one of them
const persona1 = new Person('Alejandro', 'Perez', 30);
console.log(persona1.getFullName());
console.log(Person.realName);

// fast way to define a class, and its properties

// to define a class and its properties in a faster way we must define in the constructor
//the privacy of its properties and its type.
class Hero {
  constructor(private name: string, private realName: string) {}
}

const hero1 = new Hero('Batman', 'Bruce Wayne');
console.log(hero1);

// Private and Public methods
// We can define a method as private or public, if we define it as private we can only use it
// inside the class, if we define it as public we can use it outside the class
class Villain {
  constructor(private name: string, private realName: string) {}

  // When we define a private method, typescript transpiles it to javascript, and if we look at the javascript code
  // there would be no way to define its privacy, however typescript allows us to define it as private and it will not
  // allow us to use it outside the class.
  private getFullName(): string {
    return `${this.name} ${this.realName}`;
  }
}

const villain1 = new Villain('Joker', 'Jack Napier');
// console.log(villain1.getFullName());
