'use strict;'

var local = false;
var types = require('pg').types;

types.setTypeParser(1082, val => val);

module.exports.schema = {
    tables: {
        ARTISTIC_EVENT: "artistic_event",
        CONTENT: 'pages',
        PERFORMANCE: "performance",
        PERFORMER: "performer",
        PHOTO: "photo",
        PHOTO_GALLERY: "photo_gallery",
        RESERVATION: "reservation",
        SAME_DAY_EVENTS: "same_day_events",
        SEMINAR: "seminar",
        USER: "user"
    },
    fields: {
      PK: "id",
      FK: "id_",
      TYPE: "type",
      DATE: "date",
      EMAIL: "email",
      NAME: 'name',
      PASSWORD: "password"
    }
}

module.exports.database = require('knex')({
    client: 'pg',
    connection: local ? {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'hyp-festival-2019'
    } :
    'postgres://prod_user:prod_password@prod.host.com:5432/prod_db_name?ssl=true'
  });
