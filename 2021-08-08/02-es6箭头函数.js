
// 1：定义函数
let fn = () => "你好呀";
console.log(fn());

// 箭头函数
// 去掉关键字，function，且小括号与大括号之前加上 '=>'
// 如果形参只有一个，可以省略()
// 如果没有形参，必须写()
// 如果函数体只有一句代码，可以省略{ }，同时必须省略return


// 定义数组
let arr = [1, 3, 200, 2, 4, 55, 78, 109, 0];

// foreach遍历数组
arr.forEach(item => {
    console.log(item);
})
console.log(arr);

// let arr1 = arr;

// 将数组 + 100
let arr1 = arr.map(item => item + 100)

// 将大于100的选出来
let arr3 = arr.filter(item => item > 100)
console.log(arr3);

// 排序
let arr4 = arr.sort((a, b) => a - b)
console.log(arr4);











