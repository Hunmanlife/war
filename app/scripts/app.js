'use strict';

/**
 * @ngdoc overview
 * @name youmentApp
 * @description
 * # youmentApp
 * Main module of the application.
 */

angular
.module('App', ['ui.router'])
.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$stateProvider.state('contrain',{
		url:"/contrain",
		templateUrl:"views/contrain.html"
	})
	$urlRouterProvider.when("","/contrain")
}])





