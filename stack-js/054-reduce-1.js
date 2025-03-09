var arr = [1,2,3,4,5]


//01- to do sum
var sum = arr.reduce(function(prev, curr){
    return prev+curr
})
console.log(sum)



//02- sum with constant value
var cSum = arr.reduce(function(prev, curr){
    return prev+curr
},100)
console.log(cSum)


//03- for max value
var max = arr.reduce(function(prev, curr){
    return Math.max(prev,curr)
})
console.log(max)


//04- for max value
var min = arr.reduce(function(prev, curr){
    return Math.min(prev, curr)
})
console.log(min)