// What is a generic function?
// A function that can accept any type of argument

const printSomething = (something: any) => {
  console.log(something);
};

printSomething(1);
printSomething('Hello');
printSomething(true);

// we need to define the type of the argument
// ----------------------------------------------------------------------------------------------------------------------------------------------

function genericFunction(something: any): any {
  console.log(something);
}

// let test genericFunction() with a number
genericFunction(4.7122).toFixed(2);

// what if we want to use the genericFunction() with a string?
genericFunction('Hello').toFixed(2);

// we can use the generic type to define the type of the argument and the return value
// in such a way that we can have all the type checking that typescript offers us

// ----------------------------------------------------------------------------------------------------------------------------------------------

// usually we use the T letter to define the generic type

//basic function
export function newGenericFunction<T>(something: T): T {
  return something;
}

// arrow function
export const newGenericArrowFunction = <T>(something: T): T => {
  return something;
};

// let test newGenericFunction() with a number
newGenericFunction(4.7122).toFixed(2);

// let test newGenericFunction() with a string
// newGenericFunction('Hello').toFixed(2);

// typescript will infer the type of the argument and the return value
// and will throw an error if we try to use a method that doesn't exist for that type
