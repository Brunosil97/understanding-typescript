// Alias
type Combinable = number | string;
type Conversion = "number" | "text";

// Union Types
function combine(
  input1: Combinable,
  input2: Combinable,
  // Literal Type
  conversion: Conversion) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || conversion === "number") {
    result = +input1 + +input2;
  }
  
  if (typeof input1 === 'string' && typeof input2 === 'string') {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAge = combine(27, 26, "number");

const combineName = combine("Bruno", "Silva", "text");

const combineStringAge = combine("32", "27", "number");