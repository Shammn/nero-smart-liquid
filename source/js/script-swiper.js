const swiper = new Swiper('.swiper', {
  grabCursor: true,
  centeredSlides: true,
  slideActiveClass: 'swiper__item--current',
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 22,
    },
    1440: {
      slidesPerView: 3,
      lidesPerGroup: 1,
      spaceBetween: 93,
    },
  },
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
});
