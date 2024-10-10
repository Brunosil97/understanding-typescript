// Rest paramaters
// Can accept an unlimted amount of arguments
const restAdd = (...numbers: number[]): number => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0)
};

const addedNumbers = restAdd(5, 10, 15, 20);
