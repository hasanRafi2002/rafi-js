function greet(msg){
    function greetings(Name){
    return msg+', '+Name+'!'
}
return greetings
}

var gm = greet('Good Morning')
var gn = greet('Good Night')
var hello = greet('Hello')
var msg = gm('Hasan Rafi')
/////////////
console.log(gn('Twinkle Cats'))
console.log(msg)
console.log(hello('Tawhid Rafi'))


console.log('\n')

/////

function power(b){
    return function(n){
        var result = 1
        for(var i=0; i<b; i++){
            result *= n
        }
        return result
    }
}

var power10 = power(10)
var power5 = power(5)
var power3 = power(3)
var power2 = power(2)

console.log(power10(2))     // 2 to the power 10
console.log(power5(2))
console.log(power3(2))
console.log(power2(2))

