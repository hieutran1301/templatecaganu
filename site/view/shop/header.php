<!doctype html>
<html class="no-js" lang="">
<head>
	<title>Caganu Demo</title>
    <meta charset="utf-8">
    <link href="/website/public/logo/favicon.ico" rel="shortcut icon" type="image/x-icon" />
	<link rel="stylesheet" href="/public/assets/plugins/bootstrap/dist/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="/public/assets/plugins/OwlCarousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/public/assets/plugins/OwlCarousel/dist/assets/owl.theme.default.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="/public/assets/css/style.css?v=<?php print time(); ?>">

    <!-- Icon -->
    <link rel="stylesheet" href="/public/assets/plugins/icomoon/style.css?v=<?php print time(); ?>">
    <link href="/public/assets/plugins/fontawesome/css/all.css" rel="stylesheet">
    
    <!-- Zoom Image -->
    <link type="text/css" href="/public/assets/plugins/xZoom/xzoom.css" rel="stylesheet" media="all">
    <link type="text/css" rel="stylesheet" media="all" href="/public/assets/plugins/fancybox/source/jquery.fancybox.css" />
    <link type="text/css" rel="stylesheet" media="all" href="/public/assets/plugins/magnific-popup/css/magnific-popup.css" />
    
</head>
<body>
    <section id="Loading">
        <img src="/public/assets/images/Rolling.gif" alt="Loading">
    </section>
    <div id="Content">
    <div class="modal fade" id="Modal-choiceProvince" role="dialog" style="padding-top: 50px;">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row">
                        <div class="text-center">
                            <img src="https://caganu.com/website/public/site/assets/img/logo/logo-caganu-non.png" class="logo">
                        </div>
                        <div class="text-center">
                            <h3 style="font-weight: bold;">CHỌN TỈNH THÀNH ĐỂ CÓ GIÁ TỐT NHẤT</h3>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 col-sm-offset-3 province-choice" style="margin-bottom:20px;    margin-top: 20px;">
                            <select class="form-control select2" id="txtProvince" style="border-radius: 3px;margin: 20px 0 20px 0px;">
                                <option value=""> Chọn tỉnh thành </option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="text-center">
                            <button id="confirmChoiceProvince" class="btn btn-primary" style="width: 30%;">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    <!-- <script>
    	$(document).ready(function(){
			var province = new Province();
			$(".select2").select2();
			var data ='{"Province":[{"id":"63","parent":"0","name":"TP H\u1ed3 Ch\u00ed Minh","sort":"0","zipcode":"HCM"},{"id":"62","parent":"0","name":"H\u00e0 N\u1ed9i","sort":"0","zipcode":"HNO"},{"id":"60","parent":"0","name":"\u0110\u00e0 N\u1eb5ng","sort":"0","zipcode":"DAN"},{"id":"2","parent":"0","name":"B\u00e0 R\u1ecba - V\u0169ng T\u00e0u","sort":"0","zipcode":"BVT"},{"id":"28","parent":"0","name":"Kh\u00e1nh H\u00f2a","sort":"0","zipcode":"KHO"},{"id":"11","parent":"0","name":"B\u00ecnh Thu\u1eadn","sort":"0","zipcode":"BTH"},{"id":"1","parent":"0","name":"An Giang","sort":"0","zipcode":"AGI"}, {"id":"3","parent":"0","name":"B\u1eafc Giang","sort":"0","zipcode":"BGI"}, {"id":"4","parent":"0","name":"B\u1eafc K\u1ea1n","sort":"0","zipcode":"BKA"}, {"id":"5","parent":"0","name":"B\u1ea1c Li\u00eau","sort":"0","zipcode":"BLI"}, {"id":"6","parent":"0","name":"B\u1eafc Ninh","sort":"0","zipcode":"BNI"}, {"id":"7","parent":"0","name":"B\u1ebfn Tre","sort":"0","zipcode":"BTR"}, {"id":"8","parent":"0","name":"B\u00ecnh \u0110\u1ecbnh","sort":"0","zipcode":"BDI"}, {"id":"9","parent":"0","name":"B\u00ecnh D\u01b0\u01a1ng","sort":"0","zipcode":"BDU"}, {"id":"10","parent":"0","name":"B\u00ecnh Ph\u01b0\u1edbc","sort":"0","zipcode":"BPH"}, {"id":"12","parent":"0","name":"C\u00e0 Mau","sort":"0","zipcode":"CMA"}, {"id":"13","parent":"0","name":"C\u1ea7n Th\u01a1","sort":"0","zipcode":"CTH"}, {"id":"14","parent":"0","name":"Cao B\u1eb1ng","sort":"0","zipcode":"CBA"}, {"id":"15","parent":"0","name":"\u0110\u1eafk L\u1eafk","sort":"0","zipcode":"DLA"}, {"id":"16","parent":"0","name":"\u0110\u1eafk N\u00f4ng","sort":"0","zipcode":"DNO"}, {"id":"17","parent":"0","name":"\u0110i\u1ec7n Bi\u00ean","sort":"0","zipcode":"DBI"}, {"id":"18","parent":"0","name":"\u0110\u1ed3ng Nai","sort":"0","zipcode":"DNA"}, {"id":"19","parent":"0","name":"\u0110\u1ed3ng Th\u00e1p","sort":"0","zipcode":"DTH"}, {"id":"20","parent":"0","name":"Gia Lai","sort":"0","zipcode":"GLA"}, {"id":"21","parent":"0","name":"H\u00e0 Giang","sort":"0","zipcode":"HAG"}, {"id":"22","parent":"0","name":"H\u00e0 Nam","sort":"0","zipcode":"HNA"}, {"id":"23","parent":"0","name":"H\u00e0 T\u0129nh","sort":"0","zipcode":"HTI"}, {"id":"24","parent":"0","name":"H\u1ea3i D\u01b0\u01a1ng","sort":"0","zipcode":"HDU"}, {"id":"25","parent":"0","name":"H\u1eadu Giang","sort":"0","zipcode":"HGI"}, {"id":"26","parent":"0","name":"H\u00f2a B\u00ecnh","sort":"0","zipcode":"HBI"}, {"id":"27","parent":"0","name":"H\u01b0ng Y\u00ean","sort":"0","zipcode":"HYE"},{"id":"29","parent":"0","name":"Ki\u00ean Giang","sort":"0","zipcode":"KGI"}, {"id":"30","parent":"0","name":"Kon Tum","sort":"0","zipcode":"KTU"}, {"id":"31","parent":"0","name":"Lai Ch\u00e2u","sort":"0","zipcode":"LCH"}, {"id":"32","parent":"0","name":"L\u1ea1ng S\u01a1n","sort":"0","zipcode":"LSO"}, {"id":"33","parent":"0","name":"L\u00e0o Cai","sort":"0","zipcode":"LCA"}, {"id":"34","parent":"0","name":"L\u00e2m \u0110\u1ed3ng","sort":"0","zipcode":"LDO"}, {"id":"35","parent":"0","name":"Long An","sort":"0","zipcode":"LAN"}, {"id":"36","parent":"0","name":"Nam \u0110\u1ecbnh","sort":"0","zipcode":"NDI"}, {"id":"37","parent":"0","name":"Ngh\u1ec7 An","sort":"0","zipcode":"NAN"}, {"id":"38","parent":"0","name":"Ninh B\u00ecnh","sort":"0","zipcode":"NBI"}, {"id":"39","parent":"0","name":"Ninh Thu\u1eadn","sort":"0","zipcode":"NTH"}, {"id":"40","parent":"0","name":"Ph\u00fa Th\u1ecd","sort":"0","zipcode":"PTH"}, {"id":"41","parent":"0","name":"Ph\u00fa Y\u00ean","sort":"0","zipcode":"PYE"}, {"id":"42","parent":"0","name":"Qu\u1ea3ng B\u00ecnh","sort":"0","zipcode":"QBI"}, {"id":"43","parent":"0","name":"Qu\u1ea3ng Nam","sort":"0","zipcode":"QNA"}, {"id":"44","parent":"0","name":"Qu\u1ea3ng Ng\u00e3i","sort":"0","zipcode":"QNG"}, {"id":"45","parent":"0","name":"Qu\u1ea3ng Ninh","sort":"0","zipcode":"QNI"}, {"id":"46","parent":"0","name":"Qu\u1ea3ng Tr\u1ecb","sort":"0","zipcode":"QTR"}, {"id":"47","parent":"0","name":"S\u00f3c Tr\u0103ng","sort":"0","zipcode":"STR"}, {"id":"48","parent":"0","name":"S\u01a1n La","sort":"0","zipcode":"SLA"}, {"id":"49","parent":"0","name":"T\u00e2y Ninh","sort":"0","zipcode":"TNI"}, {"id":"50","parent":"0","name":"Th\u00e1i B\u00ecnh","sort":"0","zipcode":"TBI"}, {"id":"51","parent":"0","name":"Th\u00e1i Nguy\u00ean","sort":"0","zipcode":"TNG"}, {"id":"52","parent":"0","name":"Thanh H\u00f3a","sort":"0","zipcode":"THO"}, {"id":"53","parent":"0","name":"Th\u1eeba Thi\u00ean - Hu\u1ebf","sort":"0","zipcode":"TTH"}, {"id":"54","parent":"0","name":"Ti\u1ec1n Giang","sort":"0","zipcode":"TGI"}, {"id":"55","parent":"0","name":"Tr\u00e0 Vinh","sort":"0","zipcode":"TVI"}, {"id":"56","parent":"0","name":"Tuy\u00ean Quang","sort":"0","zipcode":"TUQ"}, {"id":"57","parent":"0","name":"V\u0129nh Long","sort":"0","zipcode":"VLO"}, {"id":"58","parent":"0","name":"V\u0129nh Ph\u00fac","sort":"0","zipcode":"VPH"}, {"id":"59","parent":"0","name":"Y\u00ean B\u00e1i","sort":"0","zipcode":"YBA"}, {"id":"61","parent":"0","name":"H\u1ea3i Ph\u00f2ng","sort":"0","zipcode":"HPH"}]}';
			province.showProvince(data);
			if(province.getProvince()!=null){
				$("#province-choosen").html(province.getProvince().name);
			}
			$("#confirmChoiceProvince").click(function(){	
				if($('#Modal-choiceProvince  option:selected').val()!=""){
					if (typeof(Storage) !== "undefined"){
						var dataChoisen = '{"id": '+$('#Modal-choiceProvince option:selected').val()+',"name":"'+$("#txtProvince option:selected").text()+'"}';
						var isChoice = province.setProvince(dataChoisen);
						if(isChoice){
							$("#province-choosen").html(province.getProvince().name);
							$('#Modal-choiceProvince').modal("hide");
							location.reload();
						}else{
							alert("Vui lòng tải lại website & thử lại!");
						}
					}else{
						console.log("Sorry, your browser does not support Web Storage...");
					}
				}
			});
			$("#province-change").click(function(){
				$('#Modal-choiceProvince').modal();
			});
		});
		function Province(){
			this.showProvince = function(data){
				var provinceData = JSON.parse(data);
					for (var i=0; i < provinceData.Province.length; i++) {
					var x = document.getElementById("txtProvince");
					var option = document.createElement("option");
					option.text = provinceData.Province[i].name;
					option.value = provinceData.Province[i].id;
					x.add(option);
				}
				if(localStorage.Province== null || localStorage.Province == ''){
					$('#Modal-choiceProvince').modal({backdrop: 'static', keyboard: false});
				}
			}
			this.getProvince = function(){
				
				if(localStorage.Province== null || localStorage.Province == ''){
					return null;
				}else{
					return JSON.parse(localStorage.Province);
				}
			}
			this.setProvince = function(data){
				localStorage.Province = data;
				if(localStorage.Province== null || localStorage.Province == ''){
					return  false;
				}
				return  true;
			}
		}
    </script> -->
    <header id="header" class="">
        <div class="top-promo">
            <div class="container">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="mr-30">
                            <a id="province-change" title="Click để thay đổi ngôn ngữ">
                                <span>Tỉnh hiện tại: </span>
                                <span id="province-choosen"></span>
                                <i class="fas fa-map-marker-alt"></i>
                            </a>
                        </div>
                        <div class="mr-30">
                            <a href=''>
                                <i class="fa fa-fire"></i>
                                <span>Khuyến mãi Hot</span>
                            </a>
                        </div>
                        <div class="mr-30">
                            <a href='/ve-may-bay'>
                                <i class="fa fa-plane"></i>
                                <span>Đặt vé máy bay Online</span>
                            </a>
                        </div>
                    </div>
                    <div class="ml-30">
                    	<a href="/ban-hang-cung-caganu">
                        	<i class="fa fa-gavel"></i>
                        	<span>Bán hàng cùng Caganu</span>
                    	</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-form-container">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <a href="/">
                            <img id='logo' src='https://caganu.com/website/public/site/assets/img/logo/logo-caganu-non.png'/>
                        </a>
                    </div>
                    <div class="col-4">
                        <div class="search-wrap">
                            <div class="input">
                                <div class="flex">
                                    <input id="KeySearch" class="input-txt" data-toggle="#BtnSearch" type="text" name="q" autocomplete="off" value="" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."/>
                                </div>
                            </div>
                            <button class="btn" id="BtnSearch" type="submit">
                                <i class="fa fa-search"></i>
                                <span>Tìm kiếm</span>
                            </button>
                        </div>
                        <div id='search-suggestion'></div>
                        <div id='search-autocomplete'></div>
                    </div>
                    <div class="col ml-auto" id='head-content-right'>
                        <div class="row">
                            <div class="col-3 pl-40">
                                <a href="/tra-cuu-don-hang">
                                    <div class="tracking item">
                                        <i class="material-icons">explore</i>
                                        <span>Theo dõi đơn hàng</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-3 pl-40">
                                <div class="item noti" id="noti">
                                    <i class="material-icons">notifications</i>
                                    <span>Thông báo của tôi</span>
                                </div>
                                <div class="box-noti">
                                    <ul class="list-noti">
                                        <li>
                                            <a href="#">
                                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" alt="">
                                                <span class="text">NHẬP MÃ YEUPHUNU GIẢM 50K CHO ĐƠN HÀNG 500K. Áp dụng cho sản phẩm ngành Điện Gia Dụng,...</span>
                                                <span class="detail">Chi tiết</span>
                                                <br>
                                                <span class="date">25/10/2018</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" alt="">
                                                <span class="text">NHẬP MÃ YEUPHUNU GIẢM 50K CHO ĐƠN HÀNG 500K. Áp dụng cho sản phẩm ngành Điện Gia Dụng,...</span>
                                                <span class="detail">Chi tiết</span>
                                                <br>
                                                <span class="date">25/10/2018</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="https://tiki.vn/desktop/img/icon/icon-giamgia.png" alt="">
                                                <span class="text">NHẬP MÃ YEUPHUNU GIẢM 50K CHO ĐƠN HÀNG 500K. Áp dụng cho sản phẩm ngành Điện Gia Dụng,...</span>
                                                <span class="detail">Chi tiết</span>
                                                <br>
                                                <span class="date">25/10/2018</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="" class="view-more">Xem tất cả thông báo</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-3 pl-40">
                                <div class="item account" id="account">
                                    <i class="material-icons">account_circle</i>
                                    <span>Tài khoản đăng nhập</span>
                                </div>
                                <div class="box">
                                    <ul class="list-guest">
                                        <li id="login">
                                            <a href="#" title="Đăng nhập" class="user-login">
                                                <span class="text">Đăng nhập</span>
                                            </a>
                                        </li>
                                        <li id="register">
                                            <a href="#" title="Tạo tài khoản" class="user-register">
                                                <span class="text">Tạo tài khoản</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-3 cart">
                                <div class='h-cart item'>
                                    <i class="material-icons">shopping_cart</i>
                                    <span>Giỏ hàng</span>
                                    <span class="quantity">1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-nav">
            <div class="container">
                <nav class='main-nav-wrap' >
                    <div id="menu-action" data-toggle='show'>
                        <i class="cgnicon icon-burger-menu"></i>
                        <span class='title-nav'>Danh mục sản phẩm</span>
                    </div>
                    <div id="menu-content">
                        <ul id='menu'>
                            <li>
                                <a class='sub-menu' href='/cau-ca'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-fishing"></i>
                                    </span>
                                    <span>
                                        Dụng cụ câu cá
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/can-cau-ca"><span class='title'>Cần câu cá</span></a></li>
                                                <li><a href="/can-cau-may"><span>Cần câu máy</span></a></li>
                                                <li><a href="/can-cau-tay"><span>Cần câu tay</span></a></li>
                                                <li><a href="/can-cau-rut"><span>Cần câu rút</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/may-cau-ca"><span class='title'>Máy câu cá</span></a></li>
                                                <li><a href="/may-cau-dung-5142.html"><span>Máy câu đứng</span></a></li>
                                                <li><a href="/may-cau-ngang-5143.html"><span>Máy câu ngang</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/phu-kien-cau-ca"><span class='title'>Phụ kiện câu cá</span></a></li>
                                                <li><a href="/moi-cau-ca"><span>Mồi câu cá</span></a></li>
                                                <li><a href="/luoi-cau-ca-5146.html"><span>Lưỡi câu cá</span></a></li>
                                                <li><a href="/day-cuoc-day-du-5147.html"><span>Dây cước & dây dù</span></a></li>
                                                <li><a href="/phao-chi-cau-ca-5148.html"><span>Phao chì</span></a></li>
                                                <li><a href="/tui-dung-can-cau-5149.html"><span>Túi đựng cần</span></a></li>
                                                <li><a href="/thinh-huong-lieu-5150.html"><span>Thính & hương </span></a></li>
                                                <li><a href="/phu-kien-5152.html"><span>Phụ kiện</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/Infiword/frontend-text/img/pro/325-480.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/bat-lua-zippo'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-fire"></i>
                                    </span>
                                    <span>
                                        Bật lửa Zippo
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/zippo/t1-4.png?ver=1.0'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/tui-xach-vali-tui-du-lich'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-bag"></i>
                                    </span>
                                    <span>
                                        Túi xách và Vali
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/tui-xach-nam"><span class='title'>Túi xách nam</span></a></li>
                                                <li><a href="/balo-nam-1516.html"><span>Balo nam</span></a></li>
                                                <li><a href="/cap-xach-laptop-1532.html"><span>Cặp xách laptop</span></a></li>
                                                <li><a href="/tui-deo-cheo-nam-1518.html"><span>Túi đeo chéo</span></a></li>
                                                <li><a href="/vi-nam-va-phu-kien"><span>Ví nam & phụ kiện</span></a></li>
                                                <li></li>
                                                <li><a href="/vali-tui-du-lich"><span class='title'>Vali túi du lịch</span></a></li>
                                                <li><a href="/balo-2926.html"><span>Balo</span></a></li>
                                                <li><a href="/vali-du-lich"><span>Vali du lịch</span></a></li>
                                                <li><a href="/phu-kien-du-lich"><span>Phụ kiện du lịch</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/tui-xach-tre-em"><span class='title'>Túi xách trẻ em</span></a></li>
                                                <li><a href="/ba-lo-tre-em"><span>Balo trẻ em</span></a></li>
                                                <li><a href="/ba-lo-keo-tre-em-1514.html"><span>Balo kéo trẻ em</span></a></li>
                                                <li><a href="/tui-deo-vai-tre-em-1515.html"><span>Túi đeo vai trẻ em</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/tui-xach-nu"><span class='title'>Túi xách nữ</span></a></li>
                                                <li><a href="/ba-lo-nu"><span>Balo nữ</span></a></li>
                                                <li><a href="/clutch-nu"><span>Clutch nữ</span></a></li>
                                                <li><a href="/tui-deo-cheo-va-tui-deo-vai-nu"><span>Túi đeo chéo & đeo vai</span></a></li>
                                                <li><a href="/tui-xach-nu"><span>Túi đeo tay nữ</span></a></li>
                                                <li><a href="/tui-tote-nu"><span>Túi tote nữ</span></a></li>
                                                <li><a href="/vi-nu-va-phu-kien"><span>Vĩ nữ & phụ kiện</span></a></li>
                                                <li></li>
                                                <li><a href="/tui-unisex"><span class='title'>Túi unisex</span></a></li>
                                                <li><a href="/balo-unisex"><span>Balo unisex</span></a></li>
                                                <li><a href="/vi-dung-the"><span>Ví đựng thẻ</span></a></li>
                                                <li><a href="/vi-dung-khoa"><span>Ví đựng khoá</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/t6-1.png?ver=1.0'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/thoi-trang-va-du-lich'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-fashion"></i>
                                    </span>
                                    <span>
                                        Thời trang và du lịch
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thoi-trang-be-trai"><span class='title'>Thời trang bé trai</span></a></li>
                                                <li><a href="/phu-kien-be-trai"><span>Phụ kiện bé trai</span></a></li>
                                                <li><a href="/trang-phuc-be-trai"><span>Trang phục bé trai</span></a></li>
                                                <li><a href="/giay-be-trai"><span>Giày bé trai</span></a></li>
                                                <li></li>
                                                <li><a href="/thoi-trang-be-gai"><span class='title'>Thời trang bé gái</span></a></li>
                                                <li><a href="/phu-kien-be-gai"><span>Phụ kiện bé gái</span></a></li>
                                                <li><a href="/trang-phuc-be-gai"><span>Trang phục bé gái</span></a></li>
                                                <li><a href="/giay-be-gai"><span>Giày bé gái</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thoi-trang-nam"><span class='title'>Thời trang nam</span></a></li>
                                                <li><a href="/phu-kien-nam"><span>Phụ kiện nam</span></a></li>
                                                <li><a href="/trang-phuc-nam"><span>Trang phục nam</span></a></li>
                                                <li><a href="/giay-nam-1648.html"><span>Giày nam</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thoi-trang-nu"><span class='title'>Thời trang nữ</span></a></li>
                                                <li><a href="/phu-kien-nu-1731.html"><span>Phụ kiện nữ</span></a></li>
                                                <li><a href="/trang-phuc-nu"><span>Trang phục nữ</span></a></li>
                                                <li><a href="/do-ngu-va-noi-y"><span>Đồ ngủ & nội y</span></a></li>
                                                <li><a href="/giay-nu-1736.html"><span>Giày nữ</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <div class="baner-category">
                                                <img src='https://caganu.com/Infiword/frontend-text/img/pro/325-48012.png'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/nha-cua-doi-song'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-home"></i>
                                    </span>
                                    <span>
                                        Nhà cửa và đời sống
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/dung-cu-ve-sinh"><span class='title'>Dụng cụ vệ sinh</span></a></li>
                                                <li><a href="/ve-sinh"><span>Vệ sinh</span></a></li>
                                                <li><a href="/giat-ui"><span>Giặt ủi</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/bep-va-phong-an"><span class='title'>Bếp phòng ăn</span></a></li>
                                                <li><a href="/dung-cu-lam-banh"><span>Dụng cụ làm bánh</span></a></li>
                                                <li><a href="/do-dung-uong-tra-va-ca-phe"><span>Đồ dùng uống cafe & trà</span></a></li>
                                                <li><a href="/dung-cu-nau-an"><span>Dụng cụ nấu ăn</span></a></li>
                                                <li><a href="/do-dung-uong-nuoc"><span>Đồ dùng uống nước</span></a></li>
                                                <li><a href="/khan-trai-ban-va-phu-kien-bang-vai"><span>Khăn trải bàn & phụ kiện</span></a></li>
                                                <li><a href="/dung-cu-nha-bep"><span>Dụng cụ nhà bếp</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/giuong-ngu-va-nha-tam"><span class='title'>Giường ngủ và Nhà tắm</span></a></li>
                                                <li><a href="/do-dung-phong-tam"><span>Đồ dùng nhà tắm</span></a></li>
                                                <li><a href="/do-dung-phong-ngu"><span>Đồ dùng phòng ngủ</span></a></li>
                                                <li></li>
                                                <li><a href="/do-noi-that-va-trang-tri"><span class='title'>Đồ nội thất & trang trí</span></a></li>
                                                <li><a href="/do-noi-that"><span>Đồ nội thất</span></a></li>
                                                <li><a href="/trang-tri-nha-cua"><span>Trang trí nhà cửa</span></a></li>
                                                <li><a href="/den-ngu-2062.html"><span>Đèn</span></a></li>
                                                <li><a href="/tu-chua"><span>Tủ chứa & sắp xếp đồ</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/nc-ds-1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/tv-video-am-thanh-game'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-phone"></i>
                                    </span>
                                    <span>
                                        TV, Video, Âm thanh, Game
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thiet-bi-dieu-khien-qua-app"><span class='title'>Thiết bị điều khiển qua App</span></a></li>
                                                <li></li>
                                                <li><a href="/thiet-bi-am-thanh"><span class='title'>Thiết bị âm thanh</span></a></li>
                                                <li><a href="/cac-loai-tai-nghe"><span>Tai nghe các loại</span></a></li>
                                                <li><a href="/he-thong-giai-tri-tai-gia-1463.html"><span>Hệ thống giải trí tại nhà</span></a></li>
                                                <li><a href="/am-thanh-song-va-san-khau"><span>Âm thanh sống</span></a></li>
                                                <li><a href="/thiet-bi-am-thanh-di-dong-1465.html"><span>Thiết bị âm thanh di động</span></a></li>
                                                <li><a href="/loa-di-dong-1466.html"><span>Loa di động</span></a></li>
                                                <li><a href="/loa-thong-minh"><span>Loa thông minh</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thiet-bi-choi-game"><span class='title'>Thiết bị chơi game</span></a></li>
                                                <li><a href="/thiet-bi-so"><span class='title'>Thiết bị số</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/tivi"><span class='title'>Tivi</span></a></li>
                                                <li><a href="/tivi-led"><span>Tivi LED</span></a></li>
                                                <li><a href="/smart-tivi"><span>Smart Tivi</span></a></li>
                                                <li><a href="/tivi-crt"><span>Tivi CRT</span></a></li>
                                                <li><a href="/tivi-lcd"><span>Tivi LCD</span></a></li>
                                                <li><a href="/tivi-oled"><span>Tivi OLED</span></a></li>
                                                <li><a href="/tivi-plasma"><span>Tivi Plasma</span></a></li>
                                                <!-- <li><a href=""><span>Tivi QLED</span></a></li> -->
                                                <li><a href="/phu-kien-tivi"><span class='title'>Phụ kiện Tivi</span></a></li>
                                                <li><a href="/kinh-3d"><span>Kính 3D</span></a></li>
                                                <li><a href="/anten-tv"><span>Anten Tivi</span></a></li>
                                                <li><a href="/cap-tv"><span>Cáp Tivi</span></a></li>
                                                <li><a href="/adapter-tv"><span>Adapter Tivi</span></a></li>
                                                <li><a href="/dau-thu-ky-thuat-so"><span>Đầu thu kỹ thuật số</span></a></li>
                                                <li><a href="/thiet-bi-dieu-khien-tu-xa"><span>Điều khiển từ xa</span></a></li>
                                                <li><a href="/gia-treo-tv"><span>Gia treo Tivi</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/1-1-dien-may-dien-gia-dung.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href=''>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-leaf"></i>
                                    </span>
                                    <span>
                                        Cây trồng và vật nuôi
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href=""><span class='title'>Thiết bị âm thanh</span></a></li>
                                                <li><a href=""><span>Tay nghe các loại</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/tre-so-sinh-va-tre-nho'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-baby"></i>
                                    </span>
                                    <span>
                                        Trẻ sơ sinh và trẻ nhỏ
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/xe-va-ghe"><span class='title'>Xe,địu và ghế</span></a></li>
                                                <li><a href="/diu-em-be"><span>Địu</span></a></li>
                                                <li><a href="/ghe-xe-dap-va-ro-mooc"><span>Ghế xe đạp</span></a></li>
                                                <li><a href="/ghe-ngoi-o-to"><span>Ghế ngồi ô tô</span></a></li>
                                                <li><a href="/day-dai-an-toan"><span>Dây đai an toàn</span></a></li>
                                                <li><a href="/tui-va-hanh-ly-cho-tre"><span>Túi & hành lý</span></a></li>
                                                <li><a href="/noi-choi"><span>Nôi chơi</span></a></li>
                                                <li><a href="/xe-day"><span>Xe đẩy</span></a></li>
                                                <li><a href="/ghe-rung-va-dung-cu-tap-di"><span>Ghế rung & dụng cụ</span></a></li>
                                                <li><a href="/noi-du-lich"><span>Nôi du lịch</span></a></li>
                                                <li><a href="/xe-tap-di"><span>Xe tập đi</span></a></li>
                                                <li></li>
                                                <li><a href="/quan-ao-va-phu-kien"><span class='title'>Quần áo & phụ kiện</span></a></li>
                                                <li><a href="/tre-so-sinh-0-6-thang"><span>Trẻ sơ sinh 0 - 6 tháng</span></a></li>
                                                <li><a href="/be-trai-6-36-thang"><span>Bé trai 6 - 36 tháng</span></a></li>
                                                <li><a href="/be-gai-6-36-thang"><span>Bé gái 6 - 36 tháng</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/cham-soc-suc-khoe-cho-tre"><span class='title'>Chăm sóc sức khỏe</span></a></li>
                                                <li><a href="/mat-na-2272.html"><span>Mặt nạ</span></a></li>
                                                <li><a href="/chong-day-hoi-cho-tre"><span>Dụng cụ chống đầy hơi</span></a></li>
                                                <li><a href="/may-hut-mui-cho-tre"><span>Máy hút mũi</span></a></li>
                                                <li><a href="/mieng-can-rang"><span>Miếng cắn răng</span></a></li>
                                                <li><a href="/nhiet-ke-cho-tre"><span>Nhiệt kế</span></a></li>
                                                <li></li>
                                                <li><a href="/tam-va-cham-soc-co-the"><span class='title'>Tắm & chăm sóc cơ thể</span></a></li>
                                                <li><a href="/tinh-dau-tam"><span>Tinh dầu tắm</span></a></li>
                                                <li><a href="/phan-thom-va-nuoc-hoa-cho-tre"><span>Phấn thơm & nước hoa</span></a></li>
                                                <li><a href="/chau-tam-va-phu-kien"><span>Chậu tắm & phụ kiện</span></a></li>
                                                <li><a href="/dau-goi-cho-tre"><span>Dầu gội</span></a></li>
                                                <li><a href="/duong-da-cho-tre"><span>Dưỡng da</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/ta-va-dung-cu-ve-sinh"><span class='title'>Tả & dụng cụ vệ sinh</span></a></li>
                                                <li><a href="/ban-thay-ta"><span>Bàn thay tả</span></a></li>
                                                <li><a href="/ta-vai"><span>Tả vải</span></a></li>
                                                <li><a href="/tui-dung-ta"><span>Túi đựng</span></a></li>
                                                <li><a href="/ta-giay"><span>Tả giấy</span></a></li>
                                                <li><a href="/khan-uot-1962.html"><span>Khăn ướt</span></a></li>
                                                <li></li>
                                                <li><a href="/do-dung-bu-sua-va-an-dam"><span class='title'>Đồ bú sữa</span></a></li>
                                                <li><a href="/thuc-an-dam"><span>Thức ăn dặm</span></a></li>
                                                <li><a href="/binh-sua-va-phu-kien"><span>Bình sữa & phụ kiện</span></a></li>
                                                <li><a href="/do-dung-cho-con-bu"><span>Đồ dùng cho bú</span></a></li>
                                                <li><a href="/ghe-ngoi-an-cho-be"><span>Ghế ngồi ăn</span></a></li>
                                                <li><a href="/sua-bot"><span>Sữa bột</span></a></li>
                                                <li></li>
                                                <li><a href="/ti-ngam-va-phu-kien"><span class='title'>Ti ngậm & phụ kiện</span></a></li>
                                                <li><a href="/phu-kien-cho-tre-so-sinh-1931.html"><span>Phụ kiện</span></a></li>
                                                <li><a href="/ti-ngam"><span>Ti ngậm</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/t8-1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/suc-khoe-va-lam-dep'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-heart"></i>
                                    </span>
                                    <span>
                                        Sức khỏe và làm đẹp
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/tam-va-cham-soc-co-the"><span class='title'>Tắm & chăm sóc cơ thể</span></a></li>
                                                <li><a href="/dung-cu-tam-va-cham-soc-co-the"><span>Dụng cụ tắm</span></a></li>
                                                <li><a href="/dau-massage"><span>Dầu massage</span></a></li>
                                                <li><a href="/sua-duong-am"><span>Sữa dưỡng ẩm</span></a></li>
                                                <li><a href="/tay-te-bao-chet-2092.html"><span>Tẩy tế bào chết</span></a></li>
                                                <li><a href="/cham-soc-nguc"><span>Chăm sóc ngực</span></a></li>
                                                <li><a href="/tay-long"><span>Tẩy lông</span></a></li>
                                                <li><a href="/cham-soc-da-tay"><span>Chăm sóc da tay</span></a></li>
                                                <li></li>
                                                <li><a href="/nuoc-hoa"><span class='title'>Nước hoa</span></a></li>
                                                <li><a href="/nam"><span>Nam</span></a></li>
                                                <li><a href="/nu"><span>Nữ</span></a></li>
                                                <li><a href="/unisex"><span>Unisex</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/dung-cu-cham-soc-sac-dep"><span class='title'>Dụng cụ chăm sóc sắc đẹp</span></a></li>
                                                <li><a href="/may-massage-va-lam-thon-co-the"><span>Máy massage</span></a></li>
                                                <li><a href="/ong-lan-massage-2897.html"><span>Dụng cụ massage chân</span></a></li>
                                                <li><a href="/dung-cu-tay-long-toc-2111.html"><span>Dụng cụ tẩy lông,tóc</span></a></li>
                                                <li><a href="/dung-cu-cham-soc-da-2115.html"><span>Dụng cụ chăm sóc da</span></a></li>
                                                <li><a href="/dung-cu-tao-kieu-toc-2113.html"><span>Dụng cụ tạo kiểu tóc</span></a></li>
                                                <li></li>
                                                <li><a href="/thuc-pham-bo-sung"><span class='title'>Thực phẩm bổ sung</span></a></li>
                                                <li><a href="/thuc-pham-cho-sac-dep-2125.html"><span>Thực phẩm cho sắc đẹp</span></a></li>
                                                <li><a href="/dinh-duong-the-thao-2126.html"><span>Dinh dưỡng thể thao</span></a></li>
                                                <li><a href="/kiem-soat-can-nang-2127.html"><span>Kiểm soát cân nặng</span></a></li>
                                                <li><a href="/cham-soc-suc-khoe-2128.html"><span>Chăm sóc sức khoẻ</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/nuoc-hoa"><span class='title'>Chăm sóc tóc</span></a></li>
                                                <li><a href="/dau-goi-2265.html"><span>Dầu gội</span></a></li>
                                                <li><a href="/dau-xa-2259.html"><span>Dầu xả</span></a></li>
                                                <li><a href="/phu-kien-cham-soc-toc-2171.html"><span>Phụ kiện chăm sóc tóc</span></a></li>
                                                <li><a href="/thuoc-nhuom-toc"><span>Thuóc nhuộm tóc</span></a></li>
                                                <li><a href="/tao-kieu-toc-2263.html"><span>Tạo kiểu tóc</span></a></li>
                                                <li><a href="/trang-diem"><span class='title'>Trang điểm</span></a></li>
                                                <li><a href="/co-the-2179.html"><span>Cơ thể</span></a></li>
                                                <li><a href="/mat"><span>Mắt</span></a></li>
                                                <li><a href="/mat-2181.html"><span>Mặt</span></a></li>
                                                <li><a href="/moi-2182.html"><span>Môi</span></a></li>
                                                <li><a href="/phu-kien"><span>Phụ kiện</span></a></li>
                                                <li><a href="/tay-trang-2186.html"><span>Tẩy trang</span></a></li>
                                                <li><a href="/mong-2187.html"><span>Móng</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/do-gia-dung'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-houseware"></i>
                                    </span>
                                    <span>
                                        Đồ gia dụng
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/thiet-bi-va-phu-kien-do-gia-dung"><span class='title'>Thiết bị & phụ kiện đồ gia dụng</span></a></li>
                                                <li><a href="/thiet-bi-may-lanh"><span>Thiết bị máy lạnh</span></a></li>
                                                <li><a href="/thiet-bi-may-loc-khong-khi"><span>Thiết bị máy lọc không khí</span></a></li>
                                                <li><a href="/thiet-bi-may-pha-ca-phe"><span>Thiết bị máy pha cafe</span></a></li>
                                                <li><a href="/thiet-bi-va-phu-kien-quat"><span>Thiết bị máy quạt</span></a></li>
                                                <li><a href="/thiet-bi-va-phu-kien-tu-dong"><span>Thiết bị tủ đông</span></a></li>
                                                <li><a href="/thiet-bi-va-phu-kien-bep-ga"><span>Thiết bị bếp ga</span></a></li>
                                                <li><a href="/thiet-bi-va-phu-kien-lo-vi-song"><span>Thiết bị lò vi sóng</span></a></li>
                                                <li><a href="/thiet-bi-va-phu-kien-tu-lanh"><span>Thiết bị tủ lạnh</span></a></li>
                                                <li><a href="/phu-kien-lam-banh-nuong"><span>Thiết bị làm bánh</span></a></li>
                                                <li><a href="/phu-kien-va-linh-kien-may-hut-bui"><span>Thiết bị máy hút bụi</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/quat-va-may-nong-lanh"><span class='title'>Quạt & máy nóng lạnh</span></a></li>
                                                <li><a href="/may-nuoc-nong"><span>Máy nước nóng</span></a></li>
                                                <li><a href="/dieu-hoa-khong-khi"><span>Điều hoà không khí</span></a></li>
                                                <li><a href="/xu-ly-khong-khi"><span>Xử lý không khí</span></a></li>
                                                <li><a href="/thiet-bi-thong-gio-2371.html"><span>Thiết bị thông gió</span></a></li>
                                                <li><a href="/quat-2372.html"><span>Quạt</span></a></li>
                                                <li><a href="/may-suoi-am-2373.html"><span>Máy sưởi ấm</span></a></li>
                                                <li><a href="/ban-ui-2386.html"><span class='title'>Bàn ủi</span></a></li>
                                                <li><a href="/may-ui-ep"><span>Máy ủi ép</span></a></li>
                                                <li><a href="/ban-ui-cong-nghiep"><span>Bàn ủi công nghiệp</span></a></li>
                                                <li><a href="/ban-ui-2386.html"><span>Bàn ủi</span></a></li>
                                                <li><a href="/may-giat-va-say"><span class='title'>Máy giặt & máy sấy</span></a></li>
                                                <li><a href="/may-giat-say"><span>Máy giặt,sấy</span></a></li>
                                                <li><a href="/may-giat-2473.html"><span>Máy giặt</span></a></li>
                                                <li><a href="/may-say"><span>Máy sấy</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/gia-dung-nha-be"><span class='title'>Dụng cụ nhà bếp</span></a></li>
                                                <li><a href="/bep-dien"><span>Bếp điện</span></a></li>
                                                <li><a href="/may-rua-chen-2401.html"><span>Máy rửa chén</span></a></li>
                                                <li><a href="/tu-dong-2389.html"><span>Tủ đông</span></a></li>
                                                <li><a href="/bep-ga"><span>Bếp ga</span></a></li>
                                                <li><a href="/lo-vi-song-2403.html"><span>Lò vi sóng</span></a></li>
                                                <li><a href="/lo-nuong-4003.html"><span>Lò nướng</span></a></li>
                                                <li><a href="/may-hut-khoi"><span>Máy hút khói</span></a></li>
                                                <li><a href="/tu-lanh-2394.html"><span>Tủ lạnh</span></a></li>
                                                <li><a href="/tu-hap"><span>Tủ hấp</span></a></li>
                                                <li><a href="/binh-loc-nuoc"><span>Máy lọc nước</span></a></li>
                                                <li><a href="/may-may"><span class='title'>Máy may</span></a></li>
                                                <li><a href="/do-gia-dung-nha-bep"><span class='title'>Đồ gia dụng nhà bếp</span></a></li>
                                                <li><a href="/noi-com-dien-2426.html"><span>Nồi cơm điện</span></a></li>
                                                <li><a href="/noi-nau-da-nang"><span>Nồi nấu đa năng</span></a></li>
                                                <li><a href="/bep-nuong-dien"><span>Bếp nướng điện</span></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/dong-ho-mat-kinh-trang-suc-zippo'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-watch"></i>
                                    </span>
                                    <span>
                                        Đồng hồ - Mắt kính - Zippo
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/mat-kinh"><span class='title'>Mắt kính</span></a></li>
                                                <li><a href="/phu-kien-2479.html"><span>Phụ kiện</span></a></li>
                                                <li><a href="/mat-kinh-thoi-trang"><span>Mắt kính thời trang</span></a></li>
                                                <li><a href="/kinh-mat"><span>Kính mắt</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/trang-suc"><span class='title'>Trang sức</span></a></li>
                                                <li><a href="/trang-suc-tre-em"><span>Trang sức trẻ em</span></a></li>
                                                <li><a href="/trang-suc-nam"><span>Trang sức nam</span></a></li>
                                                <li><a href="/trang-suc-nu"><span>Trang sức nữ</span></a></li>
                                                <li><a href="/unisex-2496.html"><span>Trang sức unisex</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/dong-ho-1527"><span class='title'>Đồng hồ</span></a></li>
                                                <li><a href="/dong-ho-tre-em"><span>Đồng hồ trẻ em</span></a></li>
                                                <li><a href="/dong-ho-nam"><span>Đồng hồ nam</span></a></li>
                                                <li><a href="/dong-ho-nu"><span>Đồng hồ nữ</span></a></li>
                                                <li><a href="/unisex-2500.html"><span>Đồng hồ Unisex</span></a></li>
                                                <li><a href="/bat-lua-zippo"><span class='title'>Bật lửa Zippo</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/dong-ho-1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/do-choi-va-tro-choi'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-game"></i>
                                    </span>
                                    <span>
                                        Đồ chơi và trò chơi
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/do-choi-va-bo-suu-tap-nhan-vat"><span class='title'>Đồ chơi & bộ sưu tập nhân vật</span></a></li>
                                                <li><a href="/mo-hinh-nhan-vat"><span>Mô hình nhân vật</span></a></li>
                                                <li><a href="/bo-suu-tap-nhan-vat"><span>Bộ sưu nhân vật</span></a></li>
                                                <li><a href="/mo-hinh-nhan-vat-mini"><span>Mô hình nhân vật mini</span></a></li>
                                                <li><a href="/nhan-vat-game"><span>Nhân vật game</span></a></li>
                                                <li><a href="/thu-cong-va-nghe-thuat"><span class='title'>Thủ công & nghệ thuật</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul></ul>
                                        </div>
                                        <div class="col">
                                            <ul></ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/do-choi-1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class='sub-menu' href='/the-thao-da-ngoai'>
                                    <span class='icon-wrap'>
                                        <i class="cgnicon icon-sport"></i>
                                    </span>
                                    <span>
                                        Thể thao dã ngoại
                                    </span>
                                </a>
                                <div class='nav-sub'>
                                    <div class="row">
                                        <div class="col">
                                            <ul>
                                                <li><a href="/cac-loai-bai-tap-va-the-hinh"><span class='title'>Tập thể hình</span></a></li>
                                                <li><a href="/may-tap-the-hinh-2848.html"><span>Máy tập thể hình</span></a></li>
                                                <li><a href="/phu-kien-2849.html"><span>Phụ kiện</span></a></li>
                                                <li><a href="/pilates-2852.html"><span>Pilates</span></a></li>
                                                <li><a href="/chay-bo-2853.html"><span>Chạy bộ</span></a></li>
                                                <li><a href="/may-tap-the-luc-2854.html"><span>Máy tập thể lực</span></a></li>
                                                <li><a href="/ta"><span>Tạ</span></a></li>
                                                <li><a href="/yoga-2856.html"><span>Yoga</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/dam-boc-vo-thuat-va-danh-mma"><span class='title'>Đấm bóc & võ thuật</span></a></li>
                                                <li><a href="/thiet-bi-tap-dam-boc-2838.html"><span>Thiết bị đấm bốc</span></a></li>
                                                <li><a href="/dich-dam-2839.html"><span>Đích đấm</span></a></li>
                                                <li><a href="/gang-tay-2840.html"><span>Găng tay</span></a></li>
                                                <li><a href="/boc-tay-2841.html"><span>Bọc tay</span></a></li>
                                                <li><a href="/dich-da-2842.html"><span>Đích đá</span></a></li>
                                                <li><a href="/thiet-bi-tap-vo-thuat-2843.html"><span>Thiết bị tập võ thuật</span></a></li>
                                                <li><a href="/dong-phuc-vo-thuat-2844.html"><span>Đồng phục võ thuật</span></a></li>
                                                <li><a href="/dung-cu-bao-ho-2845.html"><span>Dụng cụ bảo hộ</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <ul>
                                                <li><a href="/phu-kien"><span class='title'>Phụ kiện</span></a></li>
                                                <li><a href="/ong-bom"><span>Ống bơm</span></a></li>
                                                <li><a href="/tui-y-te"><span>Túi y tế</span></a></li>
                                                <li><a href="/thiet-bi-dien-tu"><span>Thiết bị điện tử</span></a></li>
                                                <li><a href="/binh-nuoc-the-thao"><span>Bình thể thao</span></a></li>
                                                <li><a href="/hoat-dong-da-ngoai"><span class='title'>Hoạt động dã ngoại</span></a></li>
                                                <li><a href="/leo-nui-2919.html"><span>Leo núi</span></a></li>
                                                <li><a href="/xe-dap-2920.html"><span>Xe đạp</span></a></li>
                                                <li><a href="/cau-ca"><span>Câu cá</span></a></li>
                                                <li><a href="/golf-2922.html"><span>Golf</span></a></li>
                                                <li><a href="/truot-patin-2923.html"><span>Trượt patin</span></a></li>
                                                <li><a href="/xe-scooter"><span>Xe Scooter</span></a></li>
                                                <li><a href="/ban-sung-2925.html"><span>Bắn súng</span></a></li>
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <img src='https://caganu.com/website/public/images/home/5/da-ngoai-1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <ul id='nav-top-menu'>
                    <li>
                        <span data-toggle="modal" data-target="#Modal-follow-order"><i class="cgnicon icon-location-picker"></i>Chọn địa chỉ muốn nhận hàng</span>
                    </li>
                    <li>
                        <span><i class="cgnicon icon-arrow-down"></i>Sản phẩm đã xem</span>
                    </li>
                    <li><span><i class="cgnicon icon-reward"></i>Tất cả đều chính hãng</span></li>
                    <li>
                        <span><i class="cgnicon icon-refund"></i>30 ngày đổi trả hàng</span>
                    </li>
                    <li>
                        <a href="/bao-chi-tai-tro">
                            <span><i class="cgnicon icon-newspaper"></i>Báo chí & tài trợ</span>
                        </a>
                    </li>
                    <li>
                        <ion-icon name="/public/assets/images/icons/round-list-24px.svg"></ion-icon>
                    </li>
                </ul>
            </div>
        </div>
    </header>
	
		
	