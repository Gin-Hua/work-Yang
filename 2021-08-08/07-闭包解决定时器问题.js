for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}       // 5,5,5,5,5



for (var i = 0; i < 5; i++) {
    // ES5块级作用域
    ; (function (index) {
        setTimeout(function () {
            console.log(index);
        }, 1000)
    })(i)
}


// let { } 形成块级作用域
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
