
var createRect = function(width, height){

return{
    width: width,
    height: height,

    draw: function(){
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },

    printProperties: function(){
        console.log('My Width is '+ this.width)
        console.log('My Height is '+ this.height)
    }
}
}

var rect1 = createRect(10,8)
rect1.draw()

console.log('\n')

var rect2 = createRect(20,16)
rect2.draw()