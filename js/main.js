$(document).ready(function(){


	$('.slaider-inner').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 5000,
  		slidesToScroll: 1
	});

	$('.burger').on('click' , function(){
		$('.menu').toggleClass('menu--active')
	});

});