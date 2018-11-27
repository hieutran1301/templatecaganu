var filterFixed = 0,
offsetNavabar=0;
$(window).on('load', function() {
	//console.log("load xong");
	var navabarHomeHeight = $(".navbar-home").height();
	if($(".stardust-tabs-header-wrapper").length>0){
		filterFixed = $(".stardust-tabs-header-wrapper").offset().top;
	}
	$(window).scroll(function (event) {
		var y = $(this).scrollTop();
		if(filterFixed>0){
			
			if (y >= filterFixed) {
				$(".stardust-tabs-header-wrapper").addClass('fixed');
			}else{
				$(".stardust-tabs-header-wrapper").removeClass('fixed');
			}
		}
		if(y>navabarHomeHeight){
			//console.log(y);
			$(".nav-head-fixed").show();
		}else{
			$(".nav-head-fixed").hide();
		}
	});
});
function backToPage(){
	if(history.length>0){
		history.back();
	}else{
		location.href="/";
	}
}
$(document).ready(function(){
	//console.log("Ready");
	$(".product-image-thumnail").owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.banner-main .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			dots:false,
			autoplayTimeout:3000,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
	});
	
	$(".product-description-text span").each(function() {
		$(this).removeAttr('style');
		$.trim($(this).html());
	});
	
	//$('.product-description__text').find('*').attr('class', '');
	//$('.product-description__text [style]').removeAttr('style');

	$(".tab-nav > button").click(function(){	
		var tab = $(this).attr("data-tab"),
		target = $(this).attr("data-target");
		$("." + target + " .tab-item").each(function(){
			$(this).hide();
		});
		$(".tab-item[data-tab='" + tab +"']").show();
		$(".tab-nav .tab-active").removeClass("tab-active");
		$(this).addClass("tab-active");
	});
	
	$(".btn-shop").click(function(){
		$(".tab-item[data-tab='2']").show();
	});
	
	$(".ic_number_augment").click(function(){		
		var id = $(this).attr("data-id"),
		elem = $("input[data-id='" + id + "']"); 
		$(elem).val(parseInt($(elem).val()) + 1);
		if($(elem).val() > 1) {
			$(".ic_number_reduce").removeClass("disable");
		} else {
			$(".ic_number_reduce").addClass("disable");
		}
		
	});
	$(".ic_number_reduce").click(function(){	
		var id = $(this).attr("data-id"),
		elem = $("input[data-id='" + id + "']"); 
		if($(elem).val() == 1) {
			$(this).addClass("disable");
		} else {
			$(elem).val(parseInt($(elem).val()) - 1);
		}
	});
	
	$(".item-but1").click(function(){	
		if($(this).hasClass("checked")) {
			uncheckedCheckBox(this);
			uncheckedCheckBox($(".checkall .item-but"));
		} else {
			checkedCheckBox(this);
		}
	});
	
	$(".checkall .item-but").click(function(){
		var elem = $(".item-but");
		if($(this).hasClass("checked")) {
			uncheckedCheckBox(elem);			
		} else {
			checkedCheckBox(elem);
		}
	});
	
	$(".title-checkall").click(function(){
		var elem = $(this).parent().children(".item-but--wrapper").children(".item-but");
		var elem1 = $(".item-but");
		if($(elem).hasClass("checked")) {
			uncheckedCheckBox(elem1);	
		} else {
			checkedCheckBox(elem1);
		}
	});
	
	$("#payment .item-text").click(function() {
		var elem = $(this).parent().children(".radio-input").children("input");
		if($(elem).is(":checked")) {
			$(elem).prop('checked', false);
		} else {
			$(elem).prop('checked', true);
		}
	});
	
	//$(".product-description-text img").each(function () {
		//$(this).attr("width", $(window).width() + "px");
	//});

});

function checkedCheckBox(elem) {
	$(elem).addClass("checked");
	$(elem).addClass("ic_checkbox_checked");
	$(elem).removeClass("ic_checkbox_outline");
}

function uncheckedCheckBox(elem) {
	$(elem).removeClass("checked");
	$(elem).removeClass("ic_checkbox_checked");
	$(elem).addClass("ic_checkbox_outline");
}


/** for register **/
var regex2 = /\d/;
$(".txt-phone").keyup(function(){
	$(this).attr("data-phone",$(this).val());
	if(regex2.test($(this).val()) && $(this).val().charAt(0)==0 && $(this).val().length==10){
		$("#button_next").removeClass("disable");
		$("#button_next").attr("data-flag",true);
	}else{
		$("#button_next").addClass("disable");
		$("#button_next").attr("data-flag",false);
	}
});

$(".txt-phone").blur(function(){
	if(!isString($(this).val()) || $(this).val().charAt(0)!=0 || $(this).val().length<10 || $(this).val().length>10){
		$(this).addClass("focus");
		$("[txt-phone].error_message").text("Số điện thoại không hợp lệ");
		$("#button_next").addClass("disable");
		$("#button_next").attr("data-flag",false);
	}else{
		$("[data-phone]").attr("data-phone",$(this).val());
		$(this).removeClass("focus");
		$("[txt-phone].error_message").text("");
		$("#button_next").removeClass("disable");
		$("#button_next").attr("data-flag",true);
	}
});
$(".txt-fullname").blur(function(){
	if(regex2.test($(this).val()) || !(/\s/g.test($(this).val())) || $(this).val().length==0 ){
		
		$(this).addClass("focus");
		$("[txt-fullname].error_message").html("Họ và tên không hợp lệ");
	}else{
		
		$(this).removeClass("focus");
		$("[txt-fullname].error_message").html("");
	}
});
$(".txt-password").keyup(function(){
	if($(this).val().length<6){
		
		$(this).addClass("focus");
		$("[txt-password].error_message").html("Mật khẩu phải ít nhất 6 ký tự");
	}else{
		if(isUpperCase($(this).val())){
			if(regex2.test($(this).val())){
			
				$("[txt-password].error_message").html("");
				$(this).removeClass("focus");
			}else{
				
				$("[txt-password].error_message").html("Mật khẩu phải chứa ít nhất 1 con số");
			}
		}else{
			
			$("[txt-password].error_message").html("Mật khẩu phải chứa ít nhất 1 ký tự in hoa");
		}
	}
});
$(".txt-password").blur(function(){
	if($(this).val().length==0){
		$(this).addClass("focus");
		$("[txt-password].error_message").html("Mật khẩu không được bỏ trống");
	}else{
		$(this).removeClass("focus");
		$("[txt-password].error_message").html("");
	}
});

$(".txt-password-confirm").keyup(function(){
	if($(this).val()!=$(".txt-password").val()){
		$(this).addClass("focus");
	}else{
		$(this).removeClass("focus");
	}
});
$(".txt-password-confirm").blur(function(){
	if($(this).val()!=$(".txt-password").val()){
		$(this).addClass("focus");
		$("[txt-repassword].error_message").html("Mật khẩu xác nhận không khớp");
	}else{
		
		$(this).removeClass("focus");
		$("[txt-repassword].error_message").html("");
	}
});


function isValidRegister(){
	var isTrue = true;
	if(regex2.test($(".txt-fullname").val()) || !(/\s/g.test($(".txt-fullname").val())) || $(".txt-fullname").val().length==0 ){
			isTrue = false;
			$(".txt-fullname").addClass("focus");
			$("[txt-fullname].error_message").html("Họ và tên không hợp lệ");
		}else{
			$(".txt-fullname").removeClass("focus");
			$("[txt-fullname].error_message").html("");
		}
		if($(".txt-password").val().length<6){
			isTrue = false;
			$(".txt-password").addClass("focus");
			$("[txt-password].error_message").html("Mật khẩu phải ít nhất 6 ký tự");
		}else{
			if(isUpperCase($(".txt-password").val())){
				if(regex2.test($(".txt-password").val())){
				
					$("[txt-password].error_message").html("");
					$(".txt-password").removeClass("focus");
				}else{
					isTrue = false;
					$("[txt-password].error_message").html("Mật khẩu phải chứa ít nhất 1 con số");
				}
			}else{
				isTrue = false;
				$("[txt-password].error_message").html("Mật khẩu phải chứa ít nhất 1 ký tự in hoa");
			}
		}
		if($(".txt-password").val().length==0){
			isTrue = false;
			$(".txt-password").addClass("focus");
			$("[txt-password].error_message").html("Mật khẩu không được bỏ trống");
		}else{
			$(".txt-password").removeClass("focus");
			$("[txt-password].error_message").html("");
		}
		
		if($(".txt-password-confirm").val() !== $(".txt-password").val() || $(".txt-password-confirm").val().length==0){
			$(".txt-password-confirm").addClass("focus");
			$("[txt-repassword].error_message").html("Mật khẩu xác nhận không khớp");
			isTrue = false;
		}else{
			$(".txt-password-confirm").removeClass("focus");
			$("[txt-repassword].error_message").html("");
		}
		return isTrue;
}


function isUpperCase(str){
	var upercase = str.match(/[A-Z]/g); 
	if(upercase===null){
		return false;
	}
	return true;
}

function isString(str){
	var n = str.match(/[A-Z]/g);
    var m = str.match(/[a-z]/g);
    var char = str.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/);
    var isValid = true;
    if(n!=null){
    	isValid= false;
    }
    if(m!=null){
    	isValid= false;
    }
    if(char!=null){
    	isValid= false;
	}
	return isValid;
}
function registerStepOne(){
	var isValid = $("#button_next").attr("data-flag");
	if(isValid!="false"){
		$(".signup-step-one").hide();
		$(".signup-step-two").show();
	}
}

/** for login **/
function isLogin(){
	var isValid=true;
	
		if($(".login-account").val().length==0){
			$("[txt-account].error_message").html("Vui lòng nhập tài khoản");
			$(".login-account").addClass("focus");
			isValid = false;
		}else{
			$("[txt-account].error_message").html("");
			$(".login-account").removeClass("focus");
		}

	
		if($(".login-password").val().length==0){
			$("[txt-password].error_message").html("Vui lòng nhập mật khẩu");
			$(".login-password").addClass("focus");
			isValid = false;
		}else{
			$("[txt-password].error_message").html("");
			$(".login-password").removeClass("focus");
		}

	return isValid;
}
$(".login-account").blur(function(){
	if($(this).val().length==0){
		$("[txt-account].error_message").html("Vui lòng nhập tài khoản");
		$(this).addClass("focus");
	}else{
		$("[txt-account].error_message").html("");
		$(this).removeClass("focus");
	}
});
$(".login-password").blur(function(){
	if($(this).val().length==0){
		$("[txt-password].error_message").html("Vui lòng nhập mật khẩu");
		$(this).addClass("focus");
	}else{
		$("[txt-password].error_message").html("");
		$(this).removeClass("focus");
	}
});
// Startup
$(document).ready(function(){
	// For Register
	$("#button_continue").click(function(){
		$(".verify").show();
		$(".signup-step-two").hide();
	});
	$("#button_signup").click(function(){
		if(isValidRegister()){
			var phone = $("[data-phone].txt-phone").val(),
			fullname = $("[data-fullname].txt-fullname").val(),
			password = $("[data-password].txt-password").val(),
			repassword = $("[data-repassword].txt-password-confirm").val();
			//console.log("Phone "+phone);
			//console.log("fullname "+fullname);
			///console.log("password "+password);
			//console.log("repassword "+repassword);
			$.ajax({
				method:"POST",
				url:"/register",
				data:{
					AJAX:"register",
					phone:phone,fullname:fullname,password:password,repassword:repassword
				},
				success:function(data){
					console.log(data);
					var result =  JSON.parse(data);
					if(result.status){
						swal({
							text: "Chúc mừng! Đăng ký thành công",
							icon: "success",
							button: "Đăng nhập",
						  }).then((value) => {
							  if(value || value==null){
								  location.href="/login";
							  }
						  });
					}else{
						swal({
							text: "Ooop! Đăng ký thất bại, "+result.message,
							icon: "error",
							button: "OK",
						  }).then((value) => {
							$(".signup-step-one").show();
							$(".signup-step-two").hide();
							$(".verify").hide();
						  });
					}
				}
			});
		}
	});
	// For login
	$("#btn_login").click(function(){
		if(isLogin()){
			var account = $(".login-account").val(),
			password = $(".login-password").val();
			
			$.ajax({
				method:"POST",
				url:"/login",
				data:{AJAX:"login",accounts:account,passwords:password},
				success:function(data){
					console.log(data);
					/*var result =  JSON.parse(data);
					if(result.status){
						swal({
							text: "Chúc mừng! Đăng ký thành công",
							icon: "success",
							button: "Đăng nhập",
						  }).then((value) => {
							  if(value || value==null){
								  location.href="/login";
							  }
						  });
					}else{
						swal({
							text: "Ooop! Đăng ký thất bại, "+result.message,
							icon: "error",
							button: "OK",
						  }).then((value) => {
							$(".signup-step-one").show();
							$(".signup-step-two").hide();
							$(".verify").hide();
						  });
					}*/
				}
			});
		}
	});
});


