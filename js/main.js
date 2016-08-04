
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