(function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });
     
    
    $stateProvider
         .state('rooms', {
             url: '/',
             controller: 'RoomsCtrl as rooms',
            templateUrl: '/templates/rooms.html'
         })
     
     }
    
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
 })();

