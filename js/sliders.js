
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
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    480: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    // 1261: {
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   grid: {
    //     rows: 2
    //   },
    //   spaceBetween: 54
    // },

    1261: {
      slidesPerView: 3,
      // slidesPerGroup: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    },

    // 1751: {
    //   slidesPerView: 3,
    //   slidesPerGroup: 3,
    //   grid: {
    //     rows: 2
    //   },
    //   spaceBetween: 50
    // }
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
  // loop: true,
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
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 15
    },

    670: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    880: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    // 1261: {
    //   slidesPerView: 2,
    //   slidesPerGroup: 2,
    //   grid: {
    //     rows: 2
    //   },
    //   spaceBetween: 54
    // },

    1306: {
      slidesPerView: 3,
      // slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    // 1751: {
    //   slidesPerView: 3,
    //   slidesPerGroup: 3,
    //   grid: {
    //     rows: 2
    //   },
    //   spaceBetween: 50
    // }
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
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    400: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    880: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    1305: {
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