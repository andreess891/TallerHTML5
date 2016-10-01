preguntadosApp.controller('InitialCtrl', ['$scope', '$state', InitialCtrl]);

  function InitialCtrl($scope, $state) {
    $scope.goToGeography = function() {
      $state.go('geographyTest');
    }

    $scope.goToMath = function() {
      $state.go('mathTest');
    }

    $scope.goToCine = function() {
      $state.go('cineTest');
    }

    $scope.goToFutbol = function() {
      $state.go('futbolTest');
    }
  }