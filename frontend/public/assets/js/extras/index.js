const endpoints = {
    getAll: '/api/seminar/',
    getByEvent: '/api/performer/performing_in/',
}

/* ==============================================
/*  PRE LOADING
=============================================== */
'use strict';
$(document).ready(() => {
    initSlider();
});

const initSlider = function () {
    renderSlider(endpoints.getAll, function (items) {
        items.forEach((item, i) => {
            $('#cover-dots').append('<li data="' + String(i) + '"><span>' + String(i + 1) + '</span></li>');
        });
        
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


        $(".countdown")
            .countdown("2019/12/01", function (event) {
                $(this).html(
                    event.strftime('<div>%w <span>Weeks</span></div>  <div>%D <span>Days</span></div>  <div>%H<span>Hours</span></div> <div>%M<span>Minutes</span></div> <div>%S<span>Seconds</span></div>')
                );
            });

    });
}

// component-rendering functions
const renderSlider = function (endpoint, callback) {
    contentRenderer.renderDataObject(endpoint, 'slider_item', '#cover-slider-container', callback);
}