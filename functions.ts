function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result ${num}`);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValue: (a: number, b: number) => number;

combineValue = add;
// combineValue = printResult;
// combinedValue = 5;

console.log(combineValue(8, 8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
  // return result;
});
