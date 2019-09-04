/* ==============================================
/*  PRE LOADING
=============================================== */
'use strict';
$(document).ready(() => {
    contentRenderer.renderPageContent(endpoints.getContentByName + 'contact');
    contentRenderer.renderPageContent(endpoints.getContentByName + 'reservation', 'reservation');
});