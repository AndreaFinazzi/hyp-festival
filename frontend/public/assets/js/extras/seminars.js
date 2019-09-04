$(document).ready(() => {
    init();
})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderSeminarDetails(endpoints.getSeminarAll + url.get('id'));
    } else {
        renderSeminarBox(endpoints.getSeminarAll);
    }
}

// component-rendering functions
const renderSeminarBox = endpoint => contentRenderer.renderJoinObject(endpoint, endpoints.getArtisticEventBySeminar, 'seminars/seminar_box', '#seminar-box-container', () => $(window).trigger('resize.px.parallax'));

// component-rendering functions
const renderSeminarDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getArtisticEventBySeminar, 'seminars/details', 'div.main-content', (items) => {
        $('.parallax-window').parallax({imageSrc: '/assets/img/' + items[0].path});
        $(window).trigger('resize.px.parallax');
    }, emptyContainer = true);
}