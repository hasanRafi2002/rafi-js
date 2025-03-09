// function inchToFeet(inch){
//     var feet = inch/12
//            //console.log(feet);
//     return feet

//     console.log(feet);       //  it does not output because return is called
//     console.log('rafi');
// }

//            //inchToFeet(166)

// var senior =[122, 144]
// console.log(inchToFeet(senior[1]));
// var a = 156
// console.log(inchToFeet(a));

// console.log(inchToFeet(188));


// var name = 'Tawhid'
// if (name.length>4){
//     name = 'Rafi'
//     // console.log(name);      // writing here is valid
// }
// console.log(name);

////////////


// var a =10
// var b =20
// console.log(a>b);
// console.log(b>a);
// console.log(a==b);

////////////////










///////////


// let fibo = [0,1]

// for(let i=2; i<=10; i++){
//     fibo[i]=fibo[i-1]+fibo[i-2]
//    // console.log(fibo[i],fibo[i-1],fibo[i-2]);
// }
// console.log(fibo);


////// fibonacci number in a iterative way

// function fibonacci(n){
//     let fibo=[0,1]
//     for(i=2; i<=n; i++){
//         fibo[i]=fibo[i-1]+fibo[i-2]
//     }
//     console.log(fibo);
// }

// fibonacci(10)
// fibonacci(99)
// fibonacci(100)
// fibonacci(110)



/////////   fibonacci number in a reccursive way

// function fibonacci(n){
//     if(n==0){
//         return 0
//     }
//     else if(n==1){
//         return 1
//     }
//     else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// let fibo=fibonacci(17)

// console.log(fibo);


////////////////


// function fibonacci(n){
//     if(n==0){
//         return [0]
//     }
//     else if (n==1){
//         return [0,1]
//     }
//     else{
//         let fibo=fibonacci(n-1)
//         let nextElement=fibo[n-1]+fibo[n-2]
//         fibo.push(nextElement)
//         return fibo
// } 
// }

// let fib=fibonacci(10)
// console.log(fib);




////////////           PRIME NUMBER


// function isPrime(n){
//     for(i=2; i<n; i++){
//         console.log('division with',i,'output remainder',n%i);
//         if(n%i==0){
//         return 'not a prime number'
//     }}return 'your number is a prime number'
// }
// let result = isPrime(157)

// console.log(result);





////////////          NUMBERS

// let num = 3.3456
// let result1 = Math.floor(num)                   ///    touch bowtom floor number
// let result2 = Math.ceil(num)                    ///    touch top   celing number
// let result3 = Math.round(num)                   ///    touch round  value number
// let result4 = Math.random()                     ///    touch randon  0to1 number
// console.log(result1, result2, result3, result4);




/////////
                    //////  SIX RANDOM NUMBER GAME


// for(var i=1; i<6; i++){
//     let randomNum = Math.random()*6
//     let output = Math.round(randomNum)
//     if(output==0){
//     }else if(output==1){
//     console.log(1);
//     return
//     }else if(output==2){
//         console.log(2);
//         return
//     }else if(output==3){
//         console.log(3);
//         return
//     }else if(output==4){
//         console.log(4);
//         return
//     }else if(output==5){
//         console.log(5);
//         return
//     }else if(output==6){
//         console.log(6);
//         return
//     }
    
// }



/////////////


// let business = 450
// let minister = 650
// let sochib = 350

// let max = Math.max(business, minister, sochib)

// if(max==business){
//     console.log('business is bigger');
// }else if(max==minister){
//     console.log('minister is bigger');
// }else{
//     console.log('sochib is bigger');
// }




//////////////////

// let business = 650
// let minister = 450
// let sochib   = 750

// if(business>minister){
//     if(business>sochib){
//         console.log('business is bigger');
//     }else{
//         console.log('sochib is bigger');
//     }
// }
// else{
//     if(minister>sochib){
//         console.log('minister is bigger');
//     }else{
//         console.log('sochib is bigger');
//     }
// }


///////////


// let business = 550
// let minister = 450
// let sochib   = 350

// if(business>minister && business>sochib){
//     console.log('business is bigger');
//     }else if (minister>business && minister>sochib){
//     console.log('minister is bigger');
//     }else{
//     console.log('sochib is bigger');
//     }




/////////////////         CHOOSING MAX VALUE


//let marks = [45, 67, 56, 80, 84, 89, 94, 23, 32, 35, 95, 99, 20, 15,75]
// let max = marks[0]
// for(let i=0; i<marks.length; i++){
//     let element = marks[i]
//     if(element>max){
//         max = element
//                             //////////  console.log() is not appropriate is here because many value will be printed here  so we call this outside the loop ......console.log('the highest value is :',max);
//     }
// }

// console.log('the highest value is :',max);




///////////////   sum of an array

// let numbers = [45, 66, 76, 85, 4, 33, 45, 12]
// let sum = 0

// for(let i=0; i<numbers.length; i++){
//     let element = numbers[i]
//     sum = sum+element
// }
// console.log('total of the numbers: ',sum);


///////////////    sum of an array with the help of function

// function getArraySum(numbers){
//     let sum = 0
//     for(let i=0; i<numbers.length; i++){
//         let element = numbers[i]
//         sum = sum+element
//     }
//     //return sum
//     console.log('sum of the array is: ',sum);
    
// }                                                                       ////////  here....   sum --->is equal to ----> getArraySum()
// let numbers1 = [23, 33, 54, 65, 66, 26, 53, 33]
// let numbers2 = [45, 54, 33, 67, 88, 97, 12, 34]
// getArraySum(numbers1)
// getArraySum(numbers2)


/////////  removing duplicates

// let name = [3, 5, 3, 6, 5, 7, 8, 9, 44, 34, 66, 45, 47, 88, 66]
// let uniqueName = []

// for(let i=0; i<name.length; i++){
//     let element = name[i]
//     let index = uniqueName.indexOf(element)
//     if(index==-1){
//         uniqueName.push(element)
//     }
// }
// console.log(uniqueName);


////////// word count
//  let speech = 'i am a good person. i  do not snore at night.'
// let count = 0
// for(let i=0; i<speech.length; i++){
//     let char = speech[i]
//     if(char==' ' && speech[i-1]!= ' '){
//         count++
//     }
// }
// count++
// console.log(count);

//////////////


// let speech = 'i am a good person. i  do not snore at night.'

// for(let i=0; i<speech.length; i++){
//     let char = speech[i]
//     console.log(char);
// }


///////////////////////

// function reverseString(str){
//     let reverse = ''
//     for(let i=0; i<str.length; i++){
//         let char = str[i]
//         reverse = char+reverse                      /// can not applied.... reversed+char
//     }return reverse
// }
// let statement = 'hello Alien bhai brother.'
// let forAlien = reverseString(statement)
// console.log(forAlien);




////////////////


/////// swaping

// let a = 5
// let b = 7
// let x = 5
// let y = 7
// let p = 5
// let q = 7
// ////
// console.log('before swap: a='+a,'b='+b,'x='+x,'y='+y,'p='+p,'q='+q);
// ////
// let temp = a
// a=b
// b=temp
// console.log('after swap: a='+a,'b='+b);
// ////
// x=x+y
// y=x-y
// x=x-y
// console.log('after swap: x='+x,'y='+y);
// ////
// [p,q]=[q,p]
// console.log('after swap: p='+p,'q='+q);



