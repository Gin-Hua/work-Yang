require("../css/booksList.less")
document.ready(function () {

    let addBtn = document.querySelector(".addBtn");
    let mainDom = document.querySelector("main");
    let delAllBtn = document.querySelector(".delAll");
    let deleteBtn = document.querySelector(".delete")
    let bookList;
    let booksArr = [];

    // 发送请求，渲染页面
    $http.get("/book/bookList", function (res) {
        // console.log(res);
        bookList = res.data;
        console.log(bookList);
        let html = ""
        bookList.forEach(function (item, index) {
            html += `
            <div class="item mt16 dpflex">
            <div class="choose"> <input type="checkbox"></div>
            <div class="cntent">
                <a href="./bookDetails.html?id=${item.id}">
                    <div class="book-img">
                        <img src="${item.book_imgurl}" alt="">
                    </div>
                    <div class="book-desc">
                        <div class="box  dpflex flexcol">
                            <div class="titlen mt10">${item.book_name} </div>
                            <div class="classify mt10">
                                分类：<span>${item.book_cate}</span>
                            </div>
                            <div class="desc mt10">${item.book_desc}</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="del-btn"><button>删除</button></div>
        </div>
            `
            booksArr.push(item.id)
        })
        // console.log(html);
        // console.log(booksArr);
        mainDom.innerHTML = html;
    })
    // 点击添加，跳转页面
    addBtn.addEventListener("click", function () {
        console.log(123);
        location.href = "./bookAdd.html"
    })

    // 点击删除按钮，删除对应的图书
    mainDom.addEventListener("click", function (e) {
        let delBtn = document.querySelectorAll(".del-btn>button");
        if (e.target.nodeName == "BUTTON") {
            console.log(delBtn);
            for (let i = 0; i < delBtn.length; i++) {
                delBtn[i].addEventListener("click", function () {
                    let id = bookList[i].id;
                    console.log(id);
                    $http.get("/book/delete", { bookId: id }, function (res) {
                        console.log(res);
                    })
                })
            }

        }
    })


    /*  mainDom.addEventListener("click", function (e) {
         if (e.target.nodeName == "INPUT") {
             let checkBox = document.querySelector(".choose>input");
             console.log(checkBox.checked);
         }
     }) */

    // 点击复选框，进行批量删除
    delAllBtn.addEventListener("click", function () {
        let checkBtn = document.querySelectorAll(".choose>input");
        // console.log(checkBtn[0].checked);
        let bookIds = []
        for (let i = 0; i < checkBtn.length; i++) {
            if (checkBtn[i].checked) {
                console.log(checkBtn[i].checked);
                let id = bookList[i].id;
                bookIds.push(id);
                // console.log(bookIds);
            }
        }
        $http.post("/book/batchdelete", { bookIds: bookIds }, function (res) {
            console.log(res);
        })
        location.reload()

    })

    // 点击全删，进行图书的全部删除
    deleteBtn.addEventListener("click", function () {
        $http.post("/book/batchdelete", { bookIds: booksArr }, function (res) {
            console.log(res);
        })
        location.reload()
    })

})