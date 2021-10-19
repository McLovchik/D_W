var doings_btn = document.getElementById("doings__btn");
var doings_hidden_items = document.getElementsByClassName("doings__item");
doings_btn.onclick = function() {
    doings_btn.style.display = "none";
    for (var i=3; i<doings_hidden_items.length;i+=1) {
        doings_hidden_items[i].style.display = "block";
    }
}