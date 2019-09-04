$(document).ready(() => {
    init();

})

const init = () => {
    url = new URLSearchParams(window.location.search);

    if (url.has('id')) {
        renderPerformerDetails(endpoints.getPerformerAll + url.get('id'));
    } else {
        renderPerformerBox(endpoints.getPerformerAll);
    }

}


// component-rendering functions
const renderPerformerBox = endpoint => contentRenderer.renderDataObject(endpoint, 'performers/performer_box', '#performer-box-container', () => $(window).trigger('resize.px.parallax'));

const renderPerformerDetails = endpoint => {
    contentRenderer.renderJoinObject(endpoint, endpoints.getArtisticEventByPerformer, 'performers/details', 'div.main-content', (items) => {
        $('.parallax-window').parallax({imageSrc: '/assets/img/' + items[0].path});

        contentRenderer.renderPhotoBox(endpoints.getPhotoGalleryByPerformer + items[0].id);

        $(window).trigger('resize.px.parallax');
    }, emptyContainer = true);
}