////////  data inserting
var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//insert 9 to index 3

//arr[3] = 9          // it replace 4 at the position 3
//arr.push(9)         // it insert 9 at last
// arr.unshift(9)      // it insert 9 at first


// here below---( 3 means position,  0 means no data will be removed, 9 means the value we insert  ) 
 arr.splice(3, 0, 9)          // it inserr 9 at position 3 without replacing 4
//arr.splice(3, 0, 9, 10)     // it insert 9 and 10 at position 3 without replacing 4

console.log(arr)

 

///////////// data removing

var arr = [1, 2, 3, 4, 5, 6, 7, 8]


// arr[3] = undefined     // it remove/replace number with undefined value
// arr.pop()             // it remove last number
// arr.shift()          // it remove first number

// here below ----( 3 means position,  2 means one value will be removed,  no data will be insert)
arr.splice(3, 2)           // it remove 4 and 5 at the from position 3 to 4

console.log(arr)
