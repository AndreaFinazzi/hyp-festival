'use strict';
var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

/**
 * show to the logged user his personal informations.
 *
 * id_user Long id of the logged user
 * returns User
 **/
exports.getUserById = function(id_user) {
  return new Promise(function(resolve, reject) {
    resolve(db.select().table(schema.tables.USER).where("id", id_user))
  });
}


/**
 * log the user.
 *
 * email String email of the user to log
 * password String password of the user to log
 * returns User
 **/
exports.logUser = function(email,password) {
  return new Promise(function(resolve, reject) {
   
  });
}


/**
 * register new user to the web site
 *
 * body User user object that needs to be registered.
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve(db(schema.tables.USER).insert(body));
  });
}

