function print(ins){
    console.log(ins)
}




var x = 55

// here because of availability of x value inside function the outter value is not taken...
function test(){
    var x = 45
    print(x)
}

test()




var y = 65

////  here outter value of y is taken...
function test1(){   
    print(y)
}

test1()