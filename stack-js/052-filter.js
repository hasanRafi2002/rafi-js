var arr = [ 4,8,1,3,5,6,4,3,9]



// for only even value in an array
var evenArr = arr.filter(function(value){
    return value%2 == 0
})
console.log(evenArr)



// for only odd value in an array
var oddArr = arr.filter(function(value){
    return value%2 == 1
})
console.log(oddArr)



console.log('\n')



/////   implementing filter  --- with for loop


function myFilter(arr){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(myFilter(arr))

