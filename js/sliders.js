var swiper1 = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
    type: "fraction",
  },
  grid: {
    rows: 2,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  slidesPerView: 3,
  slidesPerGroup: 3,
});

var swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination2",
    type: "fraction",
  },
  grid: {
    rows: 1,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  slidesPerView: 3,
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
});
