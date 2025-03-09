// WHILE LOOP
//var i = 0
//while (i<10){
//    console.log(i+1 + ' MTH Rafi')
//    i++
//}

/////// In while loop only conditiobn is avialable...and here this loop firstly check the condition then output value ....if the condition is true..
var isRunning = true
while (isRunning){
    var rand = Math.floor(Math.random()*10+1)
    if (rand == 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false
    }else{
    console.log('You have got '+ rand)
}}

// DO WHILE LOOP
////// In do while loop it firstly output a value forcely....then check the condition
var isRunning = false
while (isRunning){
    console.log('I am Running')    ///no output because false.........BUT when true it gives infinity output if we do not break...so by giving break statement  we can break the output with single one 
//break
}
/////

do{
    console.log('I am Running')
}
while(isRunning)