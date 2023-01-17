(() => {
  // with never we know that the function will never return a value
  // and we can use it to force an error
  // const error = (message: string): never => {
  //   throw new Error(message);
  // }
  
  // error('Madre mía con TypeScript')

  const error = (message: string):(never | number) => {
    if (false) {
      throw new Error(message);
    } return 1; // here we are returning a number or a never
  }

  error('Madre mía con TypeScript')
  console.log('Hola mundo');
})()