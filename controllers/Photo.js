'use strict';

var utils = require('../utils/writer.js');
var Photo = require('../service/PhotoService');

module.exports.getPhotoByArtisticEvent = function getPhotoByArtisticEvent (req, res, next) {
  var id_artistic_event = req.swagger.params['id_artistic_event'].value;
  Photo.getPhotoByArtisticEvent(id_artistic_event)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPhotoByPerformer = function getPhotoByPerformer (req, res, next) {
  var id_performer = req.swagger.params['id_performer'].value;
  Photo.getPhotoByPerformer(id_performer)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
