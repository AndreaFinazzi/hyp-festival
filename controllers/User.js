'use strict';
var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getUser = function getUser(req, res, next) {
  if (req.session.loggedIn) {
    var id_user = req.session.logged_id;

    User.getUserById(id_user)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  }
  else
    utils.writeJson(res, { status: 401, message: "You aren't logged" }, 401);
};

module.exports.logUser = function logUser(req, res, next) {
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;

  User.logUser(email, password)
    .then(function (response) {
      //Enable Session
      req.session.loggedIn = true;
      req.session.logged_id = response[0].id;

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, response.status);
    });
};

module.exports.logOutUser = function logOutUser(req, res, next) {
  req.session.destroy();
  utils.writeJson(res,{status: 200, message: "Successful operation"});
}

module.exports.registerUser = function registerUser(req, res, next) {

  var first_name = req.swagger.params['first_name'].value;
  var last_name = req.swagger.params['last_name'].value;
  var email = req.swagger.params['email'].value;
  var password = req.swagger.params['password'].value;
  var password_confirm = req.swagger.params['password_confirm'].value;

  var body = {
    "first_name": first_name,
    "last_name": last_name,
    "email": email,
    "password": password,
    "password_confirm": password_confirm
  }

  User.registerUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      if (response.status) {
        utils.writeJson(res, response, response.status);
      }
    });
};
