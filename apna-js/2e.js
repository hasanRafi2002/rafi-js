let marks = [90, 88, 78, 93, 89, 98, 100, 70, 81]

let toppers = marks.filter((val) => {
    return val >= 90;
});
console.log(toppers);
