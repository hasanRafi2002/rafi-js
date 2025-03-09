//  First class function

function add(a,b){
    return a+b
}

// 1. a function can be stored in a variable
var sum = add
console.log(sum(5,8));
console.log(typeof sum);           //   in javascript function is an object

// 2. a function can be stored in an array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](5,3));

// 3. a function can be stored in an object
var obj ={
    sum: add
}
console.log(obj);
console.log(obj.sum(7,9));

// 4. we can create function as needed------- we can output value when needed   
setTimeout(function(){
    console.log('i have created..after 2 seconds')
},2000)




///////////////////////////////
console.log('\n','HIGHER MODULE','\n')



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

    // function multiply(){
    //     var m = func(a,b)
    //         return c*d*m        
    // }
    // return multiply

                                    //// in below we direct return upper function  from other function....

return function(){                  // we can directly return one   Function   from other   Function  .....then we can store this function in one variable .... and we can call this function when we have needed
    var m = func(a,b)
    return c*d*m
}



}

var multiply = manipulate(3,4,add)
console.log(multiply())      //  answer is -49    ---> 7*(-1)*7   ---> a+b=7, a-b=-1
console.log(multiply)        //  [Function: multiply]   /   [Function (anonymous)]


