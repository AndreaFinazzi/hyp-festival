'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * get all reservations about the logged user.
 *
 * returns List
 **/
exports.getReservations = function(sessionId) {
  return new Promise(function(resolve, reject) {
    
    
      resolve(db.select().table(schema.tables.USER).where(schema.fields.PK, sessionId));
    
  });
}


/**
 * Add a reservation for the logged user.
 *
 * body Reservation reservation object that needs to be add for the user.
 * no response value expected for this operation
 **/
exports.postReservation = function(body, sessionId) {
  return new Promise(function(resolve, reject) {

    
      resolve(db.select().table(schema.tables.USER).insert(body).where(schema.fields.PK, sessionId));
    
  });
}

