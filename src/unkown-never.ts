// Unkown Type 
// we dont yet know what the type will be
let userInput: unknown;
let username: string;

// with unknown we need to check the type currently stored before reassigning
if (typeof userInput === "string") {
  // doesn't error as the check for string above
  username = userInput;
}

// Never Type
function generateError(message: string, code: number): never {
  // Doesn't produce a return value so never return type
 throw { message: message, code: code };
}

generateError("Error occured!", 500);