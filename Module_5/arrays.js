var friends = [
  "hero",
  4,
  "Me",
  { name: "Nazmul", age: 22 },
  ["Array_Under_array", 222],
];

console.log(friends);

// console.log(friends.length);

// console.log(friends[2]);

// friends.push("Hossain"); //--> Add in Last
// console.log(friends);

// friends.pop(); //--> Delete in Last
// console.log(friends);

friends.unshift("Nazmul"); //--> Add in First
console.log(friends);

friends.shift(); //--> Delete in First
console.log(friends);
