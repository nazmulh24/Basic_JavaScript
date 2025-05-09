function monthlySavings(payments, livingCost) {
  if (!Array.isArray(payments) || typeof livingCost != "number")
    return "invalid input";

  let totalIncome = 0;

  for (let payment of payments) {
    if (payment >= 3000) totalIncome += payment - (payment * 20) / 100;
    else totalIncome += payment;
  }

  let savings = totalIncome - livingCost;

  if (savings < 0) return "earn more";
  else if (savings == 0) return 0;
  else return savings;
}

//------------------------ Test cases ------------------------

// array = [1000, 2000, 3000];
// livingCost = 5400;

// array = [1000, 2000, 2500];
// livingCost = 5000;

array = [900, 2700, 3400];
livingCost = 10000;

console.log(monthlySavings(array, livingCost));

// array = [900, 2700, 3400];
// livingCost = 100;
// console.log(monthlySavings(livingCost, array));
