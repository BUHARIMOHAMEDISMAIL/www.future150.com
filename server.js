var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  port = process.env.PORT || 8080,
  config = require('./config'),
  cors = require('cors'),
  // Controllers
  contactController = require('./app/controllers/contactController'),
  articleController = require('./app/controllers/articleController');

mongoose.connect(config.database.url);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

app.use(contactController);
app.use(articleController);

app.listen(port);
