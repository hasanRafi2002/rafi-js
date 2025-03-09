// 5. we can pass function as arguments


function add(a,b){
    return a+b
}

function manipulate(a,b,func){
    var c = a+b
    var d = a-b


function multiply(){
    var m = func(a,b)
    return c*d*m
}
return multiply

}

var multiply = manipulate(3,4,add)

console.log(multiply())
console.log(multiply)



// 6. we can return function from another function


function add(a,b){
    return a+b
}

function manipulate(a,b,func){
    var c = a+b
    var d = a-b


                                    //// in below we direct return upper function  from other function....

return function(){                  // we can directly return one   Function   from other   Function  .....then we can store this function in one variable .... and we can call this function when we have needed
    var m = func(a,b)
    return c*d*m
}



}

var mlt= manipulate(3,4,add)
console.log(mlt())      //  answer is -49    ---> 7*(-1)*7   ---> a+b=7, a-b=-1

console.log(mlt)        //  [Function: multiply]   /   [Function (anonymous)]

