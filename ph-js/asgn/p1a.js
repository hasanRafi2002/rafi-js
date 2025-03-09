function calculateTax(income, expence) {
    if (0<income && 0<expence && income>expence && typeof income==='number' && typeof expence==='number') {
        let difference = income-expence;
        let tax = difference*0.2;
        return tax;
    }
    else{
        return "Invalid Input"
    }
}

// Sample inputs
console.log(calculateTax(10000, 3000));  // Output: 1400
console.log(calculateTax(34000, 1753));  // Output: 6449.4
console.log(calculateTax(5000, 1500));   // Output: 700
console.log(calculateTax(7000, 7000));   // Output: 0
console.log(calculateTax(-5000, 2000));  // Output: Invalid Input
console.log(calculateTax(6000, -1500));  // Output: Invalid Input
