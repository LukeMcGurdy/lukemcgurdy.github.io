(function ($) {
    Drupal.behaviors.cosecsaBehavior = {
        attach: function (context, settings) {
            $(window).load(function () {
                $('html, body').delay(1000).animate({
                    'scrollTop': $('.responsive-iframe').offset().top
                }, 300);
            });
            move_top_nav = function () {
                var bodyWidth = $(window).width();
                if (bodyWidth > 765) {
                    $('#nav_top').appendTo('#nav_top_holder_desktop');
                } else {
                    $('#nav_top').appendTo('#nav_top_holder_mobile');
                }
            };
            move_top_nav();
            $(window).on("debouncedresize", move_top_nav);
            $('.tabcollapse').tabCollapse({
                tabsClass: 'hidden-xs',
                accordionClass: 'visible-xs'
            });
            $('select').not('#edit-sortcom').selectric({
                maxHeight: 250
            });
            $(":file").filestyle({
                buttonName: "btn-primary",
                buttonText: "Browse"
            });
            $('.js-toggle-search').click(function (e) {
                e.preventDefault();
                $('#site_search').toggleClass('is-open');
            });
            $('.pagecontent table').addClass('table table-striped');
            $('.panel-group').on('show.bs.collapse', function (e) {
                $(e.target).prev('.panel-heading').addClass('active');
            });
            $('.panel-group').on('hide.bs.collapse', function (e) {
                $(e.target).prev('.panel-heading').not($(e.target)).removeClass('active');
            });
            $('.mobile li.dropdown :first-child,.tablet li.dropdown :first-child').on('click', function () {
                var $el = $(this).parent();
                if ($el.hasClass('open')) {
                    var $a = $el.children('a.dropdown-toggle');
                    if ($a.length && $a.attr('href')) {
                        location.href = $a.attr('href');
                    }
                }
            });

            $('.desktop li.dropdown :first-child').on('click', function () {
                var $el = $(this).parent();
                var $a = $el.children('a.dropdown-toggle');
                if ($a.length && $a.attr('href')) {
                    location.href = $a.attr('href');
                }
            });
            $('.js-scroll-to-top').click(function (e) {
                e.preventDefault();
                $('body,html').animate({
                    scrollTop: 0
                }, 750);
                return false;
            });
            if (!Modernizr.input.placeholder) {
                $('[placeholder]').focus(function () {
                    var input = $(this);
                    if (input.val() == input.attr('placeholder')) {
                        input.val('');
                        input.removeClass('placeholder');
                    }
                }).blur(function () {
                    var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                        input.addClass('placeholder');
                        input.val(input.attr('placeholder'));
                    }
                }).blur();
                $('[placeholder]').parents('form').submit(function () {
                    $(this).find('[placeholder]').each(function () {
                        var input = $(this);
                        if (input.val() == input.attr('placeholder')) {
                            input.val('');
                        }
                    })
                });
            }
        }
    };
})(jQuery);
