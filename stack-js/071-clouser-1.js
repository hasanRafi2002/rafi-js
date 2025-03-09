// Clouser is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope...
// Able to remember and access it's lexical scope...
// When that function executing outside it's lexical scope...



function test(){
    var msg = 'I am learning Lexical Scope and Clouser'

    function sayMsg(){
        console.log(msg)
    }
    sayMsg()
}

test()


////////////



function test1(){
    var msg = 'I am learning Lexical Scope and Clouser'

    return function (){
        console.log(msg)
    }
}

var a = test1()
a()