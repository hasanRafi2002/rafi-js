var b = 10


function a(){
    var x = 5                   //// it is a function scope

    return function(){
        console.log(x)         //// it is also a function scope
    }                          //// here data come from another function scope  without calling argument so it is a clouser
}

var abc = a()
console.dir(abc);
