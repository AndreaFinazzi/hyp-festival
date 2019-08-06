'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * get all photo about the artistic event passed by id as parameter.
 *
 * id_artistic_event Long id of the artistic event
 * returns List
 **/
exports.getPhotoByArtisticEvent = function(id_artistic_event) {
  return new Promise(function(resolve, reject) {
      resolve(
        db.select(schema.tables.PHOTO + '.*').table(schema.tables.PHOTO)
        .innerJoin(schema.tables.PHOTO_GALLERY, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .innerJoin(schema.tables.ARTISTIC_EVENT, schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, schema.fields.FK + schema.tables.ARTISTIC_EVENT)
        .where(schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, "=", id_artistic_event)
      );
  });
}


/**
 * get all photo about the performer passed by id as parameter.
 *
 * id_performer Long id of the performer
 * returns List
 **/
exports.getPhotoByPerformer = function(id_performer) {
  return new Promise(function(resolve, reject) {
      resolve(
        db.select(schema.tables.PHOTO + '.*').table(schema.tables.PHOTO)
        .innerJoin(schema.tables.PHOTO_GALLERY, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .innerJoin(schema.tables.PERFORMER, schema.tables.PERFORMER + "." + schema.fields.PK, schema.fields.FK + schema.tables.PERFORMER)
        .where(schema.tables.PERFORMER + "." + schema.fields.PK, "=", id_performer)
      );
  });
}

