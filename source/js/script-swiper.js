const swiper = new Swiper('.swiper', {
  grabCursor: true,
  centeredSlides: true,
  speed: 1000,
  slideActiveClass: 'swiper__item--current',
  breakpoints: {
    376: {
      slidesPerView: 1,
      spaceBetween: 38,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 22,
    },
  },
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
});
