var obj = {
x : 40,   y: 50 ,     z: 75
}


console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


/////   creating new object from previous object

console.log('\n','CREATING NEW OBJECT','\n');


/////////////////////
var obj1 = obj
obj1.x   = 70
obj1.y   = 200
                     ///////   here both object data will changed
console.log(obj);
console.log(obj1);
///////////////////////


///   here this is the alternative which  create new object...  and here by changing one both object data will not changed

var obj2 = Object.assign({}, obj)
obj2.x = 100

console.log(obj);
console.log(obj2);





