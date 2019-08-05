'use strict';


/**
 * get all artistic events scheduled in the Festival
 *
 * returns List
 **/
exports.getArtisticEvent = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
//     examples['application/json'] = [ {
//   "date" : "2000-01-23",
//   "fact_sheet" : "fact_sheet",
//   "treated_by" : [ {
//     "date" : "2000-01-23",
//     "location" : "location",
//     "id" : 6,
//     "title" : "title"
//   }, {
//     "date" : "2000-01-23",
//     "location" : "location",
//     "id" : 6,
//     "title" : "title"
//   } ],
//   "location" : "location",
//   "id" : 0,
//   "abstract" : "abstract",
//   "primary_photo" : {
//     "id" : 6,
//     "content" : [ "content", "content" ]
//   },
//   "title" : "title",
//   "type" : "type"
// }, {
//   "date" : "2000-01-23",
//   "fact_sheet" : "fact_sheet",
//   "treated_by" : [ {
//     "date" : "2000-01-23",
//     "location" : "location",
//     "id" : 6,
//     "title" : "title"
//   }, {
//     "date" : "2000-01-23",
//     "location" : "location",
//     "id" : 6,
//     "title" : "title"
//   } ],
//   "location" : "location",
//   "id" : 0,
//   "abstract" : "abstract",
//   "primary_photo" : {
//     "id" : 6,
//     "content" : [ "content", "content" ]
//   },
//   "title" : "title",
//   "type" : "type"
// } ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all artistic events scheduled in the Festival at the date passed by parameter.
 *
 * date date date of the artistic events to return
 * returns List
 **/
exports.getArtisticEventByDate = function(date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
}, {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
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
 * get artistic event by id.
 *
 * id_artistic_event Long id of the artistic event to return
 * returns ArtisticEvent
 **/
exports.getArtisticEventById = function(id_artistic_event) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all artistic events scheduled in the Festival performed by the performer passed by parameter with id.
 *
 * id_performer Long id of the performer.
 * returns List
 **/
exports.getArtisticEventByPerformer = function(id_performer) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
}, {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
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
 * get all artistic events scheduled in the Festival discussed in the seminar passed as parameter by id.
 *
 * id_seminar Long id of the seminar.
 * returns List
 **/
exports.getArtisticEventBySeminar = function(id_seminar) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
}, {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
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
 * get all artistic events scheduled in the Festival by type passed as parameter
 *
 * type String type of artistic event.
 * returns List
 **/
exports.getArtisticEventByType = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
}, {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
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
 * get all artistic events scheduled in the Festival booked by user passed as parameter.
 *
 * id_user String id of the user.
 * returns List
 **/
exports.getArtisticEventsBookedByUser = function(id_user) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
}, {
  "date" : "2000-01-23",
  "fact_sheet" : "fact_sheet",
  "treated_by" : [ {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  }, {
    "date" : "2000-01-23",
    "location" : "location",
    "id" : 6,
    "title" : "title"
  } ],
  "location" : "location",
  "id" : 0,
  "abstract" : "abstract",
  "primary_photo" : {
    "id" : 6,
    "content" : [ "content", "content" ]
  },
  "title" : "title",
  "type" : "type"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

