'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;



/**
 * get all seminars scheduled in the Festival
 *
 * returns List
 **/
exports.getSeminar = function() {
  return new Promise(function(resolve, reject) {
    resolve(db.select().table(schema.tables.SEMINAR));
  });
}


/**
 * get all seminars that discusses the artistic event passed by id as query parameter
 *
 * id_artistic_event Long id of the artistic event
 * returns List
 **/
exports.getSeminarByArtisticEvent = function(id_artistic_event) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * get all Seminars in the Festival
 *
 * id_seminar Long id of the seminar to return
 * returns Seminar
 **/
exports.getSeminarById = function(id_seminar) {
  return new Promise(function(resolve, reject) {
    resolve(db.select().table(schema.tables.SEMINAR).where('id', id_seminar));
  });
}

