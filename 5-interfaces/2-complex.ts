// for optional properties use ? after property name
interface Client {
  name: string;
  age: number;
}

const client: Client = {
  name: 'John',
  age: 30,
  address: {
    street: 'Main Street',
    number: 123,
    zipCode: '12345',
  },
  // look what happens when we try return the address without checking if it exists
  showAddress() {
    return this.address ? this.address.street : '';
    // return this.address.street;
  },
};

// if we use more than one level of definition with interfaces the best option is use another interface
// is not good practice
interface Client {
  name: string;
  age: number;
  address?: Address;
}

interface Address {
  street: string;
  number: number;
  zipCode: string;
}

// in typescript the main interface is in the top of the file
// and the other interfaces are in the bottom of the file

// methods in interfaces
interface Client {
  name: string;
  age: number;
  address?: Address;
  showAddress?: () => string;
}
