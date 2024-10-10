// A selector parameter shouldn't be used here but just using this method
// to showcase core types
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  return showResult ? console.log(phrase + result) : result;
}

const number1 = 5;
const number2 = 2.8;
const showResult = true;
const phrase = "Result is: ";

add(number1, number2, showResult, phrase);
