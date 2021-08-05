window.onload = function () {
    let delBtn = document.querySelector(".delBtn")

    let id = location.search;
    let goodsId = strToObj(id)
    $http.get("/goods/detail/" + goodsId.id, function (res) {
        console.log(res);
        let data = res.data;
        console.log(data);
        let html = `
        <div class="item">
        <img src="${data.img}" alt="">
        <div class="goods-title mt15">商品名字：
            <span>${data.name}</span>
        </div>
        <div class="goods-desc mt15">详情：
            <span>${data.goods_desc}</span>
        </div>
        <div class="now-price mt15">折后价：
            <span>${data.now_price}</span>
        </div>
        <div class="price mt15">原价：
            <span>${data.price}</span>
        </div>
        <div class="sales mt15">销量：
            <span>${data.sales}</span>
        </div>

        <div class="sales mt15">库存：
            <span>${data.total}</span>
        </div>
        </div>
    `
        document.querySelector("main").innerHTML = html;
    })
    delBtn.addEventListener("click", function () {
        console.log(111);
        $http.post("/goods/delete", { id: goodsId.id }, function (res) {
            console.log(res);
            location.href = './goodsList.html'
        })
    })
}