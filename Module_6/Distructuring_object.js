const person = {
  name: "Nazmul",
  age: 22,
  friends: ["Karim", "Rahim"],
};

// const age = person.age; //--> Normal Way

// const { age } = person; //--> Object Distructuring
const { age, friends } = person;

console.log(age);
console.log(friends);
