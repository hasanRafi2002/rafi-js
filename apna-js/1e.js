let gameNum = 25;
let userNum = prompt("guess the game number = ");



while (userNum != gameNum) {
    userNum = prompt("you enter wrong number. guess again = ");       // in prompt--->> number are stored in string format
}

console.log("congratulation! you enter the right number...");