let a = 111;

// 立即执行函数，引入到js页面上，立即执行这一部分代码
// 一般情况下，一个js文件，只要一个立即执行函数

/* ; (function () {
    console.log(123);
})()
    ; (function () {
        console.log(456);
    }) */

// 等同于
// ; (function () {
//     console.log(123);
//     console.log(456);
// })()


// 封装
; (function (i) {
    console.log(i);
})(100)
