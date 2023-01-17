//  What is a type?
//  A type is a way to describe the properties and methods that an object has
type Car = {
  brand: string;
  model: string;
  year: number;
};

//  What is an interface?
//  An interface is a way to describe the properties and methods that an object has
interface Plane {
  brand: string;
  model: string;
  hoursOfFlight: () => number;
}

//  What is the difference between a type and an interface?
//  Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
//  Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to
//  add new properties vs an interface which is always extendable.
// more info: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// inheritance with interfaces
interface JetFighter extends Plane {
  numberOfWeapons: number;
  getMission: () => string;
}

// inheritance with types
type LuxuryCar = Car & {
  horsePower: number;
};

// interfaces can be use in http requests and the types can be used
// for example in redux patterns to define what actions can be dispatch
