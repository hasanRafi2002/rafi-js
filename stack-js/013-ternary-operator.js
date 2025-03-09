var n = 11

////TYPE-1
var str = ''
if (n%2==0){
    str = 'EVEN'
}
else{
    str = 'ODD'
}
console.log(str)

////TYPE-2    ternary-operator
// condition ? true side : false side
// ? means ternary operator
var result = n%2 == 0 ? 'EVEN' : 'ODD'
console.log(result)