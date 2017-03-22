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
	})
	.state('contrain',{
		url:"/contrain",
		templateUrl:"views/contrain.html"
	})
	//工作
	.state('contrain.todayNews',{
		url:"/todayNews",
		templateUrl:"views/todayNews.html"	
	})
	.state('contrain.todayNews.rizhixq',{
		url:"/rizhixq",
		templateUrl:"views/rizhixq.html"	
	})
	.state('contrain.todayNews.shenpixq',{
		url:"/shenpixq",
		templateUrl:"views/shenpixq.html"	
	})
	//通知
	.state('contrain.News',{
		url:"/News",
		templateUrl:"views/News.html"	
	})
	.state('contrain.News.rizhitz',{
		url:"/rizhitz",
		templateUrl:"views/rizhitz.html"	
	})
	.state('contrain.News.shenpitz',{
		url:"/shenpitz",
		templateUrl:"views/shenpitz.html"	
	})
	//联系人
	.state('contrain.user',{
		url:"/user",
		templateUrl:"views/user.html"	
	})
	.state('contrain.user.userInfo',{
		url:"/userInfo",
		templateUrl:"views/userInfo.html"	
	})
	//添加
	.state('contrain.Add',{
		url:"/contrain/Add",
		templateUrl:"views/Add.html"	
	})
	//联系
	.state('contrain.lianxi',{
		url:"/lianxi",
		templateUrl:"views/lianxi.html"	
	})
	.state('contrain.lianxi.xiangq',{
		url:"/xiangq",
		templateUrl:"views/xiangq.html"	
	})
	$urlRouterProvider.when("","/login")
}])





