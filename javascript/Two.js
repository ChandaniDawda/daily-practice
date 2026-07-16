const products = [
    { name: "Laptop", price: 50000, inStock: true },
  { name: "Mouse", price: 500, inStock: false },
  { name: "Keyboard", price: 1200, inStock: true },
  { name: "Monitor", price: 8000, inStock: false },
];

 // Step 1: Filter only products where inStock is true

 const inStockProducts = products.filter((product)=> product.inStock);

 // Step 2: Use reduce to sum up the price of inStockProducts

const totalPrice = inStockProducts.reduce((acc,product) => {
    return acc + product.price;
}, 0 );

console.log("Total Price", totalPrice);

