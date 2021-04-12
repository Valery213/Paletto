$(document).ready(function( $ ) {
	if ($('.slider-pro').length === 1) {
		$('.slider-pro').sliderPro({
			width: '100%',
			height: '100vh',
			arrows: true,
			buttons: false,
			waitForLayers: false,
			autoplay: false,
			autoScaleLayers: false,
		});
	}
	$('.site-header .right-menu .fa-search').click(function(){
		$(this).next().animate({
			opacity: 1,
		}).css('visibility', 'visible')
	})
	$(document).click(event => {
		if (!$(event.target).is('.search-box form *,.site-header .right-menu .fa-search')) {
			$('.search-box').animate({
				opacity: 0,
			}, 500, function() {
				$('.search-box').css('visibility', 'hidden')
			})
		}
	})
	$('.Shop .left-col label input').click(function(){
		$(this).parent().parent().toggleClass('check')
	})
	$('label.customCheckbox *').click(function(){
		$(this).parent().toggleClass('check')
	})
	if ($('#polzunok').length === 1) {
		$("#polzunok").slider({
			animate: "slow",
			range: true,
			values: [0, 140],
			min: 0,
			max: 140,
			slide : function(event, ui) {	
				$("#result-polzunok").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );		
			}
		});
	}
	let mzOptions = {
		zoomPosition: "inner",
		rightClick: true,
	};
	$('.productPage .navi a').click(function(){
		$(this).parent().find('a').each(function() {
			$(this).removeClass('active');
		});
		$(this).addClass('active');
		$('.Description, .AdditionalInformation, .Reviews').addClass('hide');
		$('.' + $(this).attr('for')).removeClass('hide');
		return false;
	})
});
if ($('.swiper-container').length === 1) {
	let swiper = new Swiper('.swiper-container', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next2',
			prevEl: '.swiper-button-prev2',
		},
		breakpoints: {
			300: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			500: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			700: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			900: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		}
	});
}