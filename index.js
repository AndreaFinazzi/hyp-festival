'use strict';

var fs = require('fs'),
  path = require('path'),
  http = require('http');

var express = require('express');
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');

var app = express();
var serverPort = 8080;

//const passport = require("passport");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require ('express-session');
var flash    = require('connect-flash');
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

//Configure passport
//require('./utils/Passport')(passport);
//module.exports.passport = passport;

//Initialize the express-session middleware

app.use(session({ secret: "secret",
                  resave: true,
                  saveUninitialized: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(flash());


// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  app.set('views', 'frontend/public/templates');
  app.set('view engine', 'ejs');

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

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});

const staticRoutes = function(app) {

  app.use('/index', function (req, res) {
    res.render('index.ejs', getStatics({ scripts: ['index.js'] }));
  });

  app.use('/events', function (req, res) {
    res.render('events/index.ejs', getStatics({ scripts: ['events.js'] }));
  });

  app.use('/performers', function (req, res) {
    res.render('performers/index.ejs', getStatics({ scripts: ['performers.js'] }));
  });

  app.use('/seminars', function (req, res) {
    res.render('seminars/index.ejs', getStatics({ scripts: ['seminars.js'] }));
  });

  app.use('/contacts', function (req, res) {
    res.render('contacts.ejs', getStatics({ renderer: false }));
  });

  app.use(/^(?!^\/assets|\/templates).*$/, function (req, res) {
    res.redirect('/index');
  });
}

const listFileIn = function (dir) {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  return dirents
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name);
}

const getStatics = function (options = {renderer: true}) {
  let statics = {
    styles: listFileIn(staticDir + 'assets/css/auto').filter(element => element.substr(-4) == '.css' ? element : null).map(fileName => 'assets/css/' + fileName),
    scripts: listFileIn(staticDir + 'assets/js/auto').filter(element => element.substr(-3) == '.js' ? element : null).map(fileName => 'assets/js/' + fileName),
  }

  if (!options.renderer || options.renderer == false) {
    listFileIn(staticDir + 'assets/js/ejs')
    .map(fileName => 'assets/js/ejs/' + fileName)
    .forEach(element => statics.scripts.push(element));
  }

  if (options.scripts) {
    options.scripts
      .map(fileName => 'assets/js/extras/' + fileName)
      .forEach(element => statics.scripts.push(element));
  }

  if (options.styles) {
    options.styles
      .map(fileName => 'assets/css/extras/' + fileName)
      .forEach(element => statics.styles.push(element));
  }

  return statics;
}
