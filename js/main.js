
//smooth scroll
$('nav a').on('click', function(e) {
  e.preventDefault();
  var thisTarget = $(this).attr('href');
  var targetOffset = $(thisTarget).offset().top;
  $('body').animate({
    scrollTop: targetOffset - 40
  }, 900);
});

// modal
$('.trigger').on('click', function () {
	$('.modal').addClass('show-modal');
})

$('.close-modal').on('click', function () {
	$('.modal').removeClass('show-modal');
})

// $('.hamburger').on('click', function(e) {
//   // Prevent link from jumping to the top of the page
//   e.preventDefault();
//   // If menu is already showing, slide it up. Otherwise, slide it down.
//   $('.menu').toggleClass('slide-down');
// });