'use strict';


/**
 * show to the logged user his personal informations.
 *
 * id_user Long id of the logged user
 * returns User
 **/
exports.getUserById = function(id_user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    var examples = {};
    examples['application/json'] = {
  "last_name" : "last_name",
  "id" : 0,
  "first_name" : "first_name",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
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
    resolve();
  });
}

