function test(a,b,c){
    console.log(arguments);
}

test(20,33,49)

/// an alternative

function test1(a,b,c){
    for(var i=0; i<arguments.length; i++){
    console.log(arguments[i]);
}
}

test1(20,33,49,444)


//////   for adding all


function test3(a,b,c){                           //  if we call parameter (a,b,c....) we can access them as a variable
    var sum = 0
    for(var i=0; i<arguments.length; i++){
    sum += arguments[i]
}
console.log(sum);
}

test3(20,33,49)        /// output sum

test3(1,2,3,4,5,6,7,8,9)                        //   we can also work without calling parameter