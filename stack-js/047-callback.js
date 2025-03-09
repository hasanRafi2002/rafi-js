// function sample(a,b,cb){
//     var c = a+b
//     var d = a-b
//     var result = sum(c,d)
//     return result
// }

// function sum(a,b){
//     return a+b
// }
// console.log(sample(5,8))


function sample(a,b,cb){
    var c = a+b
    var d = a-b
    var result = cb(c,d)
    return result
}

function sum(a,b){
    return a+b
}
console.log(sample(5,8,sum))            //// 5+8=13 , 5-8=-3 ,  ---> 13+(-3)=10

function sub(a,b){
    return a-b
}
console.log(sample(5,3,sub))            //// 5+3=8 , 5-3=2 ,  -----> 8-2=6

console.log('\n')
//////////////////////

var result = sample(5,8,function(c,d){
    return c*d
})
console.log(result)

