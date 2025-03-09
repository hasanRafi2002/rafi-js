var str ='1000.33'
var n =20

console.log(str+n)    // string + number = string     // number + string = string
console.log(str*n)    // string * number = number

console.log(Number(str))
console.log(Number.parseInt(str))
console.log(n.toString(n))         // RangeError: toString() radix argument must be between 2 and 36      //  it always print 10   --- which is a string... if we input number below than 2    or   upper than 36   ...  an error will be shown
console.log(Boolean(-Infinity))
console.log(Boolean(Infinity))


//Falsy value of javascript are ===> '' 0 null undefined NaN

console.log(Boolean(''))
console.log(Boolean('Rafi'))
console.log(Boolean(null))
console.log(Boolean(undefined))             ///  in javacsript   0 , null , undefined   ---->  these three item  returns negative value
console.log(Boolean(0))
console.log(Boolean(8027))