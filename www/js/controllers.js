angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $filter, Orders) {
   $scope.orders = Orders.all($scope.orders); 
   $scope.pendingOrders = $scope.orders;
   $scope.pending = $filter('filter')($scope.orders, {status : 'approved'})[0];
})

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
    }
    $scope.orderReject = function (order) {
        $scope.order.status = 'rejected';
    }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableAlerts: false
  };
});
