//---------------- Practice Problem - 1 --------------------------------------

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//--> Find the even_Number of all numbers in the array

const even_Number = (array) => {
  const even_number = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 == 0) {
      even_number.push(element);
    }
  }

  return even_number;
};
const even_number = even_Number(number);
console.log(even_number);

// const even_number = number.filter((num) => num % 2 == 0);
// console.log(...even_number);

// const oddNumbers = number.filter((num) => num % 2 !== 0);

//

//---------------- Practice Problem - 2 --------------------------------------

// const friends = ["Rahim", "Karim", "Salam", "Jamal", "Sakib", "Nazmul"];
//--> Find the Biggest friend name from the array

const check_friends = (array) => {
  let biggest_Name = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (biggest_Name.length < element.length) {
      biggest_Name = element;
    }
  }

  return biggest_Name;
};

const friends = ["Rahim", "Karim", "Salam", "Jamal", "Sakib", "Nazmul"];

const big_Friend = check_friends(friends);
console.log(big_Friend);
