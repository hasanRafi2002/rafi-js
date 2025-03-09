///EXTENDED TYPE OF LOGICAL OPERATOR

var name = 'RAFI'
var fullname =''
if (name.length == 0){
    fullname = 'MTH Rafi'
}
else{
    fullname = name
}
console.log(fullname)

////SHORT HAND TYPE OF LOGICAL OPERATOR

var name = ''

// here logical OR operation is done. If the right side is true, it output right side.....but if the right side is false then it output the left side...
var fullname = name || 'MTH Rafi'
console.log(fullname)

///// others
var isok = true
if (isok){
    console.log('everything is ok')
}
//another type of isok
var isok = true
isok && console.log('Everything is ok')

var isok = false
isok && console.log('Nothing is ok')    ////  it does not print any output
