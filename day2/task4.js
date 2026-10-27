const product1 = 15000;
const product2 = 25000;
const product3 = 10000;

function calculateSubtotal(products) {
  return product1 + product2 + product3;
}

function calculateDiscount(subtotal) {
  if (subtotal <= 20000) return 0;
  if (subtotal <= 50000) return subtotal * 0.05;
  return subtotal * 0.1;
}

function calculateFinaltotal() {
  const sub = calculateSubtotal();
  return sub - calculateDiscount(sub);
}

console.log(calculateSubtotal(calculateSubtotal));
