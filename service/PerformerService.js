'use strict';


/**
 * get all Performers in the Festival
 *
 * returns List
 **/
exports.getPerformers = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "main_achievements" : "main_achievements",
  "current_affiliations" : "current_affiliations",
  "company_members" : "company_members",
  "name" : "name",
  "id" : 0,
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "type" : "type"
}, {
  "main_achievements" : "main_achievements",
  "current_affiliations" : "current_affiliations",
  "company_members" : "company_members",
  "name" : "name",
  "id" : 0,
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = [ {
  "main_achievements" : "main_achievements",
  "current_affiliations" : "current_affiliations",
  "company_members" : "company_members",
  "name" : "name",
  "id" : 0,
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "type" : "type"
}, {
  "main_achievements" : "main_achievements",
  "current_affiliations" : "current_affiliations",
  "company_members" : "company_members",
  "name" : "name",
  "id" : 0,
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "main_achievements" : "main_achievements",
  "current_affiliations" : "current_affiliations",
  "company_members" : "company_members",
  "name" : "name",
  "id" : 0,
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

