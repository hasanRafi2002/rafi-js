// Generally ..WHILE LOOP are output infinity number of value......but FOR LOOP  does not do this .......but we can make for loop to output infinity number of value...

// INFINITY FOR LOOP

for (;;){
    var rand = Math.floor(Math.random()*10+1)
    if(rand==9){
        console.log('Winner Winner Chicken Dinner')
        break
    }
    else{
        console.log('You have got'+rand)
    }

    }
