var contentRenderer = (function () {
    return {
        // endpoint: api endpoint for data retrieval;
        // template: ejs template filename;
        // container: jQuery selector for the rendered object container.
        renderDataObject: function (dataEndpoint, templateName, container, callback = (data) => null, emptyContainer = true) {
            return new Promise(function (resolve, reject) {
                if (emptyContainer)
                    $(container).empty();

                fetch(dataEndpoint)
                    .then(response => {
                        return response.json();
                    })
                    .then(items => {
                        if (items) {
                            fetch('/' + templateName + '.template')
                                .then(response => {
                                    return response.text();
                                })
                                .then(template => {
                                    renderMultiple(items, template, container)
                                    resolve(callback(items));
                                })
                                .catch(reason => {
                                    console.log(reason);
                                    reject(callback(items));
                                });
                        }
                    })
            })
        },

        renderJoinObject: function (dataEndpoint, joinEndpoint, templateName, container, callback = (items) => null, emptyContainer = true) {

            if (emptyContainer)
                $(container).empty();

            fetch(dataEndpoint)
                .then(response => {
                    return response.json();
                })
                .then(items => {
                    if (items) {
                        fetch('/' + templateName + '.template')
                            .then(response => {
                                return response.text();
                            })
                            .then(template => {
                                let promises = items.map((item, i) => {
                                    item.index = i;
                                    if (i == items.length - 1) item.last = true;
                                    return new Promise(function (resolve, reject) {
                                        fetch(joinEndpoint + item.id)
                                            .then(response => {
                                                return response.json()
                                            })
                                            .then(joinItems => {
                                                item.joinItems = joinItems;
                                                resolve(render(item, template, container));
                                            })
                                            .catch(reason => {
                                                console.log(reason)
                                                reject(reason);
                                            })
                                    });
                                });
                                Promise.all(promises)
                                    .then(result => callback(items))
                                    .catch(reason => console.log(reason));
                            })
                    }
                });

        },

        renderReservationModal: function (endpoint) {
            url = new URLSearchParams(window.location.search);
            this.renderJoinObject(endpoint, endpoints.getPerformerByEvent, 'events/reservation_modal', 'div.main-content', (items) => {
                $('#confirm-reservation').click(function() {
                    let quantity = $('#quantity-selector').val();
                    fetch('/api/reservation', {
                        method: 'POST',
                        body: 'id_artistic_event=' + items[0].id + '&quantity=' + quantity,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        },
                        redirect: 'follow'
                    })
                    .then(response => {
                        if (url.has('id'))
                            window.location = "&type=reservation&success=true";
                        else
                            window.location = "?type=reservation&success=true";
                    })
                    .catch(result => {
                        console.log(result.text());
                        window.location = response.url;
                    })
                });
        
                $('#reservation-modal').modal();
                $('#reservation-modal').on('hidden.bs.modal', function (event) {
                    $('#reservation-modal').remove();
                })
            }, emptyContainer = false);
        },

        renderPhotoBox: function (endpoint) {
            this.renderDataObject(endpoint, 'photo_box', '#photo-gallery-container');
        },

        renderPageContent: function (endpoint, module = 'main') {
            fetch(endpoint)
            .then(response => {
                return response.json();
            })
            .then(result => {
                $('[data-module=' + module + '] #content-title').html(result[0].title);
                $('[data-module=' + module + '] #content-body').html(result[0].content);
        
                if (result[0].path) {
                    $('.parallax-window').parallax({imageSrc: '/assets/img/' + result[0].path});
                }
                $(window).trigger('resize.px.parallax');
            })
        }
    }
})();

const render = (data, template, container) => {

    let html = renderTemplate(template, data);

    $(container).append(html);

}

const renderMultiple = (items, template, container) => {
    let html = '';
    items.forEach((item, i) => {
        item.index = i;
        html += renderTemplate(template, item);
    });
    $(container).append(html);

}

const renderTemplate = function (template, data) {
    let endIndex, field, firstHalf, secondHalf, value;
    while ((startIndex = template.indexOf('<%=')) != -1) {
        endIndex = template.indexOf('%>');

        field = template.slice(startIndex + '<%='.length, endIndex).trim();

        firstHalf = template.slice(0, startIndex);
        secondHalf = template.slice(endIndex + '%>'.length);

        value = eval(field);
        if (value == undefined) value = '';
        //value = data[field.split('.')[1]] ? data[field.split('.')[1]] : '';
        template = firstHalf + value + secondHalf;
    }

    return template;
}