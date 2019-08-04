'use strict';


/**
 * get all reservations about the logged user.
 *
 * returns List
 **/
exports.getReservations = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "quantity" : 5,
  "id_artistic_event" : 1,
  "id" : 0,
  "id_user" : 6
}, {
  "quantity" : 5,
  "id_artistic_event" : 1,
  "id" : 0,
  "id_user" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a reservation for the logged user.
 *
 * body Reservation reservation object that needs to be add for the user.
 * no response value expected for this operation
 **/
exports.postReservation = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

