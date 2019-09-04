'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * get all artistic events scheduled in the Festival
 *
 * returns List
 **/
exports.getArtisticEvent = function () {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .options({ nestTables: true })
    );
  });
}


/**
 * get all artistic events scheduled in the Festival at the date passed by parameter.
 *
 * date date date of the artistic events to return
 * returns List
 **/
exports.getArtisticEventByDate = function (date) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .where(schema.fields.DATE, "=", date)
    );
  });
}


/**
 * get artistic event by id.
 *
 * id_artistic_event Long id of the artistic event to return
 * returns ArtisticEvent
 **/
exports.getArtisticEventById = function (id_artistic_event) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .where(schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, "=", id_artistic_event)
        .options({ nestTables: true })
    );
  });
}


/**
 * get all artistic events scheduled in the Festival performed by the performer passed by parameter with id.
 *
 * id_performer Long id of the performer.
 * returns List
 **/
exports.getArtisticEventByPerformer = function (id_performer) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .innerJoin(schema.tables.PERFORMANCE, schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, schema.fields.FK + schema.tables.ARTISTIC_EVENT)
        .innerJoin(schema.tables.PERFORMER, schema.tables.PERFORMER + "." + schema.fields.PK, schema.fields.FK + schema.tables.PERFORMER)
        .where(schema.tables.PERFORMER + "." + schema.fields.PK, "=", id_performer)
    );
  });
}


/**
 * get all artistic events scheduled in the Festival discussed in the seminar passed as parameter by id.
 *
 * id_seminar Long id of the seminar.
 * returns List
 **/
exports.getArtisticEventBySeminar = function (id_seminar) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .where(schema.fields.FK + schema.tables.SEMINAR, "=", id_seminar)
    );
  });
}


/**
 * get all artistic events scheduled in the Festival by type passed as parameter
 *
 * type String type of artistic event.
 * returns List
 **/
exports.getArtisticEventByType = function (type) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + ".*", schema.tables.PHOTO + ".path").table(schema.tables.ARTISTIC_EVENT)
        .leftJoin(schema.tables.PHOTO, schema.tables.PHOTO + "." + schema.fields.PK, schema.fields.FK + schema.tables.PHOTO)
        .where(schema.fields.TYPE, "=", type)
    );
  });
}


/**
 * get all artistic events scheduled in the Festival booked by user passed as parameter.
 *
 * id_user String id of the user.
 * returns List
 **/
exports.getArtisticEventsBookedByUser = function (id_user) {
  return new Promise(function (resolve, reject) {
    resolve(
      db.select(schema.tables.ARTISTIC_EVENT + '.*').table(schema.tables.ARTISTIC_EVENT)
        .innerJoin(schema.tables.RESERVATION, schema.tables.ARTISTIC_EVENT + "." + schema.fields.PK, schema.fields.FK + schema.tables.ARTISTIC_EVENT)
        .innerJoin(schema.tables.USER, schema.tables.USER + "." + schema.fields.PK, schema.fields.FK + schema.tables.USER)
        .where(schema.tables.USER + "." + schema.fields.PK, "=", id_user)
    );
  });
}

