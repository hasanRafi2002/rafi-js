var arr =  [4, 5, 6, 7, 8]
var arr1 = [5, 6, 7, 8, 9]
var arr2 = [2, 3, 4, 5, 6]

// join method

console.log(arr.join(' | '))

// fill method

arr.fill(true)
console.log(arr)      //  replaced all value by true

// concat method

var arr3 = arr1.concat(arr2)
console.log(arr3)

// isArray method

console.log(Array.isArray(arr1))            //// it returns true because arr1 is an array


/// clone new array with Array.from() method

var arr4 = Array.from(arr2)
console.log(arr4)


// why we use  Array.from()...?
 

var a = [1, 2]
var b = a
b[0] = 5
console.log(a)      // here answer will changed into [5,2].. because var a and var b both are changed by only changing var b....,,  but if we use    Array.from    this will not happened
console.log(b)

