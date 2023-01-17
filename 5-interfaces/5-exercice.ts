// Create interfaces

//  create an interface to validate the car (the value sent by parameter)

// const driveBatimovil = (car): void => {
//   car.turnOn = true;
//   car.maxSpeed = 100;
//   car.accelerate();
// };

const batmovil = {
  turnOn: false,
  maxSpeed: 0,
  accelerate() {
    console.log('...... gogogo!!!');
  },
};

// Create an interface that allows to use the following object using optional properties

const joker = {
  laugh: true,
  eat: true,
  cry: false,
};

// const laugh = (joker): void => {
//   if (joker.laugh) {
//     console.log('JAJAJAJA');
//   }
// };

// Create an interface for the following function

const gothanCity = (citizen: string[]): number => {
  return citizen.length;
};

// Create an interface that forces to create a class with the following properties and methods

/*
    properties:
      - name
      - age
      - gender
      - civilStatus
      - printBio(): void // brief description in the console
  */
class Persona {}
