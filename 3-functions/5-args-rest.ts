(() => {
  // check rest operator to check that it is an array
  const fullName = (firstName: string, ...restOfName: string[]): string => {
    return `${firstName} ${restOfName.join(' ')}`;
  }

  const superMan = fullName('Clark', 'Joseph', 'Kent');
  console.log(superMan);
  

})();