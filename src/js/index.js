/* import mobileNav from './modules/mobile-nav.js';
mobileNav(); */

import './_modules';

// ---------------- Swiper -----------------

/* import Swiper from 'swiper';
import 'swiper/css'; */

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

/* reviewsSlider.on('slideChange', function () {
  console.log('slide change');

  const activeSlide = revSlider.querySelector('.swiper-slide-active');
  const nextActiveSlide = revSlider.querySelector('.swiper-slide-next');
  const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

  document.querySelectorAll('.reviews__slider .swiper-slide').forEach(el => {
    el.classList.remove('slider-visible');
  });

  activeSlide.classList.add('slider-visible');
  nextActiveSlide.classList.add('slider-visible');
  nextNextActiveSlide.classList.add('slider-visible');
}) */
