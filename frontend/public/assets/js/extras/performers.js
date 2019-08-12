const endpoints = {
    getAll: 'api/performer/',
    getByEvent: 'api/performer/performing_in/',
}

$(document).ready(() => {
    init();

    // $('#event-type-select').change(function() {
    //     renderPerformerBox(endpoints.getByEvent + $(this).val());
    // })
})

const init = () => {
    renderPerformerBox(endpoints.getAll);
}

// component-rendering functions
const renderPerformerBox = endpoint => contentRenderer.renderDataObject(endpoint, 'performers/performer_box', '#performer-box-container');