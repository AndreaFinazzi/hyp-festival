'use strict';

var fs = require('fs'),
  path = require('path'),
  http = require('http');

var express = require('express');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');

var app = express();
var serverPort = 8080;
var ejs = require('ejs')

//const passport = require("passport");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require ('express-session');
var bcrypt = require ('bcrypt');

module.exports.bcrypt = bcrypt;

// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

const staticDir = 'frontend/public/';

//Initialize the express-session middleware
app.use(session({ secret: "secret",
                  resave: true,
                  saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());




// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  //static resources servving
  app.use(express.static(staticDir));

  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));
  
  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());
  
  staticRoutes(app);

  // Start the server .listen(process.env.PORT || 5000)
  http.createServer(app).listen(process.env.PORT || serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', process.env.PORT || serverPort, process.env.PORT || serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', process.env.PORT || serverPort);
  });

});

const staticRoutes = function(app) {
  app.use('/backend/spec.yaml', function (req, res) {
    res.sendFile(__dirname + '/api/swagger.yaml');
  })

  app.use('/backend/swaggerui', function (req, res) {
    res.redirect('/docs');
  })

  compileTemplate('index', getStatics({ scripts: ['index.js'] }));
  compileTemplate('events/index', getStatics({ scripts: ['events.js', 'bootstrap-datepicker.min.js'], styles: ['bootstrap-datepicker3.min.css'] }));
  compileTemplate('performers/index', getStatics({ scripts: ['performers.js'] }));
  compileTemplate('seminars/index', getStatics({ scripts: ['seminars.js'] }));
  compileTemplate('contacts', getStatics({ scripts: ['contacts.js'], renderer: false }));
  compileTemplate('registration/index', getStatics({ scripts: ['registration.js'], renderer: false }));
  compileTemplate('reservation/index', getStatics({ scripts: ['reservation.js']}));

  publicTemplate('slider_item');
  publicTemplate('photo_box');
  publicTemplate('calendar_box');
  publicTemplate('seminars/seminar_box');
  publicTemplate('seminars/details');
  publicTemplate('performers/details');
  publicTemplate('performers/performer_box');
  publicTemplate('events/details');
  publicTemplate('events/event_box');
  publicTemplate('events/reservation_modal');
  publicTemplate('reservation/reservation_box');

}

const listFileIn = function (dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  return dirents
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name);
}

const getStatics = function (options = {renderer: true}) {
  let statics = {
    styles: listFileIn(staticDir + 'assets/css/auto').filter(element => element.substr(-4) == '.css' ? element : null).map(fileName => '/assets/css/auto/' + fileName),
    scripts: listFileIn(staticDir + 'assets/js/auto').filter(element => element.substr(-3) == '.js' ? element : null).map(fileName => '/assets/js/auto/' + fileName),
  }

  if (!options.renderer || options.renderer == false) {
    ['contentRenderer.js']
    .map(fileName => '/assets/js/' + fileName)
    .forEach(element => statics.scripts.push(element));
  }

  if (options.scripts) {
    options.scripts
      .map(fileName => '/assets/js/extras/' + fileName)
      .forEach(element => statics.scripts.push(element));
  }

  if (options.styles) {
    options.styles
      .map(fileName => '/assets/css/extras/' + fileName)
      .forEach(element => statics.styles.push(element));
  }

  return statics;
}

function publicTemplate(path) {
  fs.copyFile('frontend/templates/' + path + '.ejs', 'frontend/public/' + path + '.template', (err) => {
    if (err) throw err;
    console.log('frontend/templates/' + path + '.template successfully published.');
  });
}

function compileTemplate(path, information) {
  fs.readFile('frontend/templates/' + path + '.ejs', 'utf8', function (err, data) {
      if (err) { console.log(err); return false; }

      var ejs_string = data,
          template = ejs.compile(ejs_string, { filename: 'frontend/templates/' + path  + '.ejs'}),
          html = template(information);

      fs.writeFile('frontend/public/' + path + '.html', html, function(err) {
          if(err) { console.log(err); return false }
          return true;
      });
  });
}

