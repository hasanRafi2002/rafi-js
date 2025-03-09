var arr =[1,2,3,4,5]


function forEach(arr, cb){
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i],i,arr)
        
    }
}
/////////////////
// after callback function---....


//01-array-traversing
forEach(arr, function (value){
    console.log(value)
})



console.log('\n')


//02-printing value-index-array  and  doing sum
var sum = 0
forEach(arr, function(value,index,arr){
    console.log(value,index,arr)
    sum += value
})

console.log('\n',sum,'\n')


//03-to increase value for all index and replacing new array
forEach(arr,function(value,index,arr){
    arr[index] = value+5
})
console.log(arr)                        ////  here the  previous values of the array is replaced with the new values.....So the the array is replaced and changed

