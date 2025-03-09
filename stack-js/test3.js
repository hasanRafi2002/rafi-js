//// animal counter

let animal = 0
function animalCounter(depth){
    if(depth<=10){
        animal=depth*50
    }else if(depth<=20){
        let firstPart = 10*50
        let remaining = depth-10
        let secondPart = remaining*100
        animal = firstPart+secondPart
    }else{
        let firstPart = 10*50
        let secondPart = 10*100
        let remaining = depth-20
        let thirdPart = remaining*300
        animal = firstPart+secondPart+thirdPart
    }
    //return animal
    console.log(animal);
}
//console.log('The number of animal is', animalCounter(12));
animalCounter(17)
animalCounter(37)
animalCounter(7)

