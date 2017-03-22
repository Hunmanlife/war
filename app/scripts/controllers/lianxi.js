  angular.module('App')
	.controller("contrain",["$scope","$http","$state","$rootScope","$timeout",function($scope,$http,$state,$rootScope,$timeout){
		
	// huoqunicheng
	$http({
			url:"http://47.88.16.225:402/users/"+localStorage.uid,
			method:"get"
	}).then(function(data){
			console.log(data.data.isadmin)
			if(data.data.isadmin==1){
						$scope.isshow = true
			}else{
						$scope.isshow = false
			}
			$scope.nichengs = data.data.nicheng
	})


		//more
		$scope.isHide = false;
		$scope.more = function(){
			if($scope.isHide==false){
				$scope.isHide = true
			}else{
				$scope.isHide=false
			}
			
		}
// tab
		$scope.isTab = false;
		$scope.tab = function(){
			if($scope.isTab==false){
				$scope.isTab = true
			}else{
				$scope.isTab=false
			}
			$scope.isTab = true
			$scope.isTui=false
			$scope.isPsd=false
			$scope.isHide=false
		}

		var id=localStorage.uid
		$scope.tabsub = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				console.log($scope.nicheng)
				console.log(localStorage.uid)
				$http({
					url:"http://47.88.16.225:402/users/"+localStorage.uid,
					method:"put",
					data:{
						nicheng:$scope.nichengs
					}
				}).then(function(){
					$scope.isTab = false
				},function(){
					console.log(456)
				})
		}

// psd

	$scope.isPsd = false;
		$scope.psd = function(){
			if($scope.isPsd==false){
				$scope.isPsd = true
			}else{
				$scope.isPsd=false
			}
			$scope.isTab = false
			$scope.isTui=false
			$scope.isPsd=true
			$scope.isHide=false
		}
	$scope.guangbiao = function(){
		$http({
			url:"http://47.88.16.225:402/users/"+localStorage.uid,
			method:"get"
		}).then(function(data){
			console.log(data.data.password)
		})
	}

		$scope.psdsub = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
		}

// tui

$scope.isTui = false;
		$scope.tui = function(){
			if($scope.isTui==false){
				$scope.isTui = true
			}else{
				$scope.isTui=false
			}
			$scope.isTab = false
			$scope.isTui=true
			$scope.isPsd=false
			$scope.isHide=false
		}


		$scope.tuisub = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
				$http({
					url:"http://47.88.16.225:402/users/logint",
					method:"post"
				}).then(function(data){
					console.log(data)
				},function(){
					console.log(123)
				})
		}

		$scope.tuisubs = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
		}

// xxxxx

$scope.tabsubs = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
		}

	$scope.psdsubs = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
		}

$scope.tuisubss = function(){
				$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
		}	
		
		$scope.ads = $scope.news = $scope.emi = function(){
			$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
		}	
		//tiaozhuan
		$scope.tiao = function(){
			$state.go("contrain.todayNews")	;	
			$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
		}	

		$scope.user = function(){
			$scope.isHide=false
				$scope.isTab=false
				$scope.isPsd=false
				$scope.isTui=false
			$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){
//				console.log(d.data)
				$rootScope.a = d.data;
			})
			$state.go("contrain.lianxi");
			
		}
		var idd="",
		_index = ""
		$scope.xiangq = function(id,$index){
			_index=$index
			$scope.zz=''
			$http({
				url:"http://47.88.16.225:402/users",
				method:"get",
				
			}).then(function(d){

				for(var i=0;i<d.data.length;i++){
						if(d.data[i].id==id){
							$scope.c = d.data[i]	
							if(d.data[i].isadmin=='1'){
								$scope.zz='管理员'
							}else{
								$scope.zz='员工'
							}
						}
						
				}
				$state.go("contrain.lianxi.xiangq");
				
			})

		}
	
				
//  删除
		
		$scope.del=function(id){
			$http({
					url:"http://47.88.16.225:402/users/"+id,
					method:"delete"
			}).then(function(d){
					console.log(d)
					alert('删除成功!')			
					$(".info").html("")
					$state.go('contrain.lianxi')
					$scope.user()

			})
		}
		
		
//		$http({
//			url:"http://47.88.16.225:402/users",
//			method:"get"
//		}).then(function(data){					
//			for(var i=0;i<data.data.length;i++){
//				if(data.data[i].id == localStorage.ID){
//					if(data.data[i].isadmin==1){
//						$scope.isshow = true
//					}else{
//						$scope.isshow = false
//					}
//				}
//
//			}			
//	})	


function Isadmin(){
 		
		$scope.NAME=function(){
			if($scope.Name==undefined){
				$scope.uname=true;							
			}else{
				var phoneYZ=/^1[34578]\d{9}$/;//手机验证
				var user_phone1;
				if($("#NAME").val().match(phoneYZ)){
					user_phone1=true;
					$scope.uname=false
				}else{
					$scope.uname=true
				}
			}
		}
	
		$scope.PASS=function(){
			if($scope.pass==undefined){
				$scope.upass=true
			}else{
				var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
				var pass_word;
				if($("#psd").val().match(psd)){
					pass_word=true;
					$scope.upass=false
				}else{
					$scope.upass=true
				}
			}			
		}

	
	$scope.PHONE=function(){				
			if($scope.Phone==undefined){
				$scope.uphone=true
			}else{
				var phoneYZ=/^1[34578]\d{9}$/;//手机验证
				var user_phone;
				if($("#phone").val().match(phoneYZ)){
					user_phone=true;
					$scope.uphone=false
				}else{
					$scope.uphone=true
				}
			}			
		}	
		
		
		$scope.Nicheng=function(){
			if($scope.nicheng==undefined){
				$scope.unicheng=true
			}else{
				$scope.unicheng=false
			}
	
		}
			
		
		
$scope.TJ=function(){	
	
	var a;
	if($scope.isadmin=="公司管理者"){
		a=1
	}
	else if($scope.isadmin=="普通员工"){
		a=2		
	}else{
		 a = undefined;
	}
	

if( $scope.Name == undefined || $scope.pass == undefined || $scope.Phone == undefined || $scope.nicheng==undefined || a==undefined)
{	

if($scope.Name == undefined){
		$scope.uname=true;							
	}else{
		var phoneYZ=/^1[34578]\d{9}$/;//手机验证
		var user_phone1;
		if($("#NAME").val().match(phoneYZ)){
			user_phone1=true;
			$scope.uname=false 
		}else{
			$scope.uname=true
		}
	}



	if($scope.pass==undefined){
		$scope.upass=true
	}else{
		var psd=/^[a-zA-Z]\w{6,17}$/;//密码验证
		var pass_word;
		if($("#psd").val().match(psd)){
			pass_word=true;
			$scope.upass=false
		}else{
			$scope.upass=true
		}
	}
	
	
	if($scope.Phone==undefined){
		$scope.uphone=true
	}else{
		var phoneYZ=/^1[34578]\d{9}$/;//手机验证
		var user_phone;
		if($("#phone").val().match(phoneYZ)){
			user_phone=true;
			$scope.uphone=false
		}else{
			$scope.uphone=true
		}		
	}
	
	
	if($scope.nicheng==undefined){	
		$scope.unicheng=true
	}else{
		$scope.unicheng=false
	}	

	
	
	if(a==undefined){
		$scope.uGL=true
	}
	else{
		$scope.uGL=false
	}
	

}

else if( a!==undefined &&$scope.unicheng==false &&  $scope.uphone==false &&  $scope.upass==false &&  $scope.uname==false)
{
	$scope.uGL=false	
	$http({
				url:"http://47.88.16.225:402/users",
				method:"post",
				data:{
					username:$scope.Name,
					password:$scope.pass,
					isadmin:a,
					tel:$scope.Phone,
					address:$scope.JG,
					jinjilianxiren:$scope.jinji,
					jinjilianxirendianhua:$scope.jinjidianhua,
					nicheng:$scope.nicheng
				}
			}).then(function(a){
				
				$scope.suss = true;	
				console.log("成功")	
				console.log($scope.Name)	
				$scope.Name=""
				$scope.pass=""
				$scope.isadmin=""
				$scope.Phone=""
				$scope.JG=""
				$scope.jinji=""
				$scope.jinjidianhua=""
				$scope.nicheng=""					
									
				$timeout(function(){
				    $scope.suss = false;
				},1000);				
			},function(a){				
			 	$http({
					url:"http://47.88.16.225:402/users",
					method:"get",
					data:{
						username:$scope.Name,
						password:$scope.pass,
						isadmin:$scope.isadmin,
						tel:$scope.Phone,
						address:$scope.JG,
						jinjilianxiren:$scope.jinji,
						jinjilianxirendianhua:$scope.jinjidianhua,
						nicheng:$scope.nicheng
					}
				}).then(function(a){	
					
					for(var i=0;i<a.data.length;i++)
						console.log(a.data.tel)
					{
						if(a.data[i].username==$scope.Name){
							$scope.Name="用户名占用";
							$scope.uname=true;
						}
						else if(a.data[i].tel==$scope.Phone){
							$scope.Phone="已经注册"
							$scope.uphone=true;
						}else{
							$scope.uuname=false;
							$scope.uphone=false;
						}												
					}
				})						
				}
			)
 }
else{	
	alert("信息不足")
}
	}
}	
Isadmin()
		
	}])
