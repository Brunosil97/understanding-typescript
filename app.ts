// A selector parameter shouldn't be used here but just using this method
// to showcase core types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  return showResult ? console.log(phrase + n1 + n2) : n1 + n2
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phrase = "Result is: ";

add(number1, number2, printResult, phrase);
