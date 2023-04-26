$(function(){

   $('.traking-slider__items').slick({
		arrows:false,
		dots: true,
	});

	$('.header-btn').on('click', function () {
		$('.header-btn').removeClass('header-btn--active');
		$(this).addClass('header-btn--active');
	});
	
	$('.select-style').styler();
});

function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
 }
