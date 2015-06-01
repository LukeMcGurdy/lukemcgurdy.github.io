$(document).ready(function() {

    // Main menu

//    $('#menu-button').click(function() {
//        //$(this).next().animate({width: 'toggle'});
//        var $marginRight = $(this).next();
//        
//        $marginRight.animate({
//            marginLeft: parseInt($marginRight.css('right'),10) == 0 ?
//            $marginRight.outerWidth() : 0
//        });
//        
//    });

    

    

    
    // on click open menu
    
    $('.menu-button').on('click', function(event){
        $(this).toggleClass('menu-active');
        // create menu variables
        var mainNav = $('.main-nav');
        var mainNavWidth = $('.main-nav').width();    
        
    	// toggle open class
    	mainNav.toggleClass('open');
    	
    	// slide menu
    	if (mainNav.hasClass('open')) {
	    	mainNav.animate({
		    	width: '100%'
	    	});	
    	} else {
	    	mainNav.animate({
		    	width: '0'
	    	}, 500);	
    	}
    });    




	
	
	


    
	
});