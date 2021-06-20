// swiper js 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        850: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    });
  