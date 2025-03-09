function functionName(){
    console.log('I am a Function');
}


function add(){
    var a = 10
    var b = 20
    console.log(a+b);
}


function sub(a,b){
    // var a = 40
    // var b = 70
    console.log(a-b);
}

//  in above we declare function but console.log();  output no value  ... because no function will be called....

functionName()       //  here function is called for printing


for (var i=0; i<10; i++){
    functionName()            //  here with loop we can print the same function for multiple time
}



////


add()
sub(70,80)
