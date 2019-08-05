'use strict';

var datas = require("../data/DataLayer");

/**
 * get all Performers in the Festival
 *
 * returns List
 **/
exports.getPerformers = function() {
  return new Promise(function(resolve, reject) {
      resolve(datas.allPerformers());
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
      resolve(datas.performerById(id_performer));
  });
}

