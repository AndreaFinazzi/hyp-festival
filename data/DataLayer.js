'use strict;'

var schema = {
    tables: {
        ARTISTIC_EVENT: "artistic_event",
        PERFORMANCE: "performance",
        PERFORMER: "performer",
        PHOTO: "photo",
        PHOTO_GALLERY: "photo_gallery",
        RESERVATION: "reservation",
        SAME_DAY_EVENTS: "same_day_events",
        SEMINAR: "seminar",
        USER: "user"
    }
}

var database = require('knex')({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'hyp_festival_db'
    }
  });

module.exports.allPerformers = function() {
    return database.select().table(schema.tables.PERFORMER);
}

module.exports.performerById = function(id) {
    return database.select().table(schema.tables.PERFORMER).where("id", "=", id);
}
