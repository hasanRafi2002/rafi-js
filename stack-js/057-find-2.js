// implementation of find method

var arr = [7,4,8,9,6,2,1,70,9,3]

// making callback function for   find   method
function myFind(arr, cb){
    for(var i=0; i<arr.length; i++){
        if(cb(arr[i])){
            return arr[i]     // this is for value
           // return i        //  this is for index
        }
    }
}

////---> value
var result = myFind(arr, function(value){
    return value==9
})
console.log(result)

