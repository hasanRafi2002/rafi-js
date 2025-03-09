// forEach  and  map  functionalities are almost same....
// forEach modify orginal array
// map create new array from orginal array an modify this

var arr = [1,2,3]

//01- map function for square array values

var sqrArr = arr.map(function(value){
     return value*value
})
console.log(arr)
console.log(sqrArr)


console.log('\n') 
 

//////////    implementing map function   with for loop



//02- square array values with for loop
function myMap(arr){
    var newArr=[]
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i]*arr[i]
        newArr.push(temp)
    }
    return newArr
}
console.log(myMap(arr))



