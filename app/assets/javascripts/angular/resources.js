//Factory
myApp.factory('Products', ['$resource', function ($resource) {
    return $resource('/products.json', {}, {
        query: { method: 'GET', isArray: true, params: {id: '@id'} },
        create: { method: 'POST', params: {id: '@id'} }
    })
}]);

myApp.factory('Product', ['$resource', function ($resource) {
    return $resource('/products/:id.json', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
}]);
