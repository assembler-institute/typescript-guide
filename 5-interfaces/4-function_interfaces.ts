interface addTwoNumbers {
  (a: number, b: number): number;
}

// we can use the interface to define the function
// watch what happens when we try to add a third parameter
const addNumber: addTwoNumbers = (a: number, b: number): number => a + b;
// const addNumber: addTwoNumbers = (a: number, b: number, c: number): number =>
//   a + b + c;
