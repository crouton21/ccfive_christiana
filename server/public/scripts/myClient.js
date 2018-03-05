const app = angular.module('ccApp', ['ngRoute']); 

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/message.html',
    controller: 'messageController as mc'
  }).when('/message', {
    redirectTo: '/'
  }).otherwise({ template: '<h1>404 Page Not Found</h1>' });
});