let n = prompt("enter a number = ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}
console.log(arr);


// calculating sum
let sum = arr.reduce((prev, curr) => {
    return prev+curr;
});
console.log("sum =",sum);


// calculating factorial
let factorial = arr.reduce((prev, curr) => {
    return prev*curr;
});
console.log("factorial = ",factorial);
