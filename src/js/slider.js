const swiper = new Swiper('.swiper', {
//   // Optional parameters
  direction: 'horizontal',
  loop: true,
 autoplay: {
   delay: 3000,
   disableOnInteraction: false,
 },
 speed: 1000,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // simulateTouch: true,
  // grabCursor: true,
  effect: 'flip',
    flipEffect: {
    slideShadows: false,
  },

  slideToClickedSlide: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// mousewheel: {
//     invert: true,
//   },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});