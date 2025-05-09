/* 
1 -->
    let result = 90;
    if (result <= 100 && result >= 80) console.log("A+");
    else if (result < 80 && result >= 70) console.log("A");
    else if (result < 70 && result >= 60) console.log("B");
    else if (result < 60 && result >= 50) console.log("C");
    else if (result < 50 && result >= 40) console.log("D");
    else if (result < 40 && result >= 0) console.log("F");
    else console.log("Invalid result");


2 -->
    let number = 7;
    if (number % 2 == 0) {
        console.log(number + " is even");
    } else {
        console.log(number + " is odd");
    }


3 -->
    let numbers = [1, 5, 3, 7, 2, 8, 4, 9, 10, 12, 16, 13, 17, 19, 14, 6, 11, 18, 20, 15];
    // numbers.sort((a, b) => a - b);
    numbers.sort((a, b) => b - a);
    console.log(...numbers);


4 -->
    let year = 2024;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }


5 -->
    for (let i = 1; i <= 50; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
      }
    }


6 -->
    var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

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

    const big_Friend = check_friends(friends);
    console.log(big_Friend);


7 -->
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    let uniqueNumbers = [...new Set(numbers)];
    console.log("Unique values :", ...uniqueNumbers);


8 -->
    var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
    let max = Math.max(...numbers);
    console.log("Biggest number:", max);
*/
