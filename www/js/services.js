angular.module('starter.services', [])

.factory('Orders', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var orders = [{
    id: 0,
    name: 'John Smith',
    lastText: 'Clerk\'s Office',
    phone: '716-555-1212',
    face: 'img/john.png',
    amount: '1770',
    status: 'pending'
  }, {
    id: 1,
    name: 'Homer Simpson',
    lastText: 'Department of Energy',
    face: 'img/homer.jpg',
    amount: '4398.76',
    status: 'pending',
  },{
    id: 2,
    name: 'Alex Davidson',
    lastText: 'Water and Sewer',
    face: 'img/alex.jpg',
    amount: '33.88',
    status: 'pending'
  }, {
    id: 3,
    name: 'Steve Wozniak',
    lastText: 'Environmental Agency',
    face: 'img/steve.jpg',
    amount: '456.94',
    status: 'pending'
  }, {
    id: 4,
    name: 'Elon Musk',
    lastText: 'Highway Department',
    face: 'img/elon.png',
    amount: '3500.00',
    status: 'pending'
  }, {
      id: 5,
      name: 'John Carmack',
      lastText: 'Infrastructure Management',
      face: 'img/carmack.jpg',
      amount: '350,000.00',
      status: 'pending'
  }, {
      id: 6,
      name: 'Jeff Bezos',
      lastText: 'Drone Delivery',
      face: 'img/jeff.png',
      amount: '600,000.00',
      status: 'pending'
  }];

  return {
    all: function() {
      return orders;
    },
    remove: function(order) {
      orders.splice(orders.indexOf(order), 1);
    },
    get: function(orderId) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === parseInt(orderId)) {
          return orders[i];
        }
      }
      return null;
    }
  };
});
