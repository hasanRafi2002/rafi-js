var a = 'I am'
var b = 'MTH Rafi'

var c = a.concat(' ',b)    // concat add two strings
var d = 'ra'.concat('fi')
var e = c.substr(9)       // substr-- (substring) is used for print some portion of a  string .....for this we have to call the starting letter number from a string ... we can also fixed how many number of letter will be printed
var f = b.substr(4,3)     // here 4 declare from 5 we start ...because js start counting from zero(0)...and 3 declare we take 3 letters

console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(c.charAt(0))    // charAt identify the letter in declared index
console.log(c.charAt(9))

// startWith output boolean value (true or false)

console.log(c.startsWith('I'))       // it output true
console.log(c.startsWith('i'))      // it output false because .... (i) is lowercase letter and c is started with uppercase I
console.log(c.endsWith('i'))       // true
console.log(c.endsWith('Rafi'))   // true


// uppercase   lowercase
console.log('Rafi'.toUpperCase())   // output -- RAFI
console.log(c.toUpperCase())
console.log(c.toLowerCase())

//  trim  method    -- it delete space  before and afer of a string
console.log('                 R   A   FI   '.trim())


//  split    --  it separate all words inside ('')from a string

console.log(c.split(''))

//  string length

var str = 'Some String'
var str1 = str.charAt(12)

console.log(str.charAt(5))
console.log(str.charAt(12))    // it print empty string
console.log(typeof str1)      // here type is string

// Measuring Length

var str = 'Some String'
var length = 0

while (true){
    if(str.charAt(length)==''){
    break}
    else{
        length++
    }
}

console.log(length)