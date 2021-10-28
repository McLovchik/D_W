var burger = document.getElementById("burger");
var burger_open = document.getElementById("burger-open");
var burger_close = document.getElementById("burger-close");
var burger_list = document.getElementById("menu");

function myFunction(x) {
    if (x.matches) { // Если медиа запрос совпадает
        burger_open.onclick = function() {
            burger.style.transform = "translateY(0)";
            burger_list.style.transform = "translateY(0)";
        }
        burger_close.onclick = function() {
            burger.style.transform = "translateY(-102%)";
            burger_list.style.transform = "translateY(-150%)";
        }
    } 
}
  
var x = window.matchMedia("(max-width: 1260px)");
myFunction(x); // Вызов функции прослушивателя во время выполнения
// x.addListener(myFunction); // Присоединить функцию прослушивателя при изменении состояния
