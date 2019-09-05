'use strict';

var utils = require('../utils/writer.js');
var ArtisticEvent = require('../service/ArtisticEventService');

module.exports.getArtisticEvent = function getArtisticEvent (req, res, next) {
  ArtisticEvent.getArtisticEvent()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventByDate = function getArtisticEventByDate (req, res, next) {
  var date = req.swagger.params['date'].value;
  ArtisticEvent.getArtisticEventByDate(date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventById = function getArtisticEventById (req, res, next) {
  var id_artistic_event = req.swagger.params['id_artistic_event'].value;
  ArtisticEvent.getArtisticEventById(id_artistic_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventByPerformer = function getArtisticEventByPerformer (req, res, next) {
  var id_performer = req.swagger.params['id_performer'].value;
  ArtisticEvent.getArtisticEventByPerformer(id_performer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventBySeminar = function getArtisticEventBySeminar (req, res, next) {
  var id_seminar = req.swagger.params['id_seminar'].value;
  ArtisticEvent.getArtisticEventBySeminar(id_seminar)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getArtisticEventByType = function getArtisticEventByType (req, res, next) {
  var type = req.swagger.params['type'].value;
  ArtisticEvent.getArtisticEventByType(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
