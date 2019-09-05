const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Tuesday", "Wednesday", "Thursday", "Friday", "Sunday", "Monday"];

const endpoints = {
    getContentByName: '/api/content/',
    getPhotoGalleryByArtisticEvent: '/api/photo/by_artistic_event/',
    getPhotoGalleryByPerformer: '/api/photo/by_performer/',

    getArtisticEventAll: '/api/artistic_event/',
    getArtisticEventByType: '/api/artistic_event/by_type/',
    getArtisticEventByDate: '/api/artistic_event/by_date/',
    getArtisticEventByPerformer: '/api/artistic_event/performed_by/',
    getArtisticEventBySeminar: '/api/artistic_event/discussed_in/',

    getSeminarAll: '/api/seminar/',
    getSeminarByEvent: '/api/seminar/discusses/',

    getPerformerAll: '/api/performer/',
    getPerformerByEvent: '/api/performer/performing_in/',

    userRegister: '/api/user/register',
    userLogin: '/api/user/login',
    userLogout: '/api/user/logout',

    getReservationAll: '/api/reservation'
}

$(window).load(function () {
    options = undefined;
    window.user = {
        logged: false
    }
    url = new URLSearchParams(window.location.search);

    $('.loader').delay(750).fadeOut('slow');

    fetch('/api/user')
        .then(response => {
            if (response) {
                if (response.status == 200) {
                    return response.json();
                } else {
                    return [{}];
                }
            }
        })
        .then(result => {
            if (result[0].id || result[0].id == 0) {
                // user logged
                window.user.logged = true;
                window.user.id = result[0].id;
                window.user.email = result[0].email;
                window.user.first_name = result[0].first_name;
                window.user.last_name = result[0].last_name;

                window.dispatchEvent(new Event('user-logged'));

                $('#account-icon i').removeClass();
                $('#account-icon i').addClass('ion ion-filing');
                $('#account-icon').attr('href', '/reservation');
                $('#account-icon').attr('alt', 'Reservations');
                if (url.has('type') && url.get('type') == 'login') {
                    if (url.get('success') == 'true') {
                        options = {
                            title: 'Welcome!',
                            content: 'Welcome on board, here you can find your reservations!',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    } else {
                        options = {
                            title: "D'Oh!",
                            content: 'Something went wrong, please try to log in again.',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    }
                } else if (url.has('type') && url.get('type') == 'reservation') {
                    if (url.get('success') == 'true') {
                        options = {
                            title: 'Nice!',
                            content: 'We got your reservation, see you at the event!',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    } else {
                        options = {
                            title: "D'Oh!",
                            content: 'Something went wrong, probably you already own a ticket for that event.',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    }
                }
            } else {
                window.dispatchEvent(new Event('user-not-logged'));
                if (url.has('type') && url.get('type') == 'logout') {
                    options = {
                        title: 'Bye Bye!',
                        content: 'Thanks! Hope to see you soon!',
                        trigger: 'focus hover',
                        placement: 'bottom'
                    }
                } else if (url.has('type') && url.get('type') == 'registration') {
                    if (url.get('success') == 'true') {
                        options = {
                            title: 'Welcome On Board!',
                            content: 'Thanks to be part of PULSE! Log in with your brand new credentials to enjoy ticket reservation.',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    } else {
                        options = {
                            title: "D'Oh!",
                            content: 'Something went wrong, please try to register again.',
                            trigger: 'focus hover',
                            placement: 'bottom'
                        }
                    }
                }
            }

            if (options) {
                if ($('.navbar-toggler').css('display') == 'none') {
                    $('#account-icon').popover(options);
                    $('#account-icon').popover('show');
                } else {
                    $('.navbar-toggler').popover(options);
                    $('.navbar-toggler').popover('show');
                }
            }
        })
        .catch(reason => console.log(reason))
});


$(document).ready(() => {
    'use strict';

    contentRenderer.renderPageContent(endpoints.getContentByName + 'footer', 'footer');

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
});