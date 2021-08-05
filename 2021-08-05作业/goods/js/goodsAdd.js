window.onload = function () {
    let img = document.querySelector(".goods-img")
    let name = document.querySelector(".goods-name")
    let desc = document.querySelector(".goods-desc")
    let nowPrice = document.querySelector(".goods-now-price")
    let price = document.querySelector(".goods-price")
    let sales = document.querySelector(".goods-sales")
    let total = document.querySelector(".goods-total")

    let addBtn = document.querySelector(".addBtn");

    addBtn.addEventListener("click", function () {
        console.log(111111111);
        if (img.value && name.value && desc.value && nowPrice.value && price.value && sales.value && total.value) {
            // console.log(img.value, name.value, desc.value, nowPrice.value, price.value, total.value);
            let data = {
                name: name.value,
                img: img.value,
                goods_desc: desc.value,
                price: price.value,
                now_price: nowPrice.value,
                sales: sales.value,
                total: total.value
            }
            $http.post("/goods/add", data, function (res) {
                console.log(res);
            })
        }
    })




}