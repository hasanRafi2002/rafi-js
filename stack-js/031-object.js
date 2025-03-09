var point = {
    x: 10,
    y: 20
}

point.y = 40
point.z = 50          //     we can inside more variable without writing    var   

console.log(typeof(point))    //  object

    
//   object literal

console.log('     OBJECT LITERAL');

console.log(point)

console.log(point.x)
console.log(point.x + point.y);


//  object constructor

console.log('      OBJECT CONSTRUCTOR');

var obj = Object()
obj.a = 15
console.log(obj);

var obj1 = Object()
obj1.b = 20
console.log(obj1)

var obj2 = new Object()
obj2.c = 25
console.log(obj2);



///  setting object properties

console.log('      SETTING OBJECT PROPERTIES');

// dot(.) notation

point.x = 45
point.a = 16
//point.d = 44
console.log(point);
console.log(point.d);      //   it output undefined because  d  is under comment


/////   array notation

point['y'] = 1000

var prop = 'z'
point[prop] = 555
console.log(point);



//   removing data


console.log('      DATA REMOVING');

point.a = undefined          //   this make one value undefined
console.log(point);


delete point.a              //   this delete one value
console.log(point);




//////////     comparing two object

console.log('\n','     COMPARING TWO OBJECT','\n');

var obj1 = {
    a: 10,
    b: 20
}

var obj2 = {
    a: 10,
    b: 20
}

console.log(obj1==obj2);       /// it false because    though they are same but   their memory location is different


//  comparing with logic

if (obj1.a==obj2.a && obj1.b==obj2.b){
    console.log(true);
}else{
    console.log(false);
}



//// converting number into string ------ with  json

console.log(obj1);
console.log(JSON.stringify(obj1));



//     comparing with stringify method by json        ---->  converting number into string

console.log(JSON.stringify(obj1)==JSON.stringify(obj2))




