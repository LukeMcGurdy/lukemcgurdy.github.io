$(document).ready(function() {


	// Slider - home page
	
	/*$( '.home-slider' ).on( 'cycle-initialized', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		animate();
	});*/

//	$('.home-slider').cycle({
//		fx: 'scrollHorz',
//		slides: '.slide',
//		speed:    1000, 
//		timeout:  15000,
//		pager: '#home-pager',
//		pagerTemplate: '<span></span>'	
//	});	
//
//	$('.home-slider .slide figcaption').addClass('animated fadeInRight');

	$('.text-colour-four').hide();
    setTimeout(function() {
	    $('.text-colour-four').fadeIn(1000);
    },5000);
	

	/*$( '.home-slider' ).on( 'cycle-pager-activated', function(event, optionHash) {
		clearTimeout(timer1);
		clearTimeout(timer2);
		$('.home-slider .slide figcaption').hide();
	});
	
	$( '.home-slider' ).on( 'cycle-after', function(e, optionHash, outgoingSlideEl, incomingSlideEl, forwardFlag ) {
		animate();
	});
	
	function animate() {
		$('.home-slider .slide figcaption').removeClass('animated fadeOutLeft').hide();
		timer1 = setTimeout(function(){
			$('.home-slider .slide figcaption').addClass('animated fadeInRight').show();
			timer2 = setTimeout(function(){
				$('.home-slider .slide figcaption').removeClass('animated fadeInRight').addClass('animated fadeOutLeft');
        	},14000);
		},100);
	}*/
	
	
});