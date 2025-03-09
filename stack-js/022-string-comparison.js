// string comparison
// lexical order  --->   z > y > x >......> b > a > Z > Y > X >.......> B > A

var a = 'abc'
var b = 'bcd'
console.log(a<b)       // it is true
console.log('d' > 'f')  // it is false
console.log('001'==1)   // it is true