function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length) {
        return "Invalid Input";
    }
    
    let sum = waitingTimes.reduce((acc, curr) => acc + curr, 0);
    let averageTime = Math.round(sum / waitingTimes.length);
    let remainingPeople = serialNumber - waitingTimes.length;
    let waitingTime = remainingPeople * averageTime;
    
    return waitingTime;
}

// Sample inputs
console.log(waitingTime([3, 5, 7, 11, 6], 10));  // Output: 24
console.log(waitingTime([13, 2], 6));            // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 6));  // Output: 0
console.log(waitingTime([6], 4));                // Output: 12
console.log(waitingTime(7, 10));                 // Output: Invalid Input
console.log(waitingTime("[6,2]", 9));            // Output: Invalid Input
