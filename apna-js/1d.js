
console.log("\nfor-of loop\n");

let str = "HasanRafi";

for (let i of str) {
    console.log("i = ", i);
}

//-----------------------------------------
console.log("\nfor mesuring size\n");

let str1 = "shradha";
let size = 0;
for (let i of str1) {
    console.log("i = ", i);
    size++;
}

console.log("string size = ",size);