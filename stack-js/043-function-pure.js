//  what is pure function?

        //  it returns the same result if given the same arguments
        //  it does not cause any observal side effect

function sqr(n){
    return n*n                  // it is pure function because it has no side effect
}
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(4));
console.log(sqr(5));



///////////////


var n = 10

function change(){
    n=100                   //// it is not pure function.....because after calling function-----it change the variable value
}
console.log(n);            ////  it output  10   which is the value of the global variable
change()
console.log(n);            ////  but after calling the function   it output ---- 100  ......  because after calling the function   the value of the global variable is changed.......  for this reason it not pure function



////////////  another example

var point = {
    x: 45,
    y: 30
}

function printpoint(point){                //  it is not pure function
    point.x = 100
    point.y = 200
    return (point);
}

console.log(point);                         //  it output global variable values
printpoint(point)                           //  here we call the function
console.log(point);                         //  after calling the function the value of global variable is changed...and  output functions inside value..........