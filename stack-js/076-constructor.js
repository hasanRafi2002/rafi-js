
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

    
    var rect1 = new Rectangle(10,8)       //    without    new     keyword there will be an error...
    rect1.draw()
    
    console.log('\n')
    
    var rect2 = new Rectangle(20,16)
    rect2.draw()