$(document).ready(function() {


    // On click open menu
    
    $('.menu-button').on('click', function(event){
        $(this).toggleClass('menu-active');
        $(this).parent().find('main .container').hide();

        // create menu variables
        var mainNav = $('.main-nav');
        var mainNavWidth = $('.main-nav').width();    

        // toggle open class
        mainNav.toggleClass('open');

        // slide menu
        if (mainNav.hasClass('open')) {
            mainNav.animate({
                width: '100%'
            }, 500);	
        } else {
            mainNav.animate({
                width: '0'
            }, 300);	
        }
    });    

    // On click of menu find .container and add CSS
    // CSS changes position from relative to static so links can be clicked whn menu closed
    // and .content z-indexed behind <header> when menu is opened
    
    $('.menu-button').click(function(){
        $(this).parents('#blog').siblings().find('.content').toggleClass('test');
    });
    
    
    



	
	
	


    
	
});