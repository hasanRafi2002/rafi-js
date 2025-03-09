function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }

    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i]) && name[i] !== ' ') {
            return true;
        }
    }
    return false;
}

// Sample inputs
console.log(checkDigitsInName("Raj123"));       // Output: true
console.log(checkDigitsInName("n9ayeem"));      // Output: true
console.log(checkDigitsInName("Suman"));        // Output: false
console.log(checkDigitsInName("Name2024"));     // Output: true
console.log(checkDigitsInName("!@#"));          // Output: false
console.log(checkDigitsInName(["Raj"]));        // Output: Invalid Input