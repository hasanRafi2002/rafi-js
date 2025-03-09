function calculateFinalScore(obj){
    if(typeof obj!=='object' || typeof obj.name!=='string' || typeof obj.testScore!=='number' || obj.testScore>50 || obj.testScore<0 || typeof obj.schoolGrade!=='number' || obj.schoolGrade>30 || obj.schoolGrade<0 || typeof obj.isFFamily!== 'boolean'){
        return "Invalid Input";
    }else{

        let finalScore = obj.testScore + obj.schoolGrade + (obj.isFFamily ? 20:0);
        return finalScore >= 80;
    }

}





console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));   // Output: true
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));  // Output: false
console.log(calculateFinalScore("hello"));                                                              // Output: Invalid Input
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));   // Output: false
console.log(calculateFinalScore({ name: "Rajib", testScore: 60, schoolGrade: 30, isFFamily: false })); 