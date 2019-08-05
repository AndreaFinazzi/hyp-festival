'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * get all Performers in the Festival
 *
 * returns List
 **/
exports.getPerformers = function() {
  return new Promise(function(resolve, reject) {
      resolve(db.select().table(schema.tables.PERFORMER));
  });
}


/**
 * get all performers that performing in the event passed by parameter.
 *
 * id_event Long id of the event
 * returns List
 **/
exports.getPerformersAtEvent = function(id_event) {
  return new Promise(function(resolve, reject) {
      resolve();
  });
}


/**
 * get performer by id
 *
 * id_performer Long id of the performer to return
 * returns Performer
 **/
exports.getPerformersById = function(id_performer) {
  return new Promise(function(resolve, reject) {
      resolve(db.select().table(schema.tables.PERFORMER).where("id", "=", id_performer));
  });
}

