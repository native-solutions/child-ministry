

$('.vh-100-header').vegas({
    overlay: 'assets/js/overlays/08.png',
    transition: 'fade', 
    transitionDuration: 4000,
    delay: 10000,
    color: 'red',
    animation: 'random',
    animationDuration: 20000,
    slides: [
      { src: 'https://www.teachfornepal.org/media/images/da996cea-7cf1-4165-afd0-7b9020734e9d.jpeg' },
      { src: 'http://desjacobs.com/wp-content/uploads/2015/09/IMG_2639.jpg' },
    ]
  });
  

  $('.highlight-slider').owlCarousel({
    loop: true,
    autoplay: true,
    nav:false,
    items: 1,
    nav:true,
})

$('.slider-box').owlCarousel({
  loop: true,
  autoplay: true,
  nav:true,
  items: 2,
  navPrevText: "Previous",
})