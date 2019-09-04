$(document).ready(() => {
    init();

    if ($('#event-type-select').html()) {
        $('#event-type-select').change(function() {
            renderEventBox(endpoints.getArtisticEventByType + $(this).val());
        });
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
        $('.parallax-window').parallax({imageSrc: '/assets/img/' + items[0].path});

        // render photo gallery
        contentRenderer.renderPhotoBox(endpoints.getPhotoGallery + items[0].id);

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