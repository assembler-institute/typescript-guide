// check the arrow to see type of function

(() => {
  const hero: string = 'Lobezno';

  // change string to number and check result in line 17
  function returnName():string {
    return hero;
  }

  const activatePowers = ():string => {
    return 'Powers activated';
  }

  console.log( typeof activatePowers);

  const heroName = returnName();
  
})()