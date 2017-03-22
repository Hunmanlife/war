angular.module('App')
	//我发送的
	.controller("rizhixq",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){	
		//添加联系人界面初始隐藏
		$scope.addpeopleBg=false;
		//发送de
		$scope.classifys=[];
		$scope.Infosa=[];
		$scope.Infosb=[];
		$scope.Infosc=[];
		//接收de
		$scope.getInfo=[];
		
		//获取联系人的昵称
		$http({
			url:"http://47.88.16.225:402/users",
			method:"get"
		}).then(function(data){
			console.log(data.data)
			for(var j=0;j<data.data.length;j++){
				if(data.data[j].id==localStorage.uid){
					$scope.postUser=data.data[j].nicheng
				}
			}	
		})
		
		
		
		//点击我发送的
		$scope.postInfo=function(){
			$scope.postInfos=[];
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				for (var k=0;k<data.data.length;k++) {
					if(data.data[k].uid==localStorage.uid){
						$scope.postInfos.push(data.data[k])
					}
				}
				classify()
			})
		}	
		//分类显示
		function classify(){
			for (var i=0;i<$scope.postInfos.length;i++) {
					if($scope.postInfos[i].classify==0){
						$scope.classifys.unshift("日报");
						$scope.Infosa.unshift("今日完成工作");
						$scope.Infosb.unshift("未完成工作");
						$scope.Infosc.unshift("备注");
					}else if($scope.postInfos[i].classify==1){
						$scope.classifys.unshift("周报");
						$scope.Infosa.unshift("本周完成工作");
						$scope.Infosb.unshift("本周工作总结");
						$scope.Infosc.unshift("备注");
					}else if($scope.postInfos[i].classify==2){
						$scope.classifys.unshift("月报");
						$scope.Infosa.unshift("本月工作计划");
						$scope.Infosb.unshift("本月工作总结");
						$scope.Infosc.unshift("备注");
					}
				}
		}
		
		//点击我接收的
		$scope.getInfo=function(){
			$scope.getInfos=[];
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"get"
			}).then(function(data){
				console.log(data.data)
				$scope.getIDs="";
				$scope.getNichengs=[];
				for (var k=0;k<data.data.length;k++) {
					if(data.data[k].fageishui==localStorage.uid){
						$scope.getInfos.push(data.data[k]);
						$scope.getIDs=data.data[k].uid;
					}
					$http({
						url:"http://47.88.16.225:402/users",
						method:"get"
					}).then(function(data){
						for(var p=0;p<data.data.length;p++){
							if($scope.getIDs==data.data[p].id){
								$scope.getNichengs.push(data.data[p].nicheng)
							}
						}
					})
				}
				classify()
			})
		}
		$scope.deleteInfo=function(id){
			$http({
				url:"http://47.88.16.225:402/rizhi/"+id,
				method:"delete"
			}).then(function(data){
				$scope.getInfo()
			})
		}
		$scope.addPe=function(){
			console.log(1234)
			$scope.addpeopleBg=true;
		}
		
		$(function(){
			//发日志，我发送的，我接收的
			$("#todayNews>ul>li").eq(0).css("background","#31708F");
			$(".todayInfo").eq(0).css("display","block");
			$("#todayNews>ul>li").click(function(){
				$(this).css("background","#31708F").siblings().css("background","#033F4B");
				$(".todayInfo").css("display","none");
				$(".todayInfo").eq($(this).index()).css("display","block");
			})			
			//日，周，月
			$(".todayInfo>p").eq(0).css("background","#1B6D85");
			$(".todayInfo>ul").eq(0).css("display","block");
			$(".todayInfo>p").click(function(){
				$(this).css("background","#1B6D85").siblings("p").css("background","#0D648E");
				$(".todayInfo>ul").css("display","none");
				$(".todayInfo>ul").eq($(this).index()).css("display","block");
			})
		})
	}])
	//联系人列表
	.controller("addPeople",["$scope","$http","$state",function($scope,$http,$state){		
		$scope.peoples=[];
		$http({
			url:"http://47.88.16.225:402/users",
			method:"get"	
		}).then(function(data){
			for (var i=0;i<data.data.length;i++) {
				if(data.data[i].id==localStorage.uid){}
				else{
					$scope.peoples.push(data.data[i])
				}
			}
			$scope.addPeoples=$scope.peoples;	
			$scope.linePeople=function($index){	
				$scope.addpeopleBg=false;
				console.log($scope.addPeoples[$index].nicheng)
				var user=$scope.addPeoples[$index].nicheng
				localStorage.nicheng=$scope.addPeoples[$index].nicheng
				var userId=$scope.addPeoples[$index].id
				$(function(){
					$(".add").css("display","none");
					$(".userShow").val(user).attr("class",userId);
					localStorage.userName=$scope.addPeoples[$index].id;
				})
			}
		})			
	}])
	.controller("todayInfo",["$scope","$http","$state","$timeout",function($scope,$http,$state,$timeout){		
		//日
		$scope.daysubmit=function(){			
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"post",
				data:{
					classify:0,
					wancheng:$scope.day.dayFinish,
					weiwancheng:$scope.day.dayUnFinish,
					beizhu:$scope.day.dayBeizhu,
					fageishui:localStorage.userName,
					uid:localStorage.uid,
					time:moment().format('MMMM Do YYYY, h:mm:ss a'),
					nicheng:localStorage.nicheng
				}
			}).then(function(data){
				console.log(data);
				debugger
				$scope.day.dayFinish="";
				$scope.day.dayUnFinish="";
				$scope.day.dayBeizhu="";
				$scope.day.dayFageishui="";
				$scope.alertMessage = "提交成功"
				$scope.alertInfo = true;
				$(".add").css("display","block");
				$timeout(function(){
				    $scope.alertInfo = false;
				},900);
			})
		}
		//周
		$scope.weeksubmit=function(){
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"post",
				data:{
					classify:1,
					wancheng:$scope.week.weekFinish,
					weiwancheng:$scope.week.weekUnFinish,
					beizhu:$scope.week.weekBeizhu,
					fageishui:localStorage.userName,
					uid:localStorage.uid,
					time:moment().format('MMMM Do YYYY, h:mm:ss a'),
					nicheng:localStorage.nicheng
				}
			}).then(function(data){
				$scope.week.weekFinish="";
				$scope.week.weekUnFinish="";
				$scope.week.weekBeizhu="";
				$scope.week.weekFageishui="";
				$scope.alertMessage = "提交成功"
				$scope.alertInfo = true;
				$(".add").css("display","block");
				$timeout(function(){
				    $scope.alertInfo = false;
				},900);
			})
		}
		//月
		$scope.monthsubmit=function(){
			$http({
				url:"http://47.88.16.225:402/rizhi",
				method:"post",
				data:{
					classify:2,
					wancheng:$scope.month.monthFinish,
					weiwancheng:$scope.month.monthUnFinish,
					beizhu:$scope.month.monthBeizhu,
					fageishui:localStorage.userName,
					uid:localStorage.uid,
					time:moment().format('MMMM Do YYYY, h:mm:ss'),
					nicheng:localStorage.nicheng
				}
			}).then(function(data){
				$scope.month.monthFinish="";
				$scope.month.monthUnFinish="";
				$scope.month.monthBeizhu="";
				$scope.month.monthFageishui="";
				$scope.alertMessage = "提交成功"
				$scope.alertInfo = true;
				$(".add").css("display","block");
				$timeout(function(){
				    $scope.alertInfo = false;
				},900);
			})
		}
	}])
	
			