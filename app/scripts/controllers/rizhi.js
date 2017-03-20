   angular.module('App')
	.controller("contrain",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$scope.tiao = function(){
			$state.go("contrain.todayNews")	;			
		}
		
	}])
	.controller("rizhixq",function($scope){
		$(function(){
			$("#todayNews>ul>li").eq(0).css("background","#31708F");
			$(".todayInfo").eq(0).css("display","block");
			$("#todayNews>ul>li").click(function(){
				$(this).css("background","#31708F").siblings().css("background","#033F4B");
				$(".todayInfo").css("display","none");
				$(".todayInfo").eq($(this).index()).css("display","block");
			})
			$(".todayInfo>p").eq(0).css("background","#1B6D85");
			$(".todayInfo>ul").eq(0).css("display","block");
			$(".todayInfo>p").click(function(){
				$(this).css("background","#1B6D85").siblings("p").css("background","#0D648E");
				$(".todayInfo>ul").css("display","none");
				$(".todayInfo>ul").eq($(this).index()).css("display","block");
			})
			//添加发送人
			$(".todayInfo>ul>li>a").click(function(){
				$(".addpeople").css("display","block")
			})
		})
	})
	.controller("addPeople",["$scope","$http","$state",function($scope,$http,$state){
		$http({
			url:"http://47.88.16.225:402/users",
			method:"get",	
		}).then(function(data){
			$scope.addPeoples=data.data
		})
		
	}])
	
			