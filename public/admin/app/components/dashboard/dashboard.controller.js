(function() {
  'use strict';

  angular
    .module('future150Admin')
    .controller('dashboardController', dashboardController);

  dashboardController.$inject = [];

  function dashboardController() {
    var vm = this;

    vm.labels = ['January', 'February', 'March', 'April', 'May'];
    vm.series = ['Tournaments', 'Camps', 'Website'];

    vm.data = [
      [300, 759, 480, 381, 156],
      [928, 448, 420, 300, 846],
      [258, 300, 430, 149, 686]
    ];

    vm.labels2 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    vm.data2 = [300, 500, 100];
  }
})();
