(function() {
  'use strict';

  angular
    .module('future150Admin')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('dashboard', {
          url: '/',
          templateUrl: 'app/components/dashboard/dashboardView.html',
          controller: 'dashboardController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/components/login/loginView.html',
          controller: 'loginController',
          controllerAs: 'vm',
          authenticate: false
        });

      $stateProvider
        .state('profile', {
          url: '/profile',
          templateUrl: 'app/components/profile/profileView.html',
          controller: 'profileController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('users', {
          url: '/users',
          templateUrl: 'app/components/users/usersView.html',
          controller: 'usersController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('user', {
          url: '/user/:id',
          templateUrl: 'app/components/users/userView.html',
          controller: 'userController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('players', {
          url: '/players',
          templateUrl: 'app/components/players/playersView.html',
          controller: 'playersController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('player', {
          url: '/player/:id',
          templateUrl: 'app/components/players/playerView.html',
          controller: 'playerController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('nationalRankings', {
          url: '/nationalRankings',
          templateUrl: 'app/components/rankings/nationalRankingsView.html',
          controller: 'nationalRankingsController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('nationalRanking', {
          url: '/nationalRanking/:id',
          templateUrl: 'app/components/rankings/nationalRankingView.html',
          controller: 'nationalRankingController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('stateRankings', {
          url: '/stateRankings',
          templateUrl: 'app/components/rankings/stateRankingsView.html',
          authenticate: true
        });

      $stateProvider
        .state('aauRankings', {
          url: '/aauRankings',
          templateUrl: 'app/components/rankings/aauRankingsView.html',
          authenticate: true
        });

      $stateProvider
        .state('articles', {
          url: '/articles',
          templateUrl: 'app/components/articles/articlesView.html',
          controller: 'articlesController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('article', {
          url: '/article/:id',
          templateUrl: 'app/components/articles/articleView.html',
          controller: 'articleController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('videos', {
          url: '/videos',
          templateUrl: 'app/components/videos/videosView.html',
          controller: 'videosController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('video', {
          url: '/video/:id',
          templateUrl: 'app/components/videos/videoView.html',
          controller: 'videoController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('events', {
          url: '/events',
          templateUrl: 'app/components/events/eventsView.html',
          controller: 'eventsController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('event', {
          url: '/event/:id',
          templateUrl: 'app/components/events/eventView.html',
          controller: 'eventController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('merchandise', {
          url: '/merchandise',
          templateUrl: 'app/components/merchandise/merchandiseView.html',
          authenticate: true
        });

      $stateProvider
        .state('colleges', {
          url: '/colleges',
          templateUrl: 'app/components/colleges/collegesView.html',
          controller: 'collegesController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('college', {
          url: '/college/:id',
          templateUrl: 'app/components/colleges/collegeView.html',
          controller: 'collegeController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('ads', {
          url: '/ads',
          templateUrl: 'app/components/ads/adsView.html',
          authenticate: true
        });

      $stateProvider
        .state('contacts', {
          url: '/contacts',
          templateUrl: 'app/components/contacts/contactsView.html',
          controller: 'contactsController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('contact', {
          url: '/contact/:id',
          templateUrl: 'app/components/contacts/contactView.html',
          controller: 'contactController',
          controllerAs: 'vm',
          authenticate: true
        });

      $stateProvider
        .state('alumni', {
          url: '/alumni',
          templateUrl: 'app/components/alumni/alumniView.html',
          authenticate: true
        });
    }]);
})();
