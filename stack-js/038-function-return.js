function addAll(){
    var sum = 0
    for(var i=0; i<arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

var result = addAll(1,2,3)
console.log(result);


function person(a,b){
    return{
        Name: a,
        Email: b
    }
    console.log('it will never be shown');
}

var p1 = person('Rafi','rafi2003ten@gmail.com')
console.log(p1);