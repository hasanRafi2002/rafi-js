function add(a,b,c){
    return a+b+c
}
var result1 = add(5,10,15)
console.log(result1)


//  add function with currying way

function currying(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

var result2 = currying(5)(10)(15)
console.log(result2)