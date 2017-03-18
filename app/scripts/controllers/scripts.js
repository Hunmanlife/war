var oInt=document.getElementsByTagName("input");
var oNext=document.getElementsByClassName("next")[0];
var oMsg=document.getElementsByClassName("msg");
var username=document.getElementsByClassName("username")[0];
username.onkeyup = function(){
 this.value = this.value.replace(/[^0-9]/, '');
};
	for (var i=0;i<oInt.length;i++) {
		oInt[i].oninput=function(){
			if(oInt[0].value==""||oInt[1].value==""){
				oNext.style.color="#ED8B64"
			}else{
				oNext.style.color="#FFFFFF"
			}
		}
	}
	
	//信息注册验证
	//密码验证
	var passWordText=/^[a-zA-Z]\w{5,17}|\d{5,17}$/;
	oInt[1].onfocus=function(){
		if(this.value=="")
		this.placeholder="";
		oMsg[1].style.display="none";
	}
	oInt[1].onblur=function(){
		if(this.value){		
					if(passWordText.test(this.value)){
					}
					else{
						oMsg[1].style.display="block";
						this.value=""
					}
		}
		else{
			this.placeholder="请输入登录密码";
		}
	}
	//手机号验证
	oInt[0].onfocus=function(){
		if(this.value==""){
			this.placeholder="";
			oMsg[0].style.display="none";
		}
		
	}
	var phoneText=/^1(3\d|47|5[0-35-9]|7[0167]|8\d)\d{8}$/;
	oInt[0].onblur=function(){
		if(this.value){
			
					if(phoneText.test(this.value)){
					}
					else{
						oMsg[0].style.display="block";
						this.value=""
					}
		}
		else{
			this.placeholder="请输入手机号";
		}
	}
