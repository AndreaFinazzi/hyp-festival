'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * get all reservations about the logged user.
 *
 * returns List
 **/
exports.getReservations = function(id_user) {
  return new Promise(function(resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.RESERVATION + ".quantity", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
      .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
      .innerJoin(schema.tables.RESERVATION, schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, schema.tables.RESERVATION + "." + schema.fields.FK + schema.tables.ARTISTIC_EVENT)
      .where(schema.tables.RESERVATION + ".id_user", id_user)
    )  
  })
  
} 


/**
 * Add a reservation for the logged user.
 *
 * body Reservation reservation object that needs to be add for the user.
 * no response value expected for this operation
 **/
exports.postReservation = function(id_user, id_artistic_event, quantity) {
  return new Promise(function(resolve, reject) {

      var body = {
        "id_user": id_user,
        "id_artistic_event": id_artistic_event,
        "quantity": quantity
      }

      resolve(db(schema.tables.RESERVATION).insert(body));
  });
}

