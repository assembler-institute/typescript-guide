(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let myCustomVariable: (string | number | Hero);
  myCustomVariable = 20
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: 'Cyclops',
    age: 30,
    powers: ['X-ray', 'Beams of energy ']
    
  }
  console.log(typeof myCustomVariable);
  console.log(myCustomVariable);
  

})()