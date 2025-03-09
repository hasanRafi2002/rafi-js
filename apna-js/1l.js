let marks = [98,95,87,84,91,85,80,90];

let sum = 0;

for(let val of marks){
    sum += val;
}

console.log("the sum is =", sum);

let avg = sum/marks.length;
console.log(`average mark is = ${avg}`);
