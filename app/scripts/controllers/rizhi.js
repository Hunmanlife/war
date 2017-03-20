   angular.module('App')
	.controller("contrain",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$scope.tiao = function(){
			$state.go("contrain.todayNews")	;
//			$(function(){
//				$(".rizhi").css("background","#033F4B")
//			})
			
		}
		
	}])
	.controller("todayNews",function($scope){
//		$scope.gao=function(){
				$(function(){
					$("#todayNews>ul>li").click(function(){
						$(this).css("background","#099DBD").siblings().css("background","#033F4B")
					})
				})
//		}
	})
//	$(function(){
//		$("#todayNews>ul>li").click(function(){
//	//		$(this).className("active").siblings().remove("class")
//			alert("123")
//		})
//	})
	
			