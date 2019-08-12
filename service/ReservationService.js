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

      db.select().table(schema.tables.RESERVATION).join(schema.tables.ARTISTIC_EVENT,schema.tables.RESERVATION+"."+
        schema.fields.FK+"artistic_event",schema.tables.ARTISTIC_EVENT+"."+schema.fields.PK).where(
          schema.tables.RESERVATION+"."+schema.fields.FK+"user", sessionId).then(function (result) {

            if (Object.keys(result).length==0)
              resolve({message: "You don't have any reservation"});
            else
              resolve(result);
          })
        
        
          resolve();
          
    
      
    
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

