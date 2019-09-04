const endpoints = {
    getAll: '/api/artistic_event/',
    getByType: '/api/artistic_event/by_type/',
    getByDate: '/api/artistic_event/by_date/',
    getByPerformer: '/api/artistic_event/performed_by/',
    getBySeminar: '/api/artistic_event/discussed_in/',
    getByUser: '/api/artistic_event/discussed_in/',
    getPerformersByEvent: '/api/performer/performing_in/',
    getPhotoGallery: '/api/photo/by_artistic_event/'
}

$(document).ready(() => {
    init();

    if ($('#event-type-select').html()) {
        $('#event-type-select').change(function() {
            renderEventBox(endpoints.getByType + $(this).val());
        });
    }
})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderEventDetails(endpoints.getAll + url.get('id'));
    } else {
        renderEventBox(endpoints.getAll);
    }
}

// component-rendering functions
const renderEventBox = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getPerformersByEvent, 'events/event_box', '#event-box-container', () => {
        $(window).trigger('resize.px.parallax');
        enableReservation();
    });
}

// component-rendering functions
const renderEventDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getPerformersByEvent, 'events/details', 'div.main-content', (items) => {
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
            contentRenderer.renderReservationModal(endpoints.getAll + $(event.target).data('id'));
        } else {
            window.location = '/registration';
        }

        return false;
    });
}