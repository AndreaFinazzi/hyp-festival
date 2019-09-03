'use strict';

var utils = require('../utils/writer.js');
var Content = require('../service/ContentService.js');

module.exports.getContentByName = function getContentByName (req, res, next) {
  var name_content = req.swagger.params['name_content'].value;
  Content.getContentByName(name_content)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};