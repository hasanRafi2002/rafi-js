//03- make callback function---> and do --> square, qube, etc
arr = [1,2,3]

// making callback function
function myMap(arr, cb){
    var newArr = []
    for(var i=0; i<arr.length; i++){
        var temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr
}



//to square an array from a callback function
var square = myMap(arr, function(value){
    return value*value
})
console.log(square)



// to qube an array from a callback function
var qube = myMap(arr, function(value){
    return value*value*value
})
console.log(qube)



// to multiply an array from a callback function
var mTen = myMap(arr, function(value){
    return value*10
})
console.log(mTen)