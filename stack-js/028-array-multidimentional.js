var arr = [
    [78, 71, 80, 90],
    [80, 75, 90, 86],
    [71, 75, 79, 80]
]

console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])

////

console.log(arr[0][0])
console.log(arr[0][3])
console.log(arr[1][2])

//// array with loop .... like matrix...

for(var i = 0; i<arr.length; i++){
    for(var j = 0; j<arr[i].length; j++){

        console.log('Element', '('+i+','+j+')' , ':',arr[i][j])
        }
}