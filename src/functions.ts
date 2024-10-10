// Function return Types & "Void"
function addNumbers(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(addNumbers(5, 2));

// Function Type
let combineValues: (a: number, b: number) => number;

combineValues = addNumbers;

console.log(combineValues(8, 8));

// Function Type and Callback
function addAndHandle(num1: number, num2: number, cb: (a: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  // TypeScript can infer result is a number without explicitly stating it is a number
  console.log(result);
});