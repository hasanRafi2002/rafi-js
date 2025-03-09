function waitingTime(waitingTimes, serialNumber){
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber <= waitingTimes.length || waitingTimes.some(isNaN)) {
        return "Invalid Input";
    }else{
    
    let totalTime = waitingTimes.reduce((sum, time) => sum + time, 0);
    let averageTime = Math.round(totalTime / waitingTimes.length);
    let peopleLeft = serialNumber - waitingTimes.length - 1;

    return peopleLeft * averageTime;
    }
}


// Sample inputs
console.log(waitingTime([3, 5, 7, 11, 6], 10));  // Output: 24
console.log(waitingTime([13, 2], 6));            // Output: 24
console.log(waitingTime([13, 2, 6, 7, 10], 6));  // Output: 0
console.log(waitingTime([6], 4));                // Output: 12
console.log(waitingTime(7, 10));                 // Output: Invalid Input
console.log(waitingTime("[6,2]", 9));            // Output: Invalid Input
