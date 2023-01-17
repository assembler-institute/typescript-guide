(() => {
  const addNumbers = (a: number, b: number):number => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `The world needs your help`;

  // let myFunction; // should not be of type any
  //* myFunction = 10;
  //* console.log(myFunction);

  let myFunction: Function;
  // let myFunction: (a: number, b: number) => number;
  // let myFunction: (a: string) => string;
  // let myFunction: () => string;

  
  myFunction = addNumbers;
  console.log(myFunction(5, 5));

  myFunction = greet;
  console.log(myFunction('Spiderman'));

  myFunction = saveTheWorld;
  console.log(myFunction());
})()