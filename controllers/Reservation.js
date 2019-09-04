'use strict';

var utils = require('../utils/writer.js');
var Reservation = require('../service/ReservationService');

module.exports.getReservations = function getReservations (req, res, next) {

  if (req.session.loggedIn) {
    var id_user = req.session.logged_id;

    Reservation.getReservations(id_user)
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
  var quantity = req.swagger.params["quantity"].value;

  if (req.session.loggedIn) {
    var id_user = req.session.logged_id;

    Reservation.postReservation(id_user, id_artistic_event, quantity)
        .then(function (response) {
          if (req.header('Referer').includes('?'))
            res.redirect(307, req.header('Referer') + "&type=reservation&success=true");
          else
            res.redirect(307, req.header('Referer') + "?type=reservation&success=true");
          res.end();
        })
        .catch(function (response) {
          res.redirect(307, "/?type=reservation&success=false");
          res.end();
        });

  }
  else
    utils.writeJson(res,{status: 401, message: "You aren't logged"}, 401);
    
};
