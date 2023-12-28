$(document).ready(function() {
    var navbar = $("#mainNav");
    var headerHeight = $("#top_header").outerHeight(); // Get the height of top_header

    $(window).scroll(function() {
      if ($(this).scrollTop() > headerHeight) {
        navbar.addClass("fixed-top");
        navbar.css("background-color", "#333"); // Set the background color when fixed
      } else {
        navbar.removeClass("fixed-top");
        navbar.css("background-color", "transparent"); // Set the transparent background color
      }
    });
  });