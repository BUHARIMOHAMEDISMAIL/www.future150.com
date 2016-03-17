var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  cors = require('cors'),
  port = process.env.PORT || 8080,
  databaseConfig = require('./config/database'),
  authenticationConfig = require('./config/authentication'),
  authenticate = require('./app/middleware/authenticate'),
  // Controllers
  authenticationController = require('./app/controllers/authenticationController'),
  usersController = require('./app/controllers/usersController'),
  contactsController = require('./app/controllers/contactsController'),
  articlesController = require('./app/controllers/articlesController'),
  playersController = require('./app/controllers/playersController'),
  rankingsController = require('./app/controllers/rankingsController'),
  collegesController = require('./app/controllers/collegesController'),
  eventsController = require('./app/controllers/eventsController'),
  videosController = require('./app/controllers/videosController'),
  productsController = require('./app/controllers/productsController'),
  messageBoardsController = require('./app/controllers/messageBoardsController');

mongoose.connect(databaseConfig.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(session({
  secret: authenticationConfig.secret,
  resave: true,
  saveUninitialized: true
}));

app.use(authenticationController);
app.use(usersController);
app.use(contactsController);
app.use(articlesController);
app.use(playersController);
app.use(rankingsController);
app.use(collegesController);
app.use(eventsController);
app.use(videosController);
app.use(productsController);
app.use(messageBoardsController);

app.listen(port);
