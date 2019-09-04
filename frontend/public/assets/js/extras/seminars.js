const endpoints = {
    getAll: '/api/seminar/',
    getByEvent: '/api/seminar/discusses/',
    getEventsBySeminar: '/api/artistic_event/discussed_in/'
}

$(document).ready(() => {
    init();
})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderSeminarDetails(endpoints.getAll + url.get('id'));
    } else {
        renderSeminarBox(endpoints.getAll);
    }
}

// component-rendering functions
const renderSeminarBox = endpoint => contentRenderer.renderJoinObject(endpoint, endpoints.getEventsBySeminar, 'seminars/seminar_box', '#seminar-box-container', () => $(window).trigger('resize.px.parallax'));

// component-rendering functions
const renderSeminarDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getEventsBySeminar, 'seminars/details', 'div.main-content', (items) => {
        $('.parallax-window').parallax({imageSrc: '/assets/img/' + items[0].path});
        $(window).trigger('resize.px.parallax');
    }, emptyContainer = true);
}