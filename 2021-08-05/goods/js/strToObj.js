function strToObj(str) {
    let newStr = str.substr(1);
    // console.log(newStr);
    let arr = newStr.split("&");
    // console.log(arr);
    let obj = {}
    arr.forEach(function (item, index) {
        let newArr = item.split("=")
        // console.log(newArr);
        obj[newArr[0]] = newArr[1]
    })
    return obj;
}
// strToObj("?id=22&name=33")