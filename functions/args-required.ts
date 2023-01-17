(() => {
  const fullName = (firstName:string, lastName:string, age: number):string => {
    
    // if not working on typescript we should have a number of conditionals here

    return `${firstName} ${lastName}`;
  }

  const name = fullName('Tony', 'Stark', 45); // if one argument is missing throws an error
  console.log({ name });


})();