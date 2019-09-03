const endpoints = {
    getByName: '/api/content/'
}


/* ==============================================
/*  PRE LOADING
=============================================== */
'use strict';
$(document).ready(() => {
    fetch(endpoints.getByName + 'contact')
    .then(response => {
        return response.json();
    })
    .then(result => {
        $('#content-title').html(result[0].title);
        $('#content-body').html(result[0].content);

        if (result[0].path) {
            $('.parallax-window').parallax({imageSrc: '/assets/img/' + result[0].path});
        }
        $(window).trigger('resize.px.parallax');
    })
});