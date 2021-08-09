// 闭包：函数内部的变量，



var money = 600;
// 小源花钱
function fn() {
    money -= 100;
    console.log(money);
}
// 爸爸花钱

function fn1() {
    money -= 50;
    console.log(money);
}
// 小源花钱
fn()
// 爸爸花钱
fn1()
fn()
fn1()



// 用闭包
function mom() {
    var money = 500;
    return function () {
        money -= 100;
        console.log(money);
    }
}

let spendMoney = mom();
spendMoney();
spendMoney();


function mother() {
    var money = 500;
    return function son(params) {
        money -= 100;
        console.log(money);
    }
}

let sonMoney = mother();
console.log("-----------------------");
sonMoney();

