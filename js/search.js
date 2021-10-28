var search_btn = document.getElementById("search_btn");
var search_line = document.getElementById("search_line");
var search = document.getElementById("header-bottom__search");

function my_Function(y) {
    if (y.matches) { // Если медиа запрос совпадает
        search_btn.onclick = function() {
            search_line.style.width = "218px";
            search_line.style.marginLeft = "9px";
            search.style.padding = "0px 2px 2px 0px";
            search.style.background = "#18171B";
        }
    } 
}
  
var y = window.matchMedia("(max-width: 1260px)");
my_Function(y); // Вызов функции прослушивателя во время выполнения
// y.addListener(my_Function); // Присоединить функцию прослушивателя при изменении состояния
