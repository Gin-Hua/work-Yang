function getNum() {
    let num = 0;
    return function () {
        num++;
        return num;
    }
}

let add = getNum();
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());


console.log("-------------------");
function num() {
    let num = 0;
    return function () {
        num++;
        console.log(num);
    }
}
let numFn = num();
numFn();
numFn();
numFn();
numFn();