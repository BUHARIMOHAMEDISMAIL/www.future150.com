(function() {
  'use strict';

  angular
    .module('future150')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/hs/');

      $stateProvider
        .state('site', {
          url: '/:site',
          abstract: true,
          template: '<ui-view></ui-view>'
        });

      $stateProvider
        .state('site.home', {
          url: '/',
          templateUrl: '/app/home/homeView.html',
          controller: 'homeController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: '/app/login/loginView.html',
          controller: 'loginController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('register', {
          url: '/register',
          templateUrl: '/app/register/registerView.html',
          controller: 'registerController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('account', {
          url: '/account',
          abstract: true,
          templateUrl: '/app/account/accountView.html'
        });

      $stateProvider
        .state('account.personal', {
          url: '/personal',
          templateUrl: '/app/account/personalView.html'
        });

      $stateProvider
        .state('account.settings', {
          url: '/settings',
          templateUrl: '/app/account/settingsView.html'
        });

      $stateProvider
        .state('account.billing', {
          url: '/billing',
          templateUrl: '/app/account/billingView.html'
        });

      $stateProvider
        .state('pricing', {
          url: '/pricing',
          templateUrl: '/app/pricing/pricing.html'
        });

      $stateProvider
        .state('camps', {
          url: '/camps',
          templateUrl: '/app/camps/campsView.html',
          controller: 'campsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('camp', {
          url: '/camp/:slug',
          templateUrl: '/app/camps/campView.html',
          controller: 'campController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('registerCamp', {
          url: '/camp/:slug/register',
          templateUrl: '/app/camps/campRegisterView.html',
          controller: 'campRegisterController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('tournaments', {
          url: '/tournaments',
          templateUrl: '/app/tournaments/tournamentsView.html',
          controller: 'tournamentsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('tournament', {
          url: '/tournament/:slug',
          templateUrl: '/app/tournaments/tournamentView.html',
          controller: 'tournamentController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('registerTournament', {
          url: '/tournament/:slug/register',
          templateUrl: '/app/tournaments/registerTournamentView.html',
          controller: 'tournamentRegisterController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('submitTournamentRoster', {
          url: '/tournament/:slug/submitRoster',
          templateUrl: '/app/tournaments/submitTournamentRoster.html'
        });

      $stateProvider
        .state('contactUs', {
          url: '/contact-us',
          templateUrl: '/app/contactUs/contactUsView.html',
          controller: 'contactUsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('shop', {
          url: '/shop',
          templateUrl: '/app/shop/shopView.html',
          controller: 'shopController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('product', {
          url: '/product/:slug',
          templateUrl: '/app/shop/productView.html',
          controller: 'productController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('buyProduct', {
          url: '/product/:slug/buy',
          templateUrl: '/app/shop/buyProductView.html',
          controller: 'buyProductController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('site.news', {
          url: '/news',
          templateUrl: '/app/news/newsView.html',
          controller: 'newsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('article', {
          url: '/article/:slug',
          templateUrl: '/app/article/articleView.html',
          controller: 'articleController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('messageBoards', {
          url: '/message-boards',
          templateUrl: '/app/messageBoards/messageBoardsView.html',
          controller: 'messageBoardsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('messageBoardThread', {
          url: '/message-boards/:slug',
          templateUrl: '/app/messageBoards/threadView.html',
          controller: 'threadController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('videos', {
          url: '/videos',
          templateUrl: '/app/videos/videosView.html',
          controller: 'videosController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('profile', {
          url: '/profile/:slug',
          templateUrl: '/app/profile/profileView.html',
          controller: 'profileController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('rankings', {
          url: '/rankings/:type',
          templateUrl: '/app/rankings/rankingsView.html',
          controller: 'rankingsController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('trendingPlayers', {
          url: '/trendingPlayers',
          templateUrl: '/app/trendingPlayers/trendingPlayersView.html'
        });

      $stateProvider
        .state('colleges', {
          url: '/colleges',
          templateUrl: '/app/colleges/collegesView.html',
          controller: 'collegesController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('college', {
          url: '/college/:slug',
          templateUrl: '/app/colleges/collegeView.html',
          controller: 'collegeController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('search', {
          url: '/search?q',
          templateUrl: '/app/search/searchView.html',
          controller: 'searchController',
          controllerAs: 'vm'
        });

      $stateProvider
        .state('aauTeams', {
          url: '/aauTeams',
          templateUrl: '/app/aauTeams/aauTeamsView.html'
        });

      $stateProvider
        .state('alumni', {
          url: '/alumni',
          templateUrl: '/app/alumni/alumniView.html'
        });

      $stateProvider
        .state('collegeExposurePack', {
          url: '/collegeExposurePack',
          templateUrl: '/app/collegeExposurePack/collegeExposurePackView.html'
        });

      $stateProvider
        .state('submitPlayerInfo', {
          url: '/submitPlayerInfo',
          templateUrl: '/app/submitPlayerInfo/submitPlayerInfo.html'
        });

      $stateProvider
        .state('submitPlayerVideo', {
          url: '/submitPlayerVideo',
          templateUrl: '/app/submitPlayerVideo/submitPlayerVideo.html'
        });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
    }]);
})();
