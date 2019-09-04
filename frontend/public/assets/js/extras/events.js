$(window).load(function () {

})

$(document).ready(() => {
    init();

    if ($('#event-type-select').html()) {
        $('#event-type-select').change(function () {
            $('#event-date-select').val('');
            renderEventBox(endpoints.getArtisticEventByType + $(this).val());
        });

        $('#event-date-select').datepicker({ format: "yyyy/mm/dd" });
        $('#event-date-select').change(function (event) {
            $('#event-type-select').val('');
            renderEventBox(endpoints.getArtisticEventByDate + $(this).val().replace(/\//g, '-'));
        });

        $('#event-date-today').click(function (event) {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '/' + mm + '/' + dd;
            $('#event-date-select').val(today);
            $('#event-date-select').trigger('change');
        })
    }
})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderEventDetails(endpoints.getArtisticEventAll + url.get('id'));
    } else {
        renderEventBox(endpoints.getArtisticEventAll);
    }
}

// component-rendering functions
const renderEventBox = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getPerformerByEvent, 'events/event_box', '#event-box-container', () => {
        $(window).trigger('resize.px.parallax');
        enableReservation();
    });
}

// component-rendering functions
const renderEventDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getPerformerByEvent, 'events/details', 'div.main-content', (items) => {
        $('.parallax-window').parallax({ imageSrc: '/assets/img/' + items[0].path });

        // render photo gallery
        contentRenderer.renderPhotoBox(endpoints.getPhotoGalleryByArtisticEvent + items[0].id);

        $(window).trigger('resize.px.parallax');
        enableReservation();
    }, emptyContainer = true);
}

const enableReservation = function () {
    $('[data-element=reserve-btn]').click(function (event) {
        event.preventDefault();
        if (window.user.logged) {
            contentRenderer.renderReservationModal(endpoints.getArtisticEventAll + $(event.target).data('id'));
        } else {
            window.location = '/registration';
        }

        return false;
    });
}