app.config(function ($routeProvider, $locationProvider) {
    console.log("inside the config file");
    $locationProvider.hashPrefix('');
    $routeProvider.when('/home', { templateUrl: '../public/index.html' })
        .when('/', { templateUrl: '../views/home.html' })
        .when('/worldsNews', { templateUrl: '../views/worldsNews.html' })
        .otherwise({ template: '<h1>OOPS you type something Wrong...' })
});
app.constant('PRODUCTURL', 'http://localhost:8080/news');

// app.config(function ($routeProvider, $locationProvider) {
//     $locationProvider.hashPrefix('');
//     $routeProvider.when('/', { templateUrl: 'views/home.html' }).
//         when('/about/:name/:name1', { templateUrl: 'views/about.html', controller: 'aboutcntl' }).when('/contact', { templateUrl: 'views/contact.html' }).
//         // otherwise({ redirectTo: '/' });
//         when('/home', { templateUrl: 'views/home.html' }).
//         otherwise({ template: '<h3>Opps you type something Wrong</h3>' });
// });