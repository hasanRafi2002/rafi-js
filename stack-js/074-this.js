
var rect = {
    width: 100,
    height: 50,

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



rect.draw()


////////////////////////////////////
console.log('\n')


function myFunc(){
    console.log(this)
    rect.printProperties()
}

new myFunc()


console.log('\n')
////////////////////////////

var another = {
    width: 47,
    height: 56,
    print: rect.printProperties
}

another.print()
console.log(another.print)