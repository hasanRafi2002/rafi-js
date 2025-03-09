var person =[
    {
        name1: 'Rafi',
        age:21
    },
    {
        name2: 'Tawhid',
        age:18
    },
    {
        name3: 'Hasan',
        age:20
    }
]

var arr = [7,4,8,9,6,40,-1,0,4,-5,-8,2,1,70,9,3]


// general sort method
arr.sort()               // this type of sort is ----> Name  ---> here firstly declare sign , then number wise sorting...   like.... -1, -20, -3, -8, 0, 1, 10, 13, 2, 3, 33, 4, 5, 6, 77, 8, 9
console.log(arr)


// advanced sort method with function...

// Accending sort method...   this type of sort is  ---> Number
arr.sort(function(a,b){
    if(a>b){
        return 1
    }else if(a<b){
        return -1
    }else{
        return 0
    }
})
console.log(arr)



// Deccending sort method...   this type of sort is  ---> Number
arr.sort(function(a,b){
    if(a>b){
        return -1
    }else if(a<b){
        return 1
    }else{
        return 0
    }
})
console.log(arr)


// person variable sorting with age with the type of --->Number

person.sort(function(a,b){
    if(a.age>b.age){
        return 1
    }else if(a.age<b.age){
        return -1
    }else{
        return 0
    }
})
console.log(person)