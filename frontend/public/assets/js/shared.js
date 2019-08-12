$(document).ready(() => {
    'use strict';
    /* ==============================================
    /*   wow
      =============================================== */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();

    /* ==============================================
        STICKY HEADER
    =============================================== */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });

    // $('#event-type-select').change(function() {
    //     renderPerformerBox(endpoints.getByEvent + $(this).val());
    // })
});