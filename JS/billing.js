// Item prices
let coffeePrice = 5;
let sandwichPrice = 8;
let cookiePrice = 2;
let muffinPrice = 3;

// Calculate quantities
let coffeeQuantity = 2;
let sandwichQuantity = 1;
let cookieQuantity = 3;
let muffinQuantity = 2;

// Calculate subtotals
let coffeeTotal = coffeePrice * coffeeQuantity;
let sandwichTotal = sandwichPrice * sandwichQuantity;
let cookieTotal = cookiePrice * cookieQuantity;
let muffinTotal = muffinPrice * muffinQuantity;

// Calculate final total
let cartTotal = coffeeTotal + sandwichTotal + cookieTotal + muffinTotal;

// Display the receipt
console.log("=== Shopping Cart ===");
console.log(coffeeQuantity + " Coffee    : $" + coffeeTotal);
console.log(sandwichQuantity + " Sandwich  : $" + sandwichTotal);
console.log(cookieQuantity + " Cookies   : $" + cookieTotal);
console.log(muffinQuantity + " Muffin    : $" + muffinTotal);
console.log("____________________ ");
console.log("  Total     : $" + cartTotal);
