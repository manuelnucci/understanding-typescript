type AddFn = (...numbers: number[]) => number; // more commonly used to define function types
// interface AddFn {
//   (...numbers: number[]): number; // function type definition inside interface
//   (a: number, b: number): number;
// }

let add: AddFn;

add = (...values: number[]) => {
  return values.reduce((total, value) => total + value, 0);
};

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; // optional property in nterface
}

// classes can also implement types
type Aged = {
  readonly age: number;
};

type Combination = Named | Aged; // combination of interface and type

// interfaces are commonly used with classes
interface Greetable extends Named, Aged {
  greet?(phrase: string): void; // optional method
}

class Person implements Greetable {
  age: number;

  // optional property in class
  constructor(public name?: string) {
    this.age = 30;
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu'; // property "name" inside class inherits all modifiers from interface

user1.greet!('Hi there - I am');
console.log(user1);
