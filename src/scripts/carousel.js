$(document).ready(function () {
  $(".carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  });

  function initializeSlider() {
    $(".grid-carousel").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
    });
  }

  function destroySlider() {
    // Destroy the carousel if it's already initialized
    if ($(".grid-carousel").hasClass("slick-initialized")) {
      $(".grid-carousel").slick("unslick");
    }
  }

  // Check if it's a mobile viewport width (adjust the breakpoint as needed)
  function isMobileViewport() {
    return window.innerWidth <= 768; // Example breakpoint: 768px
  }

  // On initial load and window resize, conditionally initialize or destroy the carousel
  $(window).on("load resize", function () {
    if (isMobileViewport()) {
      initializeSlider();
    } else {
      destroySlider();
    }
  });
});
