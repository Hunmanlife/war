
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
				console.log(data);
				$scope.show = true;
				localStorage.uid=data.data.uid;
				$scope.showTitle = "登录成功"
				$state.go("contrain")	
			},function(data){
				$scope.show = true;
				$scope.showTitle = "请输入正确的手机号"
				$timeout(function(){
				    $scope.show = false;
				},900);
			})
		}
	}])
			

