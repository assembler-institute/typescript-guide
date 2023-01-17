class Guardian {
  constructor(public name: string, public realName: string) {}

  // we use the get and set keywords to create getters and setters

  // get methods don't receive any parameter
  get fullName(): string {
    return `${this.name} ${this.realName}`;
  }

  // set methods receive 1 parameter
  set fullName(name: string) {
    this.name = name;
  }
}

const startLord = new Guardian('Start Lord', 'John');

// we can access to the set method
console.log(startLord);
startLord.fullName = 'John Doe';
console.log(startLord);
