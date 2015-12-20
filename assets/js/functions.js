$(document).ready(function () {

/*
* Coming soon
*/ 



//    var nav = $('#main-nav');
//
//    $(window).scroll(function () {
//        if ($(this).scrollTop() > 50) {
//           nav.stop().animate({ 'top': ($(this).scrollTop() - 62) + "px" }, 600);
//        } else {
//          nav.stop().animate({ 'top': ($(this).scrollTop()) + "px" },600);
//        }
//    });
//});



    // On click open menu

//    $('.menu-button').on('click', function (event) {
//        $(this).toggleClass('menu-active');
//
//        // create menu variables
//        var mainNav = $('.main-nav');
//        // var mainNavWidth = $('.main-nav').width();
//
//        // toggle open class
//        mainNav.toggleClass('open');
//
//        // slide menu
//        if (mainNav.hasClass('open')) {
//            mainNav.animate({
//                width: '100%'
//            }, 500);
//        } else {
//            mainNav.animate({
//                width: '0'
//            }, 300);
//        }
//    });

    // On click of menu find .container and add CSS
    // CSS changes position from relative to static so links can be clicked whn menu closed
    // and .content z-indexed behind <header> when menu is opened

//    $('.menu-button').click(function () {
//        $(this).parents('#blog').siblings().find('.content').toggleClass('test');
//    });

    // Accordion
//    $('.toggle').click(function () {
//        $(this).parent().prev('.accordion').toggleClass('open');
//    });




//var offset = 300;
//
//	var navigationContainer = $('#cd-nav'),
//		mainNavigation = navigationContainer.find('#cd-main-nav ul');
//
//	//hide or show the "menu" link
//	checkMenu();
//	$(window).scroll(function(){
//		checkMenu();
//	});
//
//	//open or close the menu clicking on the bottom "menu" link
//	$('.cd-nav-trigger').on('click', function(){
//		$(this).toggleClass('menu-is-open');
//		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
//		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
//
//	});
//
//	function checkMenu() {
//		if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
//			navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
//				mainNavigation.addClass('has-transitions');
//			});
//		} else if ($(window).scrollTop() <= offset) {
//			//check if the menu is open when scrolling up
//			if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
//				//close the menu with animation
//				mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
//					//wait for the menu to be closed and do the rest
//					mainNavigation.removeClass('is-visible is-hidden has-transitions');
//					navigationContainer.removeClass('is-fixed');
//					$('.cd-nav-trigger').removeClass('menu-is-open');
//				});
//			//check if the menu is open when scrolling up - fallback if transitions are not supported
//			} else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
//					mainNavigation.removeClass('is-visible has-transitions');
//					navigationContainer.removeClass('is-fixed');
//					$('.cd-nav-trigger').removeClass('menu-is-open');
//			//scrolling up with menu closed
//			} else {
//				navigationContainer.removeClass('is-fixed');
//				mainNavigation.removeClass('has-transitions');
//			}
//		} 
//	}


});