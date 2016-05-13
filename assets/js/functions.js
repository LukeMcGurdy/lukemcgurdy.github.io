$(document).ready(function() {
    var reveal = {
        origin: 'bottom',
        distance: '100px',
        duration: 400,
        easing: 'linear',
        viewFactor  : 0.8,
        scale: 1,
        reset: true
    };
    window.sr = ScrollReveal();
    sr.reveal('.posts-projects .col-md-6', reveal);
});
