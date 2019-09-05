/* ==============================================
/*  PRE LOADING
=============================================== */
'use strict';
$(document).ready(() => {
    contentRenderer.renderPageContent(endpoints.getContentByName + 'presentation', 'main');
    initCalendar();
    initSlider();
});

const initCalendar = function () {
    contentRenderer.renderJoinObject(endpoints.getArtisticEventAll, endpoints.getPerformerByEvent, 'calendar_box', '#calendar-box-container');
}

const initSlider = function () {
    renderSlider(endpoints.getSeminarAll, function (items) {
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
    });
}

// component-rendering functions
const renderSlider = function (endpoint, callback) {
    contentRenderer.renderDataObject(endpoint, 'slider_item', '#cover-slider-container', callback);
}