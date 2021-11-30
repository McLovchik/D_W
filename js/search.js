if (window.matchMedia('(min-width: 881px)').matches) {
    document.querySelector("#search_btn").addEventListener("click", function() {
        document.querySelector(".search_line").classList.add("search_line-active");
        document.querySelector(".header-bottom__search").classList.add("header-bottom__search-active");
    })
      
    document.addEventListener("click", function(e) {
        let target = e.target;
        let search_line = document.querySelector(".search_line");
        if (!target.closest(".header-bottom__search")) {
            search_line.classList.remove("search_line-active");
            document.querySelector(".header-bottom__search").classList.remove("header-bottom__search-active");
        }
    })
}



if (window.matchMedia('(max-width: 880px)').matches) {
    document.querySelector("#search_btn").addEventListener("click", function() {
        document.querySelector(".header-top__logo").style.visibility = "hidden";
        document.querySelector(".burger-open").style.visibility = "hidden";
        document.querySelector(".header-bottom__search").style.right = "0";
        document.querySelector(".header-bottom__search").style.position = "relative";
        document.querySelector(".search_close").style.visibility = "visible";
        document.querySelector(".header-bottom__search").style.width = "95%";
        document.querySelector(".search_line").style.width = "90%";
        // document.querySelector(".search_line").classList.add("search_line-active");
        // document.querySelector(".header-bottom__search").classList.add("header-bottom__search-active");
    })
      


    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header-bottom__search")) {
            document.querySelector(".header-top__logo").style.visibility = "visible";
            document.querySelector(".burger-open").style.visibility = "visible";
            document.querySelector(".header-bottom__search").style.right = "49px";
            document.querySelector(".header-bottom__search").style.position = "absolute";
            document.querySelector(".search_close").style.visibility = "hidden";
            document.querySelector(".header-bottom__search").style.width = "min-content";
            document.querySelector(".search_line").style.width = "0%";
        }
    })
}


if (window.matchMedia('(max-width: 670px)').matches) {
    document.querySelector("#search_btn").addEventListener("click", function() {
        document.querySelector(".header-bottom").style.background = "rgba(0, 0, 0, 0.4)";
        document.querySelector(".header-bottom").style.padding = "0 0 20px 0";
        document.querySelector(".search_line").style.width = "57%";
        document.querySelector(".header-bottom__search").style.top = "0";
        document.querySelector(".header-bottom__search").style.textAlign = "center";
        document.querySelector(".header-top").classList.add("header-top_for-search");
        document.querySelector(".header-bottom").classList.add("header-bottom_for-search");
        document.querySelector(".header-bottom").style.background = "none";
    })
      


    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header-bottom__search")) {            
        document.querySelector(".header-bottom").style.background = "none";
        document.querySelector(".header-bottom").style.padding = "0 0 0 0";
        document.querySelector(".search_line").style.width = "0";
        document.querySelector(".header-bottom__search").style.top = "-68px";
        document.querySelector(".header-bottom__search").style.textAlign = "unset";
        document.querySelector(".header-top").classList.remove("header-top_for-search");
        document.querySelector(".header-bottom").classList.remove("header-bottom_for-search");
        // document.querySelector(".header-bottom").style.background = "none";
        }
    })
}


// var search_btn = document.getElementById("search_btn");
// var search_line = document.getElementById("search_line");
// var search = document.getElementById("header-bottom__search");

// function my_Function(y) {
//     if (y.matches) { // Если медиа запрос совпадает
//         search_btn.onclick = function() {
//             search_line.style.width = "218px";
//             search_line.style.marginLeft = "9px";
//             search.style.padding = "0px 2px 2px 0px";
//         }
//     } 
// }
  
// var y = window.matchMedia("(max-width: 1305px)");
// my_Function(y); // Вызов функции прослушивателя во время выполнения



// y.addListener(my_Function); // Присоединить функцию прослушивателя при изменении состояния


// function my_Function_z(z) {
//     if (z.matches) { // Если медиа запрос совпадает
//         search_btn.onclick = function() {
//             search_line.style.width = "100%";
//             search_line.style.marginLeft = "9px";
//             search.style.padding = "0px 2px 2px 0px";
//             // search.style.background = "#18171B";
//         }
//     } 
// }
  
// var z = window.matchMedia("(max-width: 880px)");
// my_Function_z(z); // Вызов функции прослушивателя во время выполнения
// y.addListener(my_Function); // Присоединить функцию прослушивателя при изменении состояния