function sayHi(n){
    if(n==0){
        return
    }
    console.log('Hi, I am calling',n)
    sayHi(n-1)
}
sayHi(10)


//  sum 1 to n
function sum(n){
    if(n==1){
        return 1
    }
    return n + sum(n-1)
}
console.log(sum(5))


// factorial

function fact(n){
    if(n==0){
        return 1
    }else if(n==1){
    return 1
    }
    return n*fact(n-1)
}
console.log(fact(5))


// sum of array

var arr = [1,3,4,6,8,9]

function sumOfArray(arr, lastIndex){
    if(lastIndex<0){
        return 0
    }
    return arr[lastIndex]+sumOfArray(arr, lastIndex-1)
}
console.log(sumOfArray(arr, arr.length-1))