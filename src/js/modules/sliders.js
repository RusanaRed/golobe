import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const revSlider = document.querySelector('.reviews__slider');

revSlider = new Swiper(revSlider, {
  slidesPerView: 4,
  spaceBetween: 50,
  loop: true,
  
  mousewheel: true,
  /* on: {
    init: function () {
      const activeSlide = revSlider.querySelector('.swiper-slide-next');
      const nextActiveSlide = activeSlide.nextElementSibling;
      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add('slider-visible');
      nextActiveSlide.classList.add('slider-visible');
      nextNextActiveSlide.classList.add('slider-visible');
    },
  } */
});
