
 angular.module('App')
	.controller("denglu",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
		$scope.show = false;
		$scope.login=function(){
			$http({
				url:"http://47.88.16.225:402/users/login",
				method:"post",
				data:{
					username:$scope.username,
					password:$scope.passwords
				}
			}).then(function(data){
				$scope.showTitle = "登录成功"
				$scope.show = true;
				$state.go("contrain")	
				$("#supersized").hide()
			},function(data){
				$scope.showTitle = "请输入正确的手机号"
				$scope.show = true;
				$timeout(function(){
				    $scope.show = false;
				},600);
			})
		}
	}])
			

