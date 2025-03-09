
let items = [250, 645, 300, 900, 50];

let i = 0;


for (let val of items){
    console.log(`value at index ${i} = ${val}`);
    let offer = (val*10)/100;
    items[i] = items[i]-offer;
    console.log(`value after offer = ${items[i]}\n`);
    i++;
}
