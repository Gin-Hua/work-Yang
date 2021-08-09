
// es6没有arguments


// es6 rest参数  真数组
// ...变量名 ===》rest参数
// ...扩展运算符
let sum = (...arr) => {
    console.log(typeof arr);        // object
}

// sum(1, 2, 4, 2)


// 例题：

let fn = (...arr) => {
    let len = arr.length;
    if (len == 1) {
        return arr[0];
    }
    if (len == 2) {
        return arr[0] + arr[1]
    }
    if (len == 3) {
        return (arr[0] + arr[1] + arr[2]) / len
    }
    if (len == 4) {
        return arr;
    }
    if (len == 5) {
        arr.sort((a, b) => a - b);
        return arr[0]

    }
    if (len == 6) {
        arr.sort((a, b) => b - a);
        return arr[0]
    }
    if (len >= 7) {
        return arr.sort((a, b) => a - b)
    }
}
console.log(fn(1, 3, 5,));



