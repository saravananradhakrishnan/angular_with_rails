var myApp=angular.module('RailsWithAngular', ['ngRoute', 'ngResource']);

//Routes 

myApp.config([
    '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/products', {
            templateUrl: '/template/products/index.html',
            controller: 'ProductListCtr'
        });
        $routeProvider.when('/products/new', {
            templateUrl: '/template/products/new.html',
            controller: 'ProductAddCtr'
        });
        $routeProvider.when('/products/:id/edit', {
            templateUrl: '/template/products/edit.html',
            controller: "ProductUpdateCtr"
        });
        $routeProvider.otherwise({
            redirectTo: '/products'
        });
    }
]);

