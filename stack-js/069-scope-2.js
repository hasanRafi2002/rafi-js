// Function inside Function ---> Nested Function
// Loop inside Loop -----------> Nested Loop
// Condition inside Condition -> Nested Condition
// Scope inside Scope ---------> Nested Scope



var x = 55

function test(){
    var x = 45
    console.log(x)

    function nested(){
        var y = 65
       console.log(x)
        return y
    }
    console.log(nested())
    nested()
}
test()