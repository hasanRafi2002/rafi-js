
var arr = [7,4,8,9,6,40,-1,0,4,-5,-8,2,1,70,9,3]

//                         every method

//  if every number is even... then return true....if one is odd then   return  false
var res1 = arr.every(function(value){
    return value%2==0
})
console.log(res1)


// if every number is bigger or equal from zero(0) thn return true
var res2 = arr.every(function(value){
    return value >= 0
})
console.log(res2)


//                          some method

// if one is odd then return true
var res3 = arr.some(function(value){
    return value%2==1
})
console.log(res3)


// if one is lower than zero(0) then return true
var res4 = arr.some(function(value){
    return value<0
})
console.log(res4)