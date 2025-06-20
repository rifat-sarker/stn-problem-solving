// 10. Task10: Functional Programming - Reduce - Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const items = [
  { quantity: 2, price: 10 },
  { quantity: 1, price: 20 },
  { quantity: 3, price: 5 },
];

function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

const totalPrice = calculateTotalPrice(items);
console.log("Total Price:", totalPrice);
