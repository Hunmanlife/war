   angular.module('App')
   	.controller("qingjia", ["$scope", "$http", "$state", function($scope, $http, $state) {

   		$scope.xx = function() {
   			var leixing = $scope.leixing,
   				kaishi = $scope.kaishi,
   				jieshu = $scope.jieshu,
   				shiyou = $scope.shiyou,
   				shenpiren = sessionStorage.spr

   			var timestamp2 = Date.parse(new Date(kaishi));
   			timestamp2 = timestamp2 / 1000;
   			var timestamp3 = Date.parse(new Date(jieshu));
   			timestamp3 = timestamp3 / 1000;
   			//console.log(js)
   			//alert(shenpiren)
   			$http({
   				url: "http://47.88.16.225:402/qingjia",
   				method: "post",
   				data: {
   					zleixing:"请假",
   					uid: localStorage.uid,
   					leixing: leixing,
   					kaishishijian: timestamp2,
   					jieshushijian: timestamp3,
   					qingjiashiyou: shiyou,
   					shenpiren: shenpiren,
   					zhuangtai: "1"
   				}
   			}).then(function(data) {
   				alert("成功")
   				$state.go("contrain.todayNews.shenpixq");
   			})

   		}
   		
		$scope.spr = function() {
   			$scope.isShow = true
   			$http({
   				url: "http://47.88.16.225:402/users",
   				method: "get",
   			}).then(function(data) {
   				$scope.addPeoples = data.data
   				$scope.add = function($index) {
   					$scope.isShow = false
   					var spr = document.getElementsByClassName("shenpiren")[0]
   					spr.value = data.data[$index].nicheng
   					sessionStorage.spr = data.data[$index].nicheng
   				}
   			})

   		}
   	}])
   	.controller("chuchai", ["$scope", "$http", "$state", function($scope, $http, $state) {
   		$scope.tijiao = function() {
   			var pp = document.getElementsByClassName("pp")[0].value
   			var cc = document.getElementsByClassName("cc")[0].value
   			var kaishi = $scope.kaishi
   			var jieshu = $scope.jieshu
   			var ccsy = $scope.chuchaishiyou
   			var spr = document.getElementsByClassName("shenpiren")[0].value
   			var timestamp2 = Date.parse(new Date(kaishi));
   			timestamp2 = timestamp2 / 1000;
   			var timestamp3 = Date.parse(new Date(jieshu));
   			timestamp3 = timestamp3 / 1000;
   			console.log(pp+cc)
   			console.log(timestamp2)
   			console.log(timestamp3)
   			console.log(ccsy)
   			console.log(spr)
			$http({
   				url: "http://47.88.16.225:402/chuchai",
   				method: "post",
   				data:{
   					zleixing:"出差",
   					uid:localStorage.uid,
   					chuchaididian:pp+cc,
   					kaishishijian:timestamp2,
   					jieshushijian:timestamp3,
   					chuchaishiyou:ccsy,
   					shenpiren:spr,
   					zhuangtai:"1"
   				}
   			}).then(function(data) {
   				alert("成功")
   				$state.go("contrain.todayNews.shenpixq");
   			})
   		}
   		$scope.spr = function() {
   			$scope.isShow = true
   			$http({
   				url: "http://47.88.16.225:402/users",
   				method: "get",
   			}).then(function(data) {
   				$scope.addPeoples = data.data
   				$scope.add = function($index) {
   					$scope.isShow = false
   					var spr = document.getElementsByClassName("shenpiren")[0]
   					spr.value = data.data[$index].nicheng
   					sessionStorage.spr = data.data[$index].nicheng
   				}
   			})

   		}

   	}])
   	.controller("baoxiao", ["$scope", "$http", "$state", function($scope, $http, $state) {
		$scope.tijiao=function(){
			var jine=$scope.jine,
				minxi=$scope.minxi;
			var spr = document.getElementsByClassName("shenpiren")[0].value
			var kaishi = $scope.kaishi
   			var jieshu = $scope.jieshu
   			
				var timestamp2 = Date.parse(new Date(kaishi));
   				timestamp2 = timestamp2 / 1000;
   				var timestamp3 = Date.parse(new Date(jieshu));
   				timestamp3 = timestamp3 / 1000;
   				console.log(jine+minxi+timestamp2+timestamp3)
   			$http({
   				url: "http://47.88.16.225:402/baoxiao",
   				method: "post",
   				data:{
   					zleixing:"报销",
   					uid:localStorage.uid,
   					kaishishijian:timestamp2,
   					jieshushijian:timestamp3,
   					baoxiaojine:jine,
   					feiyongmingxi:minxi,
   					shenpiren:spr,
   					zhuangtai:"1"
   				}
   			}).then(function(data) {
   				alert("成功")
   				$state.go("contrain.todayNews.shenpixq");
   			})
		}
		$scope.spr = function() {
   			$scope.isShow = true
   			$http({
   				url: "http://47.88.16.225:402/users",
   				method: "get",
   			}).then(function(data) {
   				$scope.addPeoples = data.data
   				$scope.add = function($index) {
   					$scope.isShow = false
   					var spr = document.getElementsByClassName("shenpiren")[0]
   					spr.value = data.data[$index].nicheng
   					sessionStorage.spr = data.data[$index].nicheng
   				}
   			})

   		}
   	}])
   	.controller("lizhi", ["$scope", "$http", "$state", function($scope, $http, $state) {
   		$scope.tijiao=function(){
   			
   			var yuanyin=$scope.yuanyin
   			var spr = document.getElementsByClassName("shenpiren")[0].value
			var kaishi = $scope.kaishi
   			var jieshu = $scope.jieshu
   			
				var timestamp2 = Date.parse(new Date(kaishi));
   				timestamp2 = timestamp2 / 1000;
   				var timestamp3 = Date.parse(new Date(jieshu));
   				timestamp3 = timestamp3 / 1000;
   			$http({
   				url: "http://47.88.16.225:402/lizhishenqing",
   				method: "post",
   				data:{
   					zleixing:"离职",
   					uid:localStorage.uid,
   					ruzhishijian:timestamp2,
   					lizhishijian:timestamp3,
   					lizhiyuanyin:yuanyin,
   					shenpiren:spr,
   					zhuangtai:"1"
   				}
   			}).then(function(data) {
   				alert("成功")
   				$state.go("contrain.todayNews.shenpixq");
   			})

   		}
   		$scope.spr = function() {
   			$scope.isShow = true
   			$http({
   				url: "http://47.88.16.225:402/users",
   				method: "get",
   			}).then(function(data) {
   				$scope.addPeoples = data.data
   				$scope.add = function($index) {
   					$scope.isShow = false
   					var spr = document.getElementsByClassName("shenpiren")[0]
   					spr.value = data.data[$index].nicheng
   					sessionStorage.spr = data.data[$index].nicheng
   				}
   			})

   		}
   	}])
   	.controller("shenpitz", ["$scope", "$http", "$state", function($scope, $http, $state) {
		$http({
   				url: "http://47.88.16.225:402/qingjia",
   				method: "get",
   				
   			}).then(function(data) {
   				$scope.dwsp=data.data
   				console.log($scope.dwsp) 
   			})
   			$http({
   				url: "http://47.88.16.225:402/chuchai",
   				method: "get",
   				
   			}).then(function(data) {
   				$scope.dwspone=data.data
   				console.log($scope.dwspone) 
   			})
   			$http({
   				url: "http://47.88.16.225:402/baoxiao",
   				method: "get",
   				
   			}).then(function(data) {
   				$scope.dwsptwo=data.data
   				console.log($scope.dwsptwo) 
   			})
   			$http({
   				url: "http://47.88.16.225:402/lizhishenqing",
   				method: "get",
   				
   			}).then(function(data) {
   				$scope.dwspthere=data.data
   				console.log($scope.dwspthere) 
   			})
   	}])
   	.filter("resetCategory",function(){
        	return function(input){
        		if(input=="1"){
        			return input="未审批";
        		}
        		if(input==2){
        			return input="同意";
        		}
        		if(input==3){
        			return input="拒绝";
        		}
        		
        	}
        	return input;
        })
//	.controller("qingjia",function($scope){
   //		$scope.xx=function(){
   //			alert(123)
   //		}
   //	})