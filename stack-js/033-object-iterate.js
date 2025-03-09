var obj ={
    x:40,
    y:60,
    z:75
}


console.log('x' in obj);
console.log('y' in obj);
console.log('p' in obj);

// ////////

for (var i in obj){
    console.log(i);
   // console.log(obj[i]);
    console.log(i + ': ' + obj[i]);
}


