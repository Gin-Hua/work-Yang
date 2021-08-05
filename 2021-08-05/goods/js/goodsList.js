window.onload = function () {
    // 发送请求，获取商品列表，动态渲染页面
    $http.get("/goods/list", function (res) {
        console.log(res);
        console.log(res.data);
        let goodsArr = res.data;
        console.log(goodsArr);
        // 循环渲染页面
        let html = ""
        goodsArr.forEach(function (item, index) {
            html += `
            <a href="./goodsDesc.html?id=${item.id}">
                <div class="item">
                    <div class="imgBox">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="item-desc">
                        <div class="title">
                        ${item.name}
                        </div>
                        <div class="title-desc">
                        ${item.goods_desc}
                        </div>
                        <div class="money">
                            <div class="now-price">
                                现价 <span>${item.now_price}</span>
                            </div>
                            <div class="price">
                                原价 <span>${item.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            `
        })
        console.log(html);
        document.querySelector("main").innerHTML = html;

    })

    document.querySelector(".addBtn").addEventListener("click", function () {
        location.href = "./goodsAdd.html"
    })




}