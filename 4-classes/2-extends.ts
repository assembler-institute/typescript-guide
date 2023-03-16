class Avenger {
  constructor(public name: string, public realName: string) {}

  // Methods
  public showName(): void {
    console.log(this.name);
  }
  protected showLastName(): void {
    console.log(this.realName);
  }
  protected fullName(): string {
    return `${this.name} ${this.realName}`;
  }
}

class Xmen extends Avenger {
  constructor(name: string, realName: string, isMutant: boolean) {
    // super is used to call the constructor of the parent class and must be called first
    console.log('XMEN constructor');
    super(name, realName);
  }

  // look what happens when we call the method from the parent class
  // in roder to acces to methods of the parent class we need to use the super keyword
  // watch difference between public, private and protected
  // public: can be accessed from anywhere
  // private: can be accessed only from the class
  // protected: can be accessed from the class and the child classes
  showMutantName(): void {
    console.log(`X-MEN ${super.fullName()}`);
  }

  showXmenLastName(): void {
    console.log(`X-MEN ${super.showLastName()}`);
  }
}

const wolverine = new Xmen('Wolverine', 'Logan', true);
console.log(wolverine);
wolverine.showMutantName();
wolverine.showXmenLastName();
