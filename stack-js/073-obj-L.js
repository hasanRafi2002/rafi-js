var rect = {
    width: 100,
    height: 50,

    draw: function(){
        console.log('I am a rectangle')
        console.log('My Width is '+ this.width)
        console.log('My Height is '+ this.height)
    }
}

rect.draw()
rect.height = 100
rect.draw()