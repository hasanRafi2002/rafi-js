// NESTED LOOP
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

//wrong method
var n = 5
for(var i = 1; i <= n; i++){
    for(var j = 1; j <= i; j++){
     console.log(j)
    }
}

// Right method
var n = 5
for (var i = 1; i <= n; i++){
    var result = ''
    for (var j = 1; j<=i; j++){
        result += j + ' '
    }
    console.log(result)
}

///

var n = 10
for( i = 1; i <= n; i++){
    var result=''
    for(var j = 1; j<=n; j++){
        result += ' * '
    }
    console.log(result)
}