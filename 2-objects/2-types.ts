(() => {
  // type does not transpile to javascript. There are no equivalencies
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let storm: Hero = {
    name: 'Storm',
    age: 24,
    powers: ['Weather manipulation', 'Speed', 'Lightning']
  }

  let wolverine: Hero = {
    name: 'Wolverine',
    age: 30,
    powers: ['Regeneration', 'Healing', 'Claws'],
    getName() {
      return this.name;
    }
  }
  // console.log(xmen.getName())
})()