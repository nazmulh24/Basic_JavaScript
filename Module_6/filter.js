const product = [
  { id: 1, name: "nazmul", address: "BD" },
  { id: 2, name: "nazmul", address: "USA" },
  { id: 3, name: "nazmul", address: "China" },
  { id: 4, name: "nazmul", address: "BD" },
  { id: 5, name: "nazmul", address: "Japan" },
];

// const result = product.find((pd) => pd.address == "BD"); //--> Only 1 item show...
const result = product.filter((pd) => pd.address == "BD"); //--> Multiple item show...

console.log(result);
