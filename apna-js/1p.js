// concat , unshift , shift

// push     --> add to end
// unshift  --> add to start

// pop      --> delete from end and return
// shift    --> delete from start and return


let device1 = ["apple", "xiaomi", "samsung", "vivo"];
let device2 = ["sony", "nokia"];

let device3 = device1.concat(device2)
console.log(device3);


let device4 = device1.unshift("oppo");
console.log(device1);
console.log(device4);


let device5 = device1.shift()
console.log(device1);
console.log(device5);





