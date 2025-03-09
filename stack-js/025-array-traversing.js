var arr = [4, 5, 6, 7, 1, 8, 9]

for (var i = 0; i<arr.length; i++){
    console.log(arr[i])    //console.log(arr[i]+2)     it add 2 with all value
}


///// summation
console.log('summation')


var sum = 0
for(var i = 0; i<arr.length; i++){
    sum += arr[i]
    console.log(sum)     // it print sum line by line
}
console.log('Total',sum)         // it print only the sum


// even number 
console.log('even number')

for(var i = 0; i<arr.length; i++){
    if (arr[i]%2==0){
        console.log(arr[i])
    }
}


////////
console.log('break');

console.log(arr[1]);
console.log(arr[arr.length-1]);