function sum(num1, num2) {
  const add = num1 + num2;
  return add;
}
const add = sum(4, 7);
console.log("Sum :", add);
//
//

//--> Arrow Function :

// const sum2 = (num1, num2) => {
//   return num1 + num2;
// };
const sum2 = (num1, num2) => num1 + num2; //--> alternative
const add2 = sum2(2, 8);
console.log("Sum2 :", add2);
