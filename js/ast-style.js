// var art_style = document.getElementsByClassName('header-bottom__item');
//     for (var i=0; i<art_style.length; i++) {
//         art_style[i].addEventListener('mouseenter', showHidden, false);
//         art_style[i].addEventListener('mouseleave', hideHidden, false);
//     }
//     function showHidden(art_style) {
//         if (this.children.length>1) {
//             this.children[1].style.height = "300px";
//             this.children[1].style.overflow = "visible";
//             this.children[1].style.opacity = "1";
//         } else {
//             return false;
//         }
//     }
//     function hideHidden(art_style) {
//         if (this.children.length>1) {
//             this.children[1].style.height = "0px";
//             this.children[1].style.overflow = "hidden";
//             this.children[1].style.opacity = "0";
//         } else {
//             return false;
//         }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     document.querySelectorAll(".header-bottom__btn").forEach(item => {
//         item.addEventListener("click", function() {
//             let btn = this;
//             let dropdown = this.parentElement.querySelector(".header-bottom__hidden");
            
//             document.querySelectorAll(".header-bottom__btn").forEach(el => {
//                 if (el != btn) {
//                     el.classList.remove("active--btn");
//                 }
//             });
            
//             document.querySelectorAll(".header-bottom__hidden").forEach(el => {
//                 if (el != dropdown) {
//                     el.classList.remove("header-bottom__hidden-active");
//                 }
//             })
//             dropdown.classList.toggle("header-bottom__hidden-active");
//             btn.classList.toggle("active--btn")
//         })
//     })
  
//     document.addEventListener("click", function(e) {
//         let target = e.target;
//         if (!target.closest(".list")) {
//             document.querySelectorAll(".header-bottom__hidden").forEach(el => {
//                 el.classList.remove("header-bottom__hidden-active");
//             })
//             document.querySelectorAll(".header-bottom__btn").forEach(el => {
//                 el.classList.remove("active--btn");
//             });
//         }
//     })
// })


let intervalId;

document.querySelectorAll('.header-bottom__btn').forEach(e => {
    e.addEventListener('click', e => {
        const hidden = e.currentTarget.dataset.path;
        document.querySelectorAll('.header-bottom__hidden').forEach(e => {
            if (!document.querySelector(`[data-target=${hidden}]`).classList.contains('open')) {
                e.classList.remove('header-bottom__hidden-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${hidden}]`).classList.add('header-bottom__hidden-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${hidden}]`).classList.add('open');
                }, 0);
            }

            if (document.querySelector(`[data-target=${hidden}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${hidden}]`).classList.remove('header-bottom__hidden-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${hidden}]`).classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == document.querySelector(`[data-target=${hidden}]`) || e.target == document.querySelector(`[data-path=${hidden}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${hidden}]`).classList.remove('header-bottom__hidden-active');
                    document.querySelector(`[data-target=${hidden}]`).classList.remove('open');
                }
            }
        });
    });
});
