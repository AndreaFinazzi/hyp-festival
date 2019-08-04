'use strict';


/**
 * get all photo about the artistic event passed by id as parameter.
 *
 * id_artistic_event Long id of the artistic event
 * returns List
 **/
exports.getPhotoByArtisticEvent = function(id_artistic_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 6,
  "content" : [ "content", "content" ]
}, {
  "id" : 6,
  "content" : [ "content", "content" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = [ {
  "id" : 6,
  "content" : [ "content", "content" ]
}, {
  "id" : 6,
  "content" : [ "content", "content" ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

