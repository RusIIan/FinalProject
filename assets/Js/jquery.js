(function ($) {
  $(document).ready(function () {
    $(".testimonial-slick-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      asNavFor: ".testimonials-thumb-slider",
      dots: true,
      fade: true,
      pauseOnHover: true,
      arrows: false,
    });
    // testimonial thumb slider
    $(".testimonials-thumb-slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".testimonial-slick-slider",
      arrows: false,
      dots: false,
      fade: true,
      focusOnSelect: true,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 2000,
    });
    $(".customer-logos").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });

  $(document).ready(function () {
    $(".refundCategory").click(function () {
      $(".returnCategory").removeClass("active");
      $(".returnCategory").addClass("disable");
      $(".refundCategory").removeClass("disable");
      $(".refundCategory").addClass("active");
      $(".paymentCategory").removeClass("active");
      $(".paymentCategory").addClass("disable");
      $(".accoundCategory").removeClass("active");
      $(".accoundCategory").addClass("disable");
      // =====================================
      $(".accoundCategory").click(function () {
        $(".refundCategory").removeClass("active");
        $(".refundCategory").addClass("disable");
        $(".accoundCategory").removeClass("disable");
        $(".accoundCategory").addClass("active");
        $(".paymentCategory").removeClass("active");
        $(".paymentCategory").addClass("disable");
        $(".returnCategory").removeClass("active");
        $(".returnCategory").addClass("disable");
      });
      // ======================================
      $(".paymentCategory").click(function () {
        $(".accoundCategory").removeClass("active");
        $(".accoundCategory").addClass("disable");
        $(".paymentCategory").removeClass("disable");
        $(".paymentCategory").addClass("active");
        $(".refundCategory").removeClass("active");
        $(".refundCategory").addClass("disable");
        $(".returnCategory").removeClass("active");
        $(".returnCategory").addClass("disable");
      });
      // ========================================
      $(".returnCategory").click(function () {
        $(".returnCategory").removeClass("disable");
        $(".returnCategory").addClass("active");
        $(".accoundCategory").removeClass("active");
        $(".accoundCategory").addClass("disable");
        $(".paymentCategory").removeClass("active");
        $(".paymentCategory").addClass("disable");
        $(".refundCategory").removeClass("active");
        $(".refundCategory").addClass("disable");
      });
    });
  });
    
})(jQuery);

