document.body.style.background = 'yellow';
document.body.childNodes[7].innerText = 'the paragraph is changed';

let myid = document.getElementById("myId");
console.dir("myid");
console.log("myid");


let myclass = document.getElementsByClassName("myClass")

console.dir("myclass");
console.log("myclass");


let paras = document.getElementsByTagName("p");
console.dir("paras");
console.log("paras");

// let firstEl = document.querySelector("p");
// console.dir("firstEl");

let allEl1 = document.querySelectorAll("p");
console.dir("allEl");


// let firstEl1 = document.querySelector(".myClass");
// console.dir("firstEl1")

let div = document.querySelector("div");
console.dir("div")