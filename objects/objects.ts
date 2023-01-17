(() => {
  let xmen: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Storm',
    age: 24,
    powers: ['Weather manipulation', 'Speed', 'Lightning']
  }

  xmen = {
    name: 'Wolverine',
    age: 30,
    powers: ['Regeneration', 'Healing', 'Claws'],
    getName() {
      return this.name
    }
  }
  // console.log(xmen.getName())
})()