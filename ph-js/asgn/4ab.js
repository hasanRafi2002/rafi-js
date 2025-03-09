function calculateFinalScore(obj) {
    // Input validation
    if (typeof obj !== 'object' || 
        typeof obj.name !== 'string' || 
        typeof obj.testScore !== 'number' || obj.testScore > 50 || obj.testScore < 0 ||
        typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || obj.schoolGrade < 0 || 
        typeof obj.isFFamily !== 'boolean') {
        return "Invalid Input";
    }

    // Calculate the final score
    let finalScore = obj.testScore + obj.schoolGrade;

    // Add 20 points if the student comes from a farming family
    if (obj.isFFamily) {
        finalScore += 20;
    }

    // Return true if the final score is 80 or more, otherwise false
    return finalScore >= 80;
}

// Example usage:
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));  // true
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));  // false
console.log(calculateFinalScore("hello"));  // "Invalid Input"


console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));   // Output: true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));  // Output: false
console.log(calculateFinalScore("hello"));                                                              // Output: Invalid Input
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));   // Output: false
console.log(calculateFinalScore({ name: "Rajib", testScore: 60, schoolGrade: 30, isFFamily: false })); 