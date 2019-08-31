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
    utils.writeJson(res,{status: 401, message: "You aren't logged"}, 401);
};

module.exports.postReservation = function postReservation (req, res, next) {
  
  var id_artistic_event = req.swagger.params["id_artistic_event"].value;

  if (req.session.loggedIn){
    var sessionId = req.session.logged_id;

    Reservation.postReservation(sessionId, id_artistic_event)
        .then(function (response) {
          utils.writeJson(res, response);
        })
        .catch(function (response) {
          utils.writeJson(res, response);
        });

  }
  else
    utils.writeJson(res,{status: 401, message: "You aren't logged"}, 401);
    
};
