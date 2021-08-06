require("../css/bookDetails.less");
document.ready(function () {
    let backBtn = document.querySelector(".back")
    let obj = utils.strGetObj(location.search);
    $http.get("/book/detail/" + obj.id, function (res) {
        console.log(res);
        let bookInfo = res.data[0];
        console.log(bookInfo);
        let date = new Date(bookInfo.book_ctime)
        console.log(date);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        let day = date.getDate();
        day = day > 10 ? day : "0" + day
        let time = year + "-" + month + "-" + day;

        let html = `
        <div class="item">
        <div class="imgBox"><img src="${bookInfo.book_imgurl}" alt=""> </div>
        <div class="name mt16">书名：<span>${bookInfo.book_name}</span> </div>
        <div class="time mt16">添加时间： <span>${time}</span></div>
        <div class="cate mt16">所属分类： <span>${bookInfo.book_cate}</span> </div>
        <div class="desc mt16">
            简介：<br>
            <span>${bookInfo.book_desc}</span>
        </div>
        </div>
        `
        document.querySelector("main").innerHTML = html;
    })

    backBtn.addEventListener("click", function () {
        location.href = "./booksList.html"
    })
})