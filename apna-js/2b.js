let arr = [2, 5, 6, 8, 12, 13, 14, 15]


let arr1 = arr.filter((val) => {
    return val>10;
});
console.log(arr1);


let evenArr = arr.filter((val) => {
    return val%2 === 0;
})
console.log(evenArr);


let oddArr = arr.filter((val) => {
    return val%2 !== 0;
})
console.log(oddArr);

