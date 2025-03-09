// document.body.style.background = 'yellow';


let div = document.querySelector("div");
console.log("div");


let id = div.getAttribute("id");
console.log("id");

let name = div.getAttribute("name");
console.log("name");


let newBtn = document.createElement("button");
newBtn.innerText = "click me!";
console.log(newBtn);

let p = document.querySelector("p");
p.after(newBtn);





let newHeading = document.createElement("h1");
newHeading.innerHTML = "Hi! I'm Rafi"
document.querySelector("body").prepend(newHeading);
document.querySelector("h1").style.color = "#076116";



let para = document.querySelector("p")
para.remove();

let para1 = document.querySelector("p")
para1.classList.add("newClass");



let bt2 = document.querySelector("#bt2");
bt2.onclick = ()=>{
    console.log("button 2 was clicked");
    
    let a = 25;
    a++;
    console.log(a);
    
    
    
}

let bt3 = document.querySelector("#bt3");
bt3.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}





// -----------------
let s1 = document.querySelector("#s1");
s1.addEventListener("click", (evt)=>{
    console.log("server-1 was clicked");
    console.log(evt);
})


// ------------


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";


modeBtn.addEventListener("click", ()=>{

    if (currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

    }

    console.log(currMode);
    
})