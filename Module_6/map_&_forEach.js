const product = [
  { id: 1, name: "nazmul", address: "BD" },
  { id: 2, name: "nazmul", address: "USA" },
  { id: 3, name: "nazmul", address: "China" },
  { id: 4, name: "nazmul", address: "BD" },
  { id: 5, name: "nazmul", address: "Japan" },
];

// const result = product.map((pd) => pd.id);
// const result = product.map((pd) => pd.id * 2); //--> Map

// console.log(result);
//

//
const result = product.forEach((pd) => {
  console.log(pd.id);
}); //------------------------------------------------> forEach
