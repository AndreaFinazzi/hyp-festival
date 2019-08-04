'use strict';

var utils = require('../utils/writer.js');
var Performer = require('../service/PerformerService');

module.exports.getPerformers = function getPerformers (req, res, next) {
  Performer.getPerformers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPerformersAtEvent = function getPerformersAtEvent (req, res, next) {
  var id_event = req.swagger.params['id_event'].value;
  Performer.getPerformersAtEvent(id_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPerformersById = function getPerformersById (req, res, next) {
  var id_performer = req.swagger.params['id_performer'].value;
  Performer.getPerformersById(id_performer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
