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

      
    db.select("artistic_event.title", "artistic_event.id", "artistic_event.id_photo", "reservation.quantity").table(schema.tables.ARTISTIC_EVENT).innerJoin(
      schema.tables.RESERVATION, "artistic_event.id", "reservation.id_artistic_event").where("reservation.id_user", sessionId).then(function (result) {

        resolve(result);

        /*
        if (Object.keys(result).length==0)
          resolve({message: "You don't have any reservation"});
        else{
        
        var reserv = Object(result);
        
        
          resolve(result);
        
        
        
        }

        */
      })
    
    
      
     })
  
}
    
    
          
    
      
    
  



/**
 * Add a reservation for the logged user.
 *
 * body Reservation reservation object that needs to be add for the user.
 * no response value expected for this operation
 **/
exports.postReservation = function(sessionId, id_artistic_event) {
  return new Promise(function(resolve, reject) {

      var body = {
        "id_user": sessionId,
        "id_artistic_event": id_artistic_event
      }

      resolve(db.select().table(schema.tables.RESERVATION).insert(body));
    
  });
}

