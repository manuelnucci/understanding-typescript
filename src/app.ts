//* Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {}
type ElevatedEmployee = Admin & Employee; // intersection = combination of object types (Admin and Employee)
// Result:
// type ElevatedEmployee = {
//   name: string;
//   privileges: string[];
//   startDate: Date;
// }

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // intersection of union types = only common attributes
// Universal: number;

//* Function Overloads
//! We must declare all possible combinations that we want to call this function
function add(a: number, b: number): number;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  //* Type Guard using "typeof" operator (works with primitive types)
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result1 = add(2, 5);
const result2 = add(2, '5');
const result3 = add('2', 5);
// const result4 = add('2', '5'); //! Error because there's no matching function overload

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   //* Type Guard using "in" operator (works with objects)
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   //* Type Guard using "instanceof" operator (works with objects)
//   //! Can only be used with classes, not interfaces (because "instanceof" uses
//   //! constructor functions from JS, and interfaces are a construct of TS)
//   // if ('loadCargo' in vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// //* Discriminated Union
// //* Each interface has a "type" or "kind" property that describes each object
// interface Bird {
//   type: 'bird'; // Force each object based on this interface to have this type
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//       break;
//   }
//   console.log('Moving with speed: ' + speed);
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 });

// //* Type Casting
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi there!';

// //! The "as" and "<...>" operator implicitly tell TS that the object is not null
// //! Therefore, in this case, the "!" operator is redundant

// const userInputElement2 = document.getElementById('user-input');
// if (userInputElement2) {
//   // (<HTMLInputElement>userInputElement2).value = 'Hi there!';
//   (userInputElement2 as HTMLInputElement).value = 'Hi there!';
// }

// //* Index Types
// interface ErrorContainer {
//   // { email: 'Not a valid email', username: 'Must start with a capital character' }
//   [prop: string]: string;
//   //* Other properties can be added to this interface, always respecting the interface contract
//   // id: string; //* Valid
//   // code: number; //! Error
// }

// // const errorBag: ErrorContainer = {};
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   1: 'Not a valid email', //* Casted as a string
//   username: 'Must start with a capital character',
// };

//* Optional Chaining
interface User {
  id: string;
  name: string;
  job?: {
    title: string;
    description: string;
  };
}

const fetchedUserData: User = {
  id: 'u1',
  name: 'Max',
  // job: {
  //   title: 'CEO',
  //   description: 'My own company',
  // },
  job: undefined,
};

// console.log(fetchedUserData.job && fetchedUserData.job.title); //* JS way of checking if property exists
console.log(fetchedUserData.job?.title); //* Optional Chaining

//* Nullish Coalescing
// const userInput = null;
// const userInput = undefined;
const userInput = ''; //* Treated as falsy with traditional || operator
const userInput2 = 0; //* Treated as falsy with traditional || operator

// const storedData = userInput || 'Default'; //* Traditional way

//? Nullish Coalescing operator (only checks null and undefined)
//? All other falsy values (0, '', etc. are treated as truthy)
const storedData = userInput ?? 'Default';

console.log(storedData);
