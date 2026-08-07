// Original price and discount information
let shirtPrice = 45;
let discountPercent = 30;

// Calculate the discount amount and final price below
// Hint: First convert the percentage to decimal form
// Your code here:

// Display calculations
console.log("=== Discount Calculator ===");
console.log("Original Price  : $" + shirtPrice);
console.log("Discount %      : " + discountPercent + "%");
// Add your console.log statements to show the discount amount and final price
let off = (discountPercent / 100) * shirtPrice;
console.log("Discount        : $" + off);
console.log("Final Price     : $" + (shirtPrice - off));
