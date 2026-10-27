const cart = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 45 },
  { name: "Monitor", price: 200 },
  { name: "Headphone", price: 60 }
];

console.log(`count:`, cart.length)

const total = cart.reduce((a, b)=> a + b.price, 0)
console.log("Total", total)

const expensive = cart.reduce((max, product) => product.price > max.price ? product : max)
console.log("Most Expensive:", expensive)

const cheapest = cart.reduce((min, product) => product.price < min.price ? product : min);
console.log("Cheapest:", cheapest);

const cartWithQty = [
  { name: "Laptop", price: 800, quantity: 1 },
  { name: "Mouse", price: 25, quantity: 2 },
  { name: "Keyboard", price: 45, quantity: 1 },
  { name: "Monitor", price: 200, quantity: 2 },
  { name: "Headphone", price: 60, quantity: 3 }
];

const actualTotal = cartWithQty.reduce((sum, p) => sum + (p.price * p.quantity), 0);
console.log("Actual total with quantity:", actualTotal);