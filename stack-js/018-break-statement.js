// doing the while loop things using break statement


while (true){
    var rand = Math.floor(Math.random()*10+1)
    if (rand == 9){
        console.log('Winner Winner Chicken Dinner')
        break
    }else{
    console.log('You have got '+ rand)
}}


//// another code of brake statement--using for loop..
//// start processing and running and become stop after getting the commands --TRUE VALUE
for (var i = 1; i<10; i++){
    if(i%5==0){
        break
    }
    else{
        console.log(i)
    }
}