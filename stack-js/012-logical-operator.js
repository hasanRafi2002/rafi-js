// && - and, || - or, ! - not

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false


// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 4
var b = 20
var c = 70
var d = 40

if (a>b && c>d){
    console.log('a is greater than b and c is greater than d')
}
else{
    console.log('at list one condition is false')
}

if (a>b || c>d){
    console.log('a is greater than b or c is greater than d')
}
else {
    console.log('both are false')
}

var check = !(a>b)
console.log(check)

/////
console.log(a>b)
