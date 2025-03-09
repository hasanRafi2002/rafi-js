function checkDigitsInName(myName){

    if(typeof myName !== 'string'){
        return "Invalid Input";

    }else{
        for(let i=0; i<myName.length; i++){
            if (myName[i] >= '0' && myName[i] <= '9' && myName[i] !== ' ') {
                return true;
            }
        }
        }
        
        return false
    }





// Sample inputs
console.log(checkDigitsInName("Raj123"));       // Output: true
console.log(checkDigitsInName("n9ayeem"));      // Output: true
console.log(checkDigitsInName("Suman"));        // Output: false
console.log(checkDigitsInName("Name2024"));     // Output: true
console.log(checkDigitsInName("!@#"));          // Output: false
console.log(checkDigitsInName(["Raj"]));        // Output: Invalid Input