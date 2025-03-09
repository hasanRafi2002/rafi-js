// Create Empty Object
// Combine this with Constructor
// Connect Prototype of Objects
// Return Object

//////////////////////////////////////////
var Rectangle = function(width, height){

    this.width = width
    this.height = height

    this.draw = function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },

    this.printProperties = function(){
        console.log('My Width is '+ this.width)
        console.log('My Height is '+ this.height)
    }
}
//////////////////////////////////////////





function myNew(constructor){
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}

var rect1 = myNew(Rectangle, 45, 30)
rect1.draw()