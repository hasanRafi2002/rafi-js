// arrow_function

const countVowels = (string) => {
    let count = 0;
    for (const char of string) {
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++
        }
    }
    console.log(count);
}
countVowels("hasanrafi")