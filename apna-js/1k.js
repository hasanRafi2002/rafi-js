let cities = ["dhaka", "mymensingh", "rajshahi", "sylhet", "chittagong"];
let name1 = "rafi";
let heroes = ["ben","luffy","ace","boruto","sasuki","naruto","ironman", "thor", "hulk", "spiderman", "batman"]


console.log(name1.toUpperCase());


console.log(cities);
console.log(typeof(cities),"\n");


for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}



/////////////////////
console.log("\n");
/////////////////////

// we can also access array by --------> ( for of  loop)  or  (for in  loop)


for(let city of cities){
console.log(city.toUpperCase());
}



