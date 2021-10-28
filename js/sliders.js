
let gallerySlider = new Swiper(".gallery__swiper-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  // loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__swiper-btn--next",
    prevEl: ".gallery__swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    900: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1261: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 54
    },

    // 1440: {
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   grid: {
    //     rows: 2
    //   },
    //   spaceBetween: 54
    // },

    1751: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

let editionsSlider = new Swiper(".editions__swiper-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".editions__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".editions__swiper-btn--next",
    prevEl: ".editions__swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

// var swiper1 = new Swiper(".mySwiper1", {
//   pagination: {
//     el: ".swiper-pagination1",
//     type: "fraction",
//   },
//   grid: {
//     rows: 2,
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next1",
//     prevEl: ".swiper-button-prev1",
//   },
//   slidesPerView: 3,
//   slidesPerGroup: 3,
// });

// var swiper2 = new Swiper(".mySwiper2", {
//   pagination: {
//     el: ".swiper-pagination2",
//     type: "fraction",
//   },
//   grid: {
//     rows: 1,
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next2",
//     prevEl: ".swiper-button-prev2",
//   },
//   slidesPerView: 3,
// });



let projectsSlider = new Swiper(".projects__swiper-content", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 1
  },
  spaceBetween: 30,
  pagination: {
    el: ".projects__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".projects__swiper-btn--next",
    prevEl: ".projects__swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


// var swiper3 = new Swiper(".mySwiper3", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   pagination: {
//     el: ".swiper-pagination3",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next3",
//     prevEl: ".swiper-button-prev3",
//   },
// });
