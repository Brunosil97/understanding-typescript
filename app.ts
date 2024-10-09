// Union Types
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  }
  
  if (typeof input1 === 'string' && typeof input2 === 'string') {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAge = combine(27, 26);

const combineName = combine("Bruno", "Silva");