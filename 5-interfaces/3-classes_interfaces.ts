interface Tank {
  year: number;
  tankType: string;

  getDestination: () => string;
}

interface Occupation {
  numberOfPersonal: number;
}

// in order to use an interface we need to implement it
// we can implement more than one interface
// and we need to use the implements keyword

class T80 implements Tank, Occupation {
  public year: number = 1980;
  public tankType: string = 'T80';
  public numberOfPersonal: number = 3;

  constructor(year: number, tankType: string, numberOfPersonal: number) {
    this.year = year;
    this.tankType = tankType;
    this.numberOfPersonal = numberOfPersonal;
  }

  getDestination() {
    return 'Hawaii';
  }
}

const t80 = new T80(2010, 'T80', 5);
console.log(t80);
console.log(t80.getDestination());
