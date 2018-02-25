function iconSources()
{
  swal({
     icon: "info",
     title: "Icon Sources",
     text: "Icon set one made by Google, icon set two made by Kirill Kazachek from www.flaticon.com",
  });
}

function snapchat()
{
  swal({
     title: "@fossilfreemac",
     text: "Get updates on the movement and follow us on Snapchat",
  });
}

function openFAQLink(url)
{
  var win = window.open(url, '_blank');
  win.focus();
}

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
     // $("#navigation-top").className = "center-nav"
      //document.getElementById("navigation-top").className = "navbar-nav center-nav";
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      //document.getElementById("navigation-top").className = "navbar-nav right-nav";
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
