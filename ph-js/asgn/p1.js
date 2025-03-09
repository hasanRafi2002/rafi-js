function calculateTax(income, expense) {
    if (typeof income !== 'number' || typeof expense !== 'number' || income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }else{
        
    let difference = income - expense;
    let tax = difference * 0.2;
    return tax;
    }
}

// Sample inputs
console.log(calculateTax(10000, 3000));  // Output: 1400
console.log(calculateTax(34000, 1753));  // Output: 6449.4
console.log(calculateTax(5000, 1500));   // Output: 700
console.log(calculateTax(7000, 7000));   // Output: 0
console.log(calculateTax(-5000, 2000));  // Output: Invalid Input
console.log(calculateTax(6000, -1500));  // Output: Invalid Input
