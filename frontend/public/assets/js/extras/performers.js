const endpoints = {
    getAll: '/api/performer/',
    getByEvent: '/api/performer/performing_in/',
    getEventsByPerformer: '/api/artistic_event/performed_by/'
}

$(document).ready(() => {
    init();

    // $('#event-type-select').change(function() {
    //     renderPerformerBox(endpoints.getByEvent + $(this).val());
    // })
})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderPerformerDetails(endpoints.getAll + url.get('id'));
    } else {
        renderPerformerBox(endpoints.getAll);
    }

}


// component-rendering functions
const renderPerformerBox = endpoint => contentRenderer.renderDataObject(endpoint, 'performers/performer_box', '#performer-box-container', () => $(window).trigger('resize.px.parallax'));

const renderPerformerDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getEventsByPerformer, 'performers/details', 'div.main-content', (items) => {
        $('.parallax-window').parallax({imageSrc: '/assets/img/' + items[0].path});
        $(window).trigger('resize.px.parallax');
    }, emptyContainer = true);
}