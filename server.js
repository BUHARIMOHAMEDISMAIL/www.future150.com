var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  port = process.env.PORT || 8080,
  config = require('./config'),
  cors = require('cors');

mongoose.connect(config.database.url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

require('./app/controllers/contactController')(app);
require('./app/controllers/articleController')(app);

app.listen(port);
