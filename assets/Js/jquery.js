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
    $(".SecondBtn").click(function () {
      $(".OneBtn").removeClass("active");
      $(".OneBtn").addClass("disable");
      $(".SecondBtn").removeClass("disable");
      $(".SecondBtn").addClass("active");
      $(".FourthBtn").removeClass("active");
      $(".FourthBtn").addClass("disable");
      $(".ThirdBtn").removeClass("active");
      $(".ThirdBtn").addClass("disable");
      // =====================================
      $(".ThirdBtn").click(function () {
        $(".SecondBtn").removeClass("active");
        $(".SecondBtn").addClass("disable");
        $(".ThirdBtn").removeClass("disable");
        $(".ThirdBtn").addClass("active");
        $(".FourthBtn").removeClass("active");
        $(".FourthBtn").addClass("disable");
        $(".OneBtn").removeClass("active");
        $(".OneBtn").addClass("disable");
      });
      // ======================================
      $(".FourthBtn").click(function () {
        $(".ThirdBtn").removeClass("active");
        $(".ThirdBtn").addClass("disable");
        $(".FourthBtn").removeClass("disable");
        $(".FourthBtn").addClass("active");
        $(".SecondBtn").removeClass("active");
        $(".SecondBtn").addClass("disable");
        $(".OneBtn").removeClass("active");
        $(".OneBtn").addClass("disable");
      });
      // ========================================
      $(".OneBtn").click(function () {
        $(".OneBtn").removeClass("disable");
        $(".OneBtn").addClass("active");
        $(".ThirdBtn").removeClass("active");
        $(".ThirdBtn").addClass("disable");
        $(".FourthBtn").removeClass("active");
        $(".FourthBtn").addClass("disable");
        $(".SecondBtn").removeClass("active");
        $(".SecondBtn").addClass("disable");
      });
    });
  });

    $(document).ready(function () {
      "use strict";
      var offSetTop = 1000;
      var $scrollToTopButton = $(".scrollToTop");
      //Check to see if the window is top if not then display button
      $(window).scroll(function () {
        if ($(this).scrollTop() > offSetTop) {
          $scrollToTopButton.fadeIn();
        } else {
          $scrollToTopButton.fadeOut();
        }
      });

      //Click event to scroll to top
      $scrollToTopButton.click(function () {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
      });
    });
})(jQuery);

