const endpoints = {
    getAll: '/api/seminar/',
    getByEvent: '/api/performer/performing_in/',
}

/* ==============================================
/*  PRE LOADING
=============================================== */
'use strict';
$(window).load(function () {
    $('.loader').delay(750).fadeOut('slow');
});


$(document).ready(() => {
    'use strict';

    initSlider();

});

const initSlider = function () {
        renderSlider(endpoints.getAll, function () {

        /* ==============================================
        SLIDER
        =============================================== */
        $(".cover_slider").owlCarousel({
            loop: false,
            autoplay: true,
            smartSpeed: 1000,
            autoplayHoverPause: false,
            dots: true,
            nav: false,
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            dotsContainer: '.cover_dots'
        });

        $(".brand_carousel").owlCarousel({
            loop: true,
            autoplay: true,
            smartSpeed: 450,
            autoplayHoverPause: false,
            dots: false,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3

                },
                1000: {
                    items: 5

                }
            },
            items: 3
        });
    });

}

// component-rendering functions
const renderSlider = function (endpoint, callback) {
    contentRenderer.renderDataObject(endpoint, 'slider_item', '#cover-slider-container', callback);
}