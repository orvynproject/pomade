$(function() {
	//---NAVBAR---
	$('.nav-toggle > a').click(function(event) {
		event.preventDefault();
		$('nav').slideDown();
	});
	$('.nav-toggle-close > a').click(function(event) {
		event.preventDefault();
		$('nav').slideUp();
	});

	//---SEARCH---
	$('.search-toggle > a').click(function(event) {
		event.preventDefault();
		$('.search-form').slideDown();
	});
	$('.search-toggle-close > a').click(function(event) {
		event.preventDefault();
		$('.search-form').slideUp();
	});

	//---CAROUSEL---
	$("#brand-carousel").owlCarousel({
		autoPlay : 2000,
		stopOnHover : true,
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3]
	});

});

function loadCart() {
	$('#modal-product-detail').modal('hide');
	$('#modal-load-cart').modal('show');
}