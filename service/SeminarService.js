'use strict';


/**
 * get all seminars scheduled in the Festival
 *
 * returns List
 **/
exports.getSeminar = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "location" : "location",
  "id" : 6,
  "title" : "title"
}, {
  "date" : "2000-01-23",
  "location" : "location",
  "id" : 6,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "location" : "location",
  "id" : 6,
  "title" : "title"
}, {
  "date" : "2000-01-23",
  "location" : "location",
  "id" : 6,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "location" : "location",
  "id" : 6,
  "title" : "title"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

