// stiky nav start
$(document).ready(function() {
    $('nav').stickynav();
 
     $('.navbar-toggler').click(() => {
     $('.navbar-collapse').toggleClass('show');
       });
 });
// stiky nav end
// menu icon start
$('document').ready(function () {
  var Closed = false;

  $('.hamburger').click(function () {
    if (Closed == true) {
      $(this).removeClass('open');
      $(this).addClass('closed');
      Closed = false;
    } else {               
      $(this).removeClass('closed');
      $(this).addClass('open');
      Closed = true;
    }
  });
});
// menu icon end