angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('OrdersCtrl', function($scope, Orders) {
  $scope.orders = Orders.all();
  $scope.remove = function(order) {
    Orders.remove(order);
  }
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
    $scope.order = Orders.get($stateParams.orderId);
        console.log($scope.order);
    $scope.orderApprove = function(order) {
        $scope.order.status = 'approved';
        console.log("order " + $scope.order.status);  
    }
    $scope.orderReject = function (order) {
        $scope.order.status = 'rejected';
        console.log("order " + $scope.order.status);
    }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableAlerts: false
  };
});
