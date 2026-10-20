const food = 5000;
const transport = 3000;
const internet= 7000;
const entertainment = 4000;
const income = 100000;

const totalExpenses = (food + transport + internet + entertainment + income);
console.log(`Total Expenses = ${totalExpenses}`);

const avarageExpenses = (totalExpenses / 5);
console.log(`Avarage Expenses = ${avarageExpenses}`);

const expenses = [food, transport, internet, entertainment]
const highestExpences = Math.max(...expenses)
const remainingIncome = income - totalExpenses
console.log(`Remaining Expensive = ${remainingIncome}`)
console.log(`Highest epensive = ${highestExpences}`);