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
        value = value ? value : ''
        //value = data[field.split('.')[1]] ? data[field.split('.')[1]] : '';
        template = firstHalf + value + secondHalf;
    }

    return template;
}