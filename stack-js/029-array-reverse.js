// reverse an array

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// long method to reverse an array...

for(var i = 0; i<(arr.length/2); i++){

    var temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}

console.log(arr)         // here arr variable store the reverse data 

//// short method to reverse an array

console.log(arr.reverse())   // here arr variable store the anti-reverse data = normal data
console.log(arr.reverse())  //  here arr variable store the anti-anti-reverse data = reverse data