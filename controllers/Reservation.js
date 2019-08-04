'use strict';

var utils = require('../utils/writer.js');
var Reservation = require('../service/ReservationService');

module.exports.getReservations = function getReservations (req, res, next) {
  Reservation.getReservations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postReservation = function postReservation (req, res, next) {
  var body = req.swagger.params['body'].value;
  Reservation.postReservation(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
