$(document).ready(function() {
    var reveal = {
        origin: 'bottom',
        distance: '100px',
        duration: 400,
        easing: 'linear',
        viewFactor: 0.8,
        scale: 1,
        reset: true
    };
    window.sr = ScrollReveal();
    sr.reveal('.posts-projects .col-md-6', reveal);


    // Do stuff to svg logo
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 5) {
            $('body').addClass('scrolled');
        }
    });

});


// Add copyright date to footer
function addDate(){
    var copyrightDate = new Date().getFullYear();
    document.getElementById('copyright').innerHTML = copyrightDate;
}
addDate();
