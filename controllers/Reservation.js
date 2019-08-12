'use strict';

var utils = require('../utils/writer.js');
var Reservation = require('../service/ReservationService');

module.exports.getReservations = function getReservations (req, res, next) {


  if (req.session.loggedIn){
    var sessionId = req.session.logged_id;

    Reservation.getReservations(sessionId)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  }
  else
    utils.writeJson(res, {status: 401, message: "You aren't logged"});
};

module.exports.postReservation = function postReservation (req, res, next) {
  var body = req.swagger.params['body'].value;

  if (req.session.loggedIn){
    var sessionId = req.session.logged_id;

    Reservation.postReservation(body, sessionId)
        .then(function (response) {
          utils.writeJson(res, response);
        })
        .catch(function (response) {
          utils.writeJson(res, response);
        });

  }
  else
    utils.writeJson(res, {status:401, message: "You aren't logged"});
};
