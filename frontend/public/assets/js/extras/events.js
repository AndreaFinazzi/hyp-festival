const endpoints = {
    getAll: 'api/artistic_event/',
    getByType: 'api/artistic_event/by_type/',
    getByDate: 'api/artistic_event/by_date/',
    getByPerformer: 'api/artistic_event/performed_by/',
    getBySeminar: 'api/artistic_event/discussed_in/',
    getByUser: 'api/artistic_event/discussed_in/'
}

$(document).ready(() => {
    init();

    $('#event-type-select').change(function() {
        renderEventBox(endpoints.getByType + $(this).val());
    })
})

const init = () => {
    renderEventBox(endpoints.getAll);
}

// component-rendering functions
const renderEventBox = endpoint => {
    contentRenderer.renderDataObject(endpoint, 'events/event_box', '#event-box-container', () => $(window).trigger('resize.px.parallax'));
}