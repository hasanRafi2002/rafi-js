// Array is a Data Structure where we can organize multiple data under a single variable
// array literal method
var arr = [10, 20, 30, 40, 50]  // here the number of data is 5  ...

console.log(arr)
console.log(arr[0])     // array store data before an index .... it store first data before the value---( 0 ) and ...it store second data before the value ---( 1 ) and third data before the value ( 2 ) and go on...
console.log(arr[3])     // 
console.log(arr[6])     // it print undefined because in the position of 6 there is no data 

arr[5] = 60
console.log(arr)   // we can restore data in previous array ... 

arr[11] = 120
console.log(arr)         // we can restore data by putting some index empty
console.log(arr.length)  // here length is 12 ... though we put some index empty but the length is 12

// we can update data in previous index
arr[2] = 25
console.log(arr)


////////////////
// array constructor method
var arr1 = Array(1, 2, 3)
console.log(arr1)