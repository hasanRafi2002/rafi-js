var arr = [7,4,8,9,6,2,1,70,9,3]

////  value
var result = arr.find(function(value){
    return value==9
})
console.log(result)

////  index
var result = arr.findIndex(function(value){
    return value==9
})
console.log(result)

