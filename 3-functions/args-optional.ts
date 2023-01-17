(() => {
  const fullName = (firstName:string, lastName?:string, age?: number):string => {
    
    // if not working on typescript we should have a number of conditionals here

    return `${firstName} ${lastName || 'Pancake'}, is ${age} years old`;
  }

  // call function fullName where the second argument is missing
  const name = fullName('Tony', undefined, 45); // if one argument is missing throws an error
  console.log({ name });


})();