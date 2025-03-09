var a = 100
//newPrint(a)

print(10)

var newPrint = print

//                                      if we call  ---> newPrint(a)    here we get connect output 


function print(a){
    console.log(a)
}

print(a)



// Creational Phase
// a = undefined
// newPrint = undefined
// print = referrence


// Executional Phase
// a = 100
// newPrint = referrence