var doings_btn = document.getElementById("doings__btn");
var doings_hidden_items = document.getElementsByClassName("doings__item");
doings_btn.onclick = function() {
    doings_btn.style.display = "none";
    for (var i = 0; i < doings_hidden_items.length; i += 1) {
        doings_hidden_items[i].style.display = "block";
    }
}


const doings_slider = document.querySelector('.doings__swiper-content');

let doingsSwiper;

function mobileSlider() {
	if (window.innerWidth <= 670 && doings_slider.dataset.mobile == 'false') {
		doingsSwiper = new Swiper(doings_slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'doings__item',
			pagination: {
				el: '.doings__swiper-pagination',
				clickable: true,
			},
		});

		doings_slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 670 && doings_slider.dataset.mobile == 'true') {
		doings_slider.dataset.mobile = 'false';
		if (doings_slider.classList.contains('swiper-initialized')) {
			doingsSwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});