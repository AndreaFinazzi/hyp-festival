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
      resolve(
          db.select(schema.tables.PERFORMER + ".*", schema.tables.PHOTO + ".path").table(schema.tables.PERFORMER)
          .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
          .options({ nestTables: true})
        );
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
      resolve(
        db.select(schema.tables.PERFORMER + '.*').table(schema.tables.PERFORMER)
        .innerJoin(schema.tables.PERFORMANCE, schema.tables.PERFORMER + "." + schema.fields.PK, schema.fields.FK + schema.tables.PERFORMER)
        .innerJoin(schema.tables.ARTISTIC_EVENT, schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, schema.fields.FK + schema.tables.ARTISTIC_EVENT)
        .where(schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, "=", id_event)
        );
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
      resolve(
        db.select(schema.tables.PERFORMER + ".*", schema.tables.PHOTO + ".path").table(schema.tables.PERFORMER)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .where(schema.tables.PERFORMER + "." + schema.fields.PK, "=", id_performer)
        .options({ nestTables: true})

        );
  });
}