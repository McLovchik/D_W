// var header_bottom__hidden = document.querySelectorAll('.header-bottom__hidden');
// var header_bottom__hidden_list = document.querySelectorAll('.header-bottom__hidden-list');
// var header_bottom__hidden_item = document.querySelectorAll('.header-bottom__hidden-item');

// header_bottom__hidden.setAttribute("tabindex", "-1");
// header_bottom__hidden_list.setAttribute("tabindex", "-1");
// header_bottom__hidden_item.setAttribute("tabindex", "-1");

// header_bottom__hidden.tabindex = -1;
// header_bottom__hidden_list.tabindex = -1;
// header_bottom__hidden_item.tabindex = -1;


$(document).ready(function() {
    $(".header-bottom__hidden").attr("tabindex", "-1");
    $(".header-bottom__hidden-list").attr("tabindex", "-1");
    $(".header-bottom__hidden-item").attr("tabindex", "-1");
});
