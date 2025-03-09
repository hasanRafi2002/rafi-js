let items = [250, 645, 300, 900, 50];

let val = items;

for(let i=0; i<items.length; i++){
    let offer = (items[i]*10)/100;
    items[i] -= offer;
    console.log("the offer price at index",i,"is =",items[i]);
}


