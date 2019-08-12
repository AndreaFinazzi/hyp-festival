var contentRenderer = (function () {
    return {
        // endpoint: api endpoint for data retrieval;
        // template: ejs template filename;
        // container: jQuery selector for the rendered object container.
        renderDataObject: function (dataEndpoint, templateName, container, callback = () => null) {
            return new Promise(function (resolve, reject) {

                $(container).empty();

                fetch(dataEndpoint)
                    .then(response => {
                        return response.json();
                    })
                    .then(items => {
                        items.forEach(item => {
                            fetch('templates/' + templateName + '.ejs')
                                .then(response => {
                                    return render(item, response.text(), container)  
                                })
                                .then(item => {
                                    let index = items.indexOf(item);
                                    if (index > -1) {
                                        items.splice(index, 1);
                                    }
                                    if (items.length == 0) resolve(callback());
                                })
                        });
                    });
            });
        }
    }
})();

const render = async (data, template, container) => {
    let html = ejs.render(await template, { client: true, data: data });
    $(container).append(html);
    return data;
}