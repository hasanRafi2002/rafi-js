// function add(a,b){
//     var result = a+b
//     return result
// } 
// console.log(add(10,20));


function add(a,b){
    var result = a+b
    console.log(result);
} 

add(20,30)
add(40,70)


///

console.log('SUM OF ARRAY');
/////

var arr1 =[1,3,5,6,9]
var arr2 =[4,6,7,50,66]
var arr3 =[8,9,8,7,99,70,50,43]


var sum1 = 0
for(var i=0; i<arr1.length; i++){
    sum1 +=arr1[i]
                                        //// console.log()  inside---> {} return  loop wise... line by line... multiple outputs......
}
console.log(sum1);


var sum2 = 0
for(var i=0; i<arr2.length; i++){
    sum2 +=arr2[i]
}
console.log(sum2);



var sum3 = 0
for(var i=0; i<arr3.length; i++){
    sum3 +=arr3[i]
}
console.log(sum3);

//////

console.log('\n','SHORTCUT METHOD FOR SUM OF ARRAY','\n');


function sumofArray(arr){
var sum = 0
for(var i=0; i<arr.length; i++){
    sum +=arr[i]
}
console.log(sum);
}


sumofArray(arr1)
sumofArray(arr2)
sumofArray(arr3)