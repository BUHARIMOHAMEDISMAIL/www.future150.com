var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  port = process.env.PORT || 8080,
  config = require('./config'),
  cors = require('cors'),
  // Controllers
  contactsController = require('./app/controllers/contactsController'),
  articlesController = require('./app/controllers/articlesController'),
  playersController = require('./app/controllers/playersController'),
  rankingsController = require('./app/controllers/rankingsController');

mongoose.connect(config.database.url);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(contactsController);
app.use(articlesController);
app.use(playersController);
app.use(rankingsController);

app.listen(port);
