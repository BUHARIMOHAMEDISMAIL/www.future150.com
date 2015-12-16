var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  port = process.env.PORT || 8080,
  config = require('./config');

mongoose.connect(config.database.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./app/controllers/contactController')(app);

app.listen(port);
