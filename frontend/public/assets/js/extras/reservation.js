$(window).on('user-logged', function () {
    $('#user-name').text(window.user.first_name + ' ' + window.user.last_name);
    $('#user-email').text(window.user.email);
})

$(window).on('user-not-logged', function () {
    window.location = '/registration';
})

$(document).ready(function () {
    renderReservations(endpoints.getReservationAll, function (items) {
        $('#user-reservation-counter').text(items.length + ' active reservations');
        
        $(window).trigger('resize.px.parallax')
    });
})

logout = function() {
    fetch('/api/user/logout')
    .then(response => {
        window.location = '/?type=logout&success=true';
    })
    $(window).trigger('load');
}

const renderReservations = function (endpoint, callback) {
    contentRenderer.renderJoinObject(endpoint, endpoints.getPerformerByEvent, 'reservation/reservation_box', '#reservation-box-container', callback);
}