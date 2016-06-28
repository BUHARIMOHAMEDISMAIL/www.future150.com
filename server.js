require('newrelic');

var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  session = require('express-session'),
  cors = require('cors'),
  prerender = require('prerender-node'),
  path = require('path'),
  port = process.env.PORT || 8080,
  databaseConfig = require('./config/database'),
  authenticationConfig = require('./config/authentication'),
  authenticate = require('./app/middleware/authenticate'),
  // Controllers
  SiteController = require('./app/controllers/siteController'),
  authenticationController = require('./app/controllers/authenticationController'),
  usersController = require('./app/controllers/usersController'),
  contactsController = require('./app/controllers/contactsController'),
  ArticlesController = require('./app/controllers/articlesController'),
  playersController = require('./app/controllers/playersController'),
  rankingsController = require('./app/controllers/rankingsController'),
  collegesController = require('./app/controllers/collegesController'),
  CampsController = require('./app/controllers/campsController'),
  videosController = require('./app/controllers/videosController'),
  productsController = require('./app/controllers/productsController'),
  messageBoardsController = require('./app/controllers/messageBoardsController'),
  TournamentsController = require('./app/controllers/tournamentsController'),
  merchandiseController = require('./app/controllers/merchandiseController'),
  alumnilistController = require('./app/controllers/alumnilistController'),
  // Routers
  SiteRouter = require('./app/routers/siteRouter'),
  ArticlesRouter = require('./app/routers/articlesRouter'),
  CampsRouter = require('./app/routers/campsRouter'),
  TournamentsRouter = require('./app/routers/tournamentsRouter'),
  // Services
  ArticleDataService = require('./app/services/articleDataService'),
  CampDataService = require('./app/services/campDataService'),
  TournamentDataService = require('./app/services/tournamentDataService');

mongoose.connect(databaseConfig.url);
mongoose.Promise = require('q').Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
app.use(prerender);
app.use(session({
  secret: authenticationConfig.secret,
  resave: true,
  saveUninitialized: true
}));
app.use('/admin', express.static('public/admin'));
app.use('/css', express.static('public/css'));
app.use('/fonts', express.static('public/fonts'));
app.use('/img', express.static('public/img'));
app.use('/js', express.static('public/js'));

app.use(authenticationController);
app.use(alumnilistController);
app.use(merchandiseController);
app.use(usersController);
app.use(contactsController);
app.use(playersController);
app.use(rankingsController);
app.use(collegesController);
app.use(videosController);
app.use(productsController);
app.use(messageBoardsController);

var siteController = new SiteController();
var siteRouter = new SiteRouter(siteController);
app.use(siteRouter);

var articleDataService = new ArticleDataService();
var articlesController = new ArticlesController(articleDataService);
var articlesRouter = new ArticlesRouter(articlesController);
app.use(articlesRouter);

var campDataService = new CampDataService();
var campsController = new CampsController(campDataService);
var campsRouter = new CampsRouter(campsController);
app.use(campsRouter);

var tournamentDataService = new TournamentDataService();
var tournamentsController = new TournamentsController(tournamentDataService);
var tournamentsRouter = new TournamentsRouter(tournamentsController);
app.use(tournamentsRouter);

app.get(['/favicon.ico', '/apple-touch-icon.png'], function(req, res) {
  res.sendFile(req.path, {
    root: path.join(__dirname, '/public')
  });
});
app.get('/*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/public')
  });
});

app.listen(port);

module.exports = app;
