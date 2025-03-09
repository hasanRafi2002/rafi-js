function sendNotification(email){
    if(typeof email!=='string' || !email.includes('@')){
        return "Invalid Email";

    }else{
        let [userName, domainName] = email.split('@');
        let as =9;

        if(userName && domainName){
           return userName+" sent you an email from "+domainName;
        }else{
            return "Invalid Email"
        }
    }
}


// Sample inputs
console.log(sendNotification("zihad@gmail.com"));          // Output: zihad sent you an email from gmail.com
console.log(sendNotification("farhan34@yahoo.com"));       // Output: farhan34 sent you an email from yahoo.com
console.log(sendNotification("nadim.naem5@outlook.com"));  // Output: nadim.naem5 sent you an email from outlook.com
console.log(sendNotification("fahim234.hotmail.com"));     // Output: Invalid Email
console.log(sendNotification("sadia8icloud.com"));         // Output: Invalid Email
// console.log(sendNotification("a@a")); 
