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
		url:"/todayNews",
		templateUrl:"views/todayNews.html"	
	});
	$stateProvider.state('contrain.todayNews.rizhixq',{
		url:"/rizhixq",
		templateUrl:"views/rizhixq.html"	
	});
	
	
	$urlRouterProvider.when("","/login")
}])





