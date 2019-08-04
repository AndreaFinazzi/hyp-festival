'use strict';

var utils = require('../utils/writer.js');
var Seminar = require('../service/SeminarService');

module.exports.getSeminar = function getSeminar (req, res, next) {
  Seminar.getSeminar()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeminarByArtisticEvent = function getSeminarByArtisticEvent (req, res, next) {
  var id_artistic_event = req.swagger.params['id_artistic_event'].value;
  Seminar.getSeminarByArtisticEvent(id_artistic_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSeminarById = function getSeminarById (req, res, next) {
  var id_seminar = req.swagger.params['id_seminar'].value;
  Seminar.getSeminarById(id_seminar)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
