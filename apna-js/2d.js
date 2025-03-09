let arr = [5, 2, 8, 9, 13, 12, 4, 77, 34, 60]

const output =  arr.reduce((prev, curr) => {
    return prev>curr ? prev:curr;
})
console.log(output);   // print the greatest value
