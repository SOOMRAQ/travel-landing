var progressBarSwiper = new Swiper('.progressionBarSwiper', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 600,
  spaceBetween: 30,

  pagination: {
    el: '.progressionBarSwiper__swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.progressionBarSwiper__swiper-button-next',
    prevEl: '.progressionBarSwiper__swiper-button-prev',
  },
});

/* Swiper
 **************************************************************/
var swiper = swiper;
var init = false;

/* Which media query
 **************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
  let desktop = window.matchMedia('(min-width: 1025px)');

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }

  // Disable (for tablet)
  else if (tablet.matches) {
    swiper.destroy();
    init = false;
  }

  // Disable (for desktop)
  else if (desktop.matches) {
    swiper.destroy();
    init = false;
  }
}

/* On Load
 **************************************************************/
window.addEventListener('load', function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener('resize', function () {
  swiperMode();
});
