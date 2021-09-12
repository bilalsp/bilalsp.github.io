
// EDUCATION
$(document).ready(function () {
    $(document).scroll(function () {
        var $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
    $('#down-arrow').click(function (event) {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 150);
        return false;
    });
    AOS.init({
        // uncomment below for on-scroll animations to played only once
        // once: true
    }); // initialize animate on scroll library
});


// PHOTO GALLERY
!(function($) {
    "use strict";
    
    // Porfolio isotope and filter
    $(window).on('load', function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
      });
  
      $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });
    });
  
  })(jQuery);


// // certification GALLERY

!(function($) {
  "use strict";
  
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.certification-container').isotope({
      itemSelector: '.certification-item'
    });

    $('#certification-flters li').on('click', function() {
      $("#certification-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
  });

})(jQuery);