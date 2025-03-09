// FOR loops

// for (initializer - from where we start counting;    condition - where we stop;     increment/decrement - increasing value)

for (var i = 0; i < 100; i++){
    console.log((i+1)+ ' MTH Rafi')
}
/*
// this code is running lifetime...because the value of i is same and not increasing ...for this reason it can not reach at 100 so it is running for ever...
for (var i = 0; i < 100; i){
    console.log((i+1)+ ' MTH Rafi')
}

// this code is running fore ever because the value of i is always decreasing......and it can not reach +100 ....so that it is running for ever
for (var i = 0; i < 100; i--){
    console.log((i+1)+ ' MTH Rafi')
}

//it is running
for (var i = 0; i < 1000; i-=200){
    console.log((i+1)+ ' Rafi')
}
*/
for (var i = 0; i < 1000; i+=20){
    console.log(i+1 + ' Rafi')
}
/////// printing odd number from 1 to 100
for (var i =1; i<=100; i++){
    if(i%2==1){
        console.log(i)
    }
}

/////SUM with for loop
console.log('sum with for loop')

for(var i = 1; i<=10; i++){
    var sum = 0;
    sum += i
    console.log(sum)
}

//we again do the same thing just... outing the variable ...from inside the for loop .....but at that time we find the sum that we want...

var sum = 0;
for(var i = 1; i<=10; i++){
    sum += i
    console.log(sum)
}

///lets do the sum again ....and now we add some interactivity

var sum = 0;
for(var i = 1; i<=10; i++){
    //sum += i     wrong
    console.log(sum + '+' + i + '=' + (sum+i))
    sum += i
}

////lets do the sum again ....and now we do this thing for odd number

var sum = 0;
for(var i = 1; i<=10; i++){
    if (i%2==1){
    console.log('odd '+ sum + '+' + i + '=' + (sum+i))
    sum += i
}}
