// slice , splice
// slice(start-index , end-index)
// splice(start-index , del-count , new-element)

let name1 = ["rafi", "alina", "alisa", "vivi", "nami", "stusi"]
let device = ["apple", "xiaomi", "samsung", "vivo"];
let food = ["chips" , "bread" , "cake" , "chocolate"];
let cities = ["dhaka", "mymensingh", "rajshahi", "sylhet", "chittagong"];
let heroes = ["ben","luffy","ace", "ironman", "thor"];


console.log(name1);
let name2 = name1.slice(2,5)
console.log(name2);


let del1 = device.splice(1,2,"lg","msi")
console.log(device);
console.log(del1);


// add element
food.splice(2,0,"meat", "rice")
console.log(food);


// delete element
cities.splice(3,2)
console.log(cities);


// replace element
heroes.splice(3,1,"rafi")
console.log(heroes);
