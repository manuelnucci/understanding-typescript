//* Generics
// const names: Array<string> = ['Max', 'Manu']; //* string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// //* Alternative
// const promise2 = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(' ');
// });

//* Inserting constraints in generic types
function merge<T extends object, U extends object>(objA: T, objB: U) {
  //* Inferred return type: T & U
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
const mergedObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

//! "extends" can be used with classes or interfaces on generic constraints
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

//* keyof constraint
// function extractAndConvert(obj: object, key: string) {
//   //! No guarantee that the specific key passed as an argument will exist on this object
//   return 'Value: ' + obj[key];
// }

function extractAndConvert<T extends object, K extends keyof T>(obj: T, key: K) {
  return 'Value: ' + obj[key];
}

// extractAndConvert({}, 'name'); //! Error
extractAndConvert({ name: 'Max' }, 'name');

//* Generic Classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    //! indexOf returns -1 if value is not found
    const index = this.data.indexOf(item);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

//* It's better not to use a DataStorage based on objects because the remoteItem method doesn't work as expected
//* To work as how one should expect, the method should receive an "id" parameter, which is of course not supported by the current implementation
// const objStorage = new DataStorage<object>();
// const maxObj = { name: 'Max' };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: 'Manu' });
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

//* Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu'); //! Error
// names.pop(); //! Error
