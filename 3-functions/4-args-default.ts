(() => {
  const fullName = (firstName:string, lastName?:string, age: number = 0):string => {
    
    if(age) {
      return `${firstName} ${lastName || 'Pancake'}, is ${age} years old`.toUpperCase();
    } else {
      return `${firstName} ${lastName || 'Pancake'}`;
    }
  }

  // call function fullName where the second argument is missing
  const name = fullName('Tony', 'Stark', 45); // if one argument is missing throws an error
  console.log({ name });
})();