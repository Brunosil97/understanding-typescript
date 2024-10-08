// Object Type
const person = {
  name: "Bruno",
  age: 27,
  hobbies: ["gaming", "sports"],
};

// An array of string values
let favouriteActivities: string[];
favouriteActivities = ["Football", "Rugby"];

console.log(person.name);

for(const hobby of person.hobbies) {
  // Detects that hobbies will be an array of strings
  // can access string functions
  console.log(hobby.toUpperCase());
  // hooby.map() would throw an error as it should
}