'use strict'

var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider) {
	    $routeProvider
		    .when('/home', {
		        templateUrl: 'assets/views/home.html',
		        controller: 'homeCtrl'
		    })
		    .otherwise({
		        redirectTo: '/home'
		    });
	});