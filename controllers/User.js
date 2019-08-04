'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getUserById = function getUserById (req, res, next) {
  var id_user = req.swagger.params['id_user'].value;
  User.getUserById(id_user)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logUser = function logUser (req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  User.logUser(email,password)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerUser = function registerUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.registerUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
