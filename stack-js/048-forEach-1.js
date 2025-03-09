var arr =[1,2,3,4,5]

arr.forEach(function(value,index,arr){
    console.log(value,index,arr)
})

//////////
console.log('\n')



var sum = 0
arr.forEach(function(value){         ////  here with forEach method we do not need to declare-----> for loop....
    sum += value
})
console.log(sum)




console.log('\n')


///// array traversing-----

function forEach(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}

forEach(arr)



