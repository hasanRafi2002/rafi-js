/*   prompt the user to enter there full name. generate a user name for them based on the input
 start user name with @, followed by their full name and ending with their fullname length.  */

 let fullName = prompt("Enter your full name without spaces : ");
 let username = "@"+fullName+fullName.length;

 console.log(username);