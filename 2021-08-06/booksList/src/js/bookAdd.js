require("../css/bookAdd.less")
document.ready(function () {
    // 获取dom
    let backBtn = document.querySelector(".back")
    let addBtn = document.querySelector(".addBtn");
    let nameDom = document.querySelector(".title");
    let cateDom = document.querySelector(".cate");
    let descDom = document.querySelector(".desc-desc");
    let imgInpDom = document.querySelector(".imgInp")
    let imgAdd = document.querySelector("#imgAdd")

    const baseUrl = "http://139.9.177.51:5000";
    let imgurl;


    // 注册监听事件
    backBtn.addEventListener("click", function () {
        location.href = "./booksList.html"
    })

    // 上传图片
    imgInpDom.addEventListener("change", function () {
        console.log(this.files[0]);
        $updateFile("/book/upload", "imgurl", imgInpDom.files[0], function (res) {
            console.log(res);
            imgurl = baseUrl + res.imgurl;
            console.log(imgurl);
        })
    })

    // 添加图书
    addBtn.addEventListener("click", function () {
        console.log(123);
        if (nameDom.value && cateDom.value && descDom.value && imgurl) {
            let data = {
                bookName: nameDom.value,
                category: cateDom.value,
                desc: descDom.value,
                imgurl: imgurl
            };
            console.log(data);
            $http.post("/book/add", data, function (res) {
                console.log(res);
            })
        }






    })
    // 点击图片添加按钮，打开文件上传
    imgAdd.addEventListener("click", function () {
        imgInpDom.click();
    })

})