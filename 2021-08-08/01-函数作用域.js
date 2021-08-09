var a = 100;
function fn() {
    a = 1000;
    function fn1() {
        a++;
        console.log(a);
    }
    fn1()
    var a = 0
    console.log(a);
}
fn()
console.log(a);


// 相当于
var a = 100;
function fn() {
    var a;
    a = 1000;
    function fn1() {
        a++;
        console.log(a);
    }
    fn1();
    a = 0;
    console.log(a);
}
fn();
console.log(a);
