angular.
    module('focusAPP').
    config(
    function (
        $locationProvider,
        $routeProvider
    ) {

        //$locationProvider.html5Mode(false);
        //$locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
                templateUrl: '/index_orange.html'
            }).
            when('/blog', {
                templateUrl: '/blog.html'
            }).
            when('/about', {
                templateUrl: '/about.html'
            }).
            when('/contact', {
                templateUrl: '/contact.html'
            }).
            when('/tabs', {
                templateUrl: '/tabs.html'
            }).
            when('/photos', {
                templateUrl: '/photos.html'
            }).
            when('/videos', {
                templateUrl: '/videos.html'
            }).
            when('/blog-single-second', {
                templateUrl: '/blog-single-second.html'
            }).
            when('/blog-single', {
                templateUrl: '/blog-single.html'
            }).
            when('/features', {
                templateUrl: '/features.html'
            }).
            when('/form', {
                templateUrl: '/form.html'
            }).
            when('/menu', {
                templateUrl: '/menu.html'
            }).
            when('/cidades/:tipoPagina', {
                template: '<h1>Cidades</h1>'
            }).
            when('/naoautorizado', {
                template: '<h1>Ops! Você não está autorizado acessar esta página.</h1>'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
    );


