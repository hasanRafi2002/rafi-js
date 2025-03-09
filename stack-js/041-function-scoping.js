/////  

/////  before ES6   block means   declaring a variable inside a function ......which variable we can not use outside the function
/////   we can access a variable everywhere .... if we declare a variable outside a function
////  in other language like c/c++  block is created  if we declare a variable inside a  {}  curly bracket...  but in javascript only function can create a block


var a = 'abc'        /////    it is global scope ......everyone can access this value


////   here function create block ... and   only-- child function   and its inside variable can access this function value    ....  but parents can not access the child function value 




function x(){
    //var a = 20
    function y(){
        var a = 10
        console.log(a);         //  function---  x -- can not access  the variable of function ---  y --        x is the parent of y   ---     but y can access the value of function x   because it is child 
    }
    console.log(a);
    y()
}
x()                             //    here x()  output the value of  function x and y



///////////////   another example



function test(n){
    function a(){
        return n%3 == 0
    }                                                   //// here we need not have to call   (n)   in  a() and b()   --- because a() and b() are child of function test(n)     so a() and b()  can access (n)  with out calling ...which is scoping
    function b(){
        return n%5 == 0
    }

if (a() && b()){
    console.log(n,'is a divisible by both 3 and 5');
}else{
    console.log('not a valid number');
}
}


test(10)                        ////  and gate return true if both are true
test(15)
test(30)
test(21)