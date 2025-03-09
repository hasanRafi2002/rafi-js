var str1 ='string-rafi-'
var str2 ="string-rafi-"
var str3 =`string-rafi-`
//var str4 =String(rafi)     //---- it is an error because text is not defined inside ''
var str5 =String(110703)
var str6 =String(3.1416)
//////////////////////////
var m = String('rafi')                  // it is the solve of str4
console.log(m)
//////////////////////////
console.log(str5)
console.log(str1   ,  str2,str3,str5,str6,)

// string literal  or   string constructor

// String literal
var n = 'Rafi'
console.log(n)

// String constructor
var n = 10
var str = n + ''   // we can add empty string to make number to string...........generally adding number with string makes whole output into string... 
console.log(str)

// construct string from number ---- with toString method
var str1 = n.toString()
console.log(str1)

// construct string from number ----- with String method
var str2 = String(n)
console.log(str2)

// if we add ( new String ) keyword it will call an object
var str3 = new String(n)
console.log(str3)
console.log(str3.toString()) //by this way we can make a string from an object

