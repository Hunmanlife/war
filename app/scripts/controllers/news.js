angular.module("App")
.controller("rizhitz",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){
	//发送de
		$scope.Newsclassifys=[];
		$scope.Newsa=[];
		$scope.Newsb=[];
		$scope.Newsc=[];
	//接收de
			$scope.NewsInfos=[];
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				$scope.NewsInfos=data.data;
				for (var i=0;i<$scope.NewsInfos.length;i++) {
					if($scope.NewsInfos[i].classify==0){
						$scope.Newsclassifys.unshift("日报");
						$scope.Newsa.unshift("今日完成工作");
						$scope.Newsb.unshift("未完成工作");
						$scope.Newsc.unshift("备注");
					}else if($scope.NewsInfos[i].classify==1){
						$scope.Newsclassifys.unshift("周报");
						$scope.Newsa.unshift("本周完成工作");
						$scope.Newsb.unshift("本周工作总结");
						$scope.Newsc.unshift("备注");
					}else if($scope.NewsInfos[i].classify==2){
						$scope.Newsclassifys.unshift("月报");
						$scope.Newsa.unshift("本月工作计划");
						$scope.Newsb.unshift("本月工作总结");
						$scope.Newsc.unshift("备注");
					};
					
				}
			})
			
}])	
