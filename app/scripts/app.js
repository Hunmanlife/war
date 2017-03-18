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
	$stateProvider.state('denglu',{
		url:"/login",
		templateUrl:"views/login.html"
	});
	
	$stateProvider.state('contrain',{
		url:"/contrain",
		templateUrl:"views/contrain.html"
	});
	
	
	$stateProvider.state('contrain.todayNews',{
		url:"/contrain/todayNews",
		templateUrl:"views/todayNews.html"	
	});
	
	$urlRouterProvider.when("","/login")
}])





