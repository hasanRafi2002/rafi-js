//arithmetic operator
// + - * / % ++ --
var a = 11
var b = 6

console.log(a%b)   // % is a remainder

//Incrimental  ---->  pre-incrimental  ----  post-incrimental

console.log(a++)  // first output a  then
console.log(a)    // output       a+1

console.log(++b)   // first output b+1  then
console.log(b)     // output       b+1    same as before


///////////// ASSIGNMENT--OPERATOR


var c = 30
var d = 50
//c=c+d   // it means c = c+d
c += d // it means c = c+d
console.log(c)
//c=c-d    // it means c = c+d-d
c -= d  // it means c = c+d-d
console.log(c)

/////
 

var e = 40
var f = 60
var g = 6

e *= f          // it means e = e*f
console.log(e)

e /= f          // it means e = e*f/f = e
console.log(e)

e %= f          // it means e = remainder of (e/f)   here the answer is = e

console.log(e)

e %= g   // it means e = remainder of (e/g)  here the answere is = 4  because (40/6= 6 remainder=4) and from now the value of e = 4  ......
console.log(e)


/////////////----COMPARISON--OPERATOR

// = equal sign is a assignment operator but == double equal sign is a comparison operator

var a = 20
var b = 10

console.log(a==b)   // it outputs BOOLEAN output like (true or false)

console.log(a!=b)   // (!=) refers not equal (NB- here single equal sign)
console.log(a>b)     //true
console.log(a<b)    // false
console.log(a>=b)  // true
console.log(a<=b) // false

a -= b  // here a = a-b
console.log(a==b)  // true
console.log(a<=b)  // true
console.log(a>=b)  // true

////////
var c = '50'
var d = 50
 
console.log(c==d)   // true  (because it measure only value)
console.log(c===d)  // false (because it measure value and type)
console.log(c!==d)  // true (NB- here dual equal sign)


//////// LOGICAL OPERATOR------->  && (DOUBLE AND), || (DOUBLE OR), !(NOT)

//////// BITWISE OPERATOR-------->  & (AND), | (OR), ~ (NOT), ^ (EXOR), << (LEFT SHIFT), >> (RIGHT SHIFT)

// TYPE OF OPERATOR
console.log(typeof 'Rafi')
console.log(typeof(10))