'use strict';

var dataLayer = require("../utils/DataLayer");
var db = dataLayer.database;
var schema = dataLayer.schema;


/**
 * get content by name identifier.
 *
 * name string name of the content to return
 * returns List
 **/
exports.getContentByName = function (name) {
    return new Promise(function (resolve, reject) {
      resolve(
        db.select().table(schema.tables.CONTENT).where(schema.fields.NAME, "=", name)
      );
    });
  }
  