$(document).ready(function() {
	$('.burger-form__slider').slick({
		arrows: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		easing: 'linear',
		infinite: true,
		responsive: [
			{
				breakpoint: 736,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
				
			},
		  ]
	});
});