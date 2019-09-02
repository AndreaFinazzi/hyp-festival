const endpoints = {
    getAll: '/api/seminar/',
    getByEvent: '/api/seminar/discusses/',
    getEventsBySeminar: '/api/artistic_event/discussed_in/'
}

$(document).ready(() => {
    init();
})

const init = () => {
    renderSeminarBox(endpoints.getAll);
}

// component-rendering functions
const renderSeminarBox = endpoint => contentRenderer.renderJoinObject(endpoint, endpoints.getEventsBySeminar, 'seminars/seminar_box', '#seminar-box-container', () => $(window).trigger('resize.px.parallax'));