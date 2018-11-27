<div class="container clear">
    <div id="home-banner">
        <div class="home-banner-left">
            <div class="home-side">
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="main-banner">
                                <img class="d-block w-100" src="http://www.bigskychartersfiji.com/wp-content/uploads/2015/01/banner-rods-1.jpg" alt="First slide">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="main-banner">
                                <img class="d-block w-100" src="https://timage.pushauction.com/v3/UserTemplateListing/9606000c-5e18-467f-82b4-4df3ef39ff56/bb3d3b9e-8b25-4e2e-ab95-8926b7e62cb1/banner1.jpg" alt="First slide">
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="main-banner">
                                <img class="d-block w-100" src="https://brokenbowlakecrappie-6009.kxcdn.com/wp-content/uploads/2017/08/brokenbowlakecrappie_HomepageBanner_2017Aug22-1.png" alt="First slide">
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <!-- <div class='home-slide'>
                <img src='https://vcdn.tikicdn.com/ts/banner/e7/5a/57/caa246ac2b89023cbade08888e71c041.jpg'/>
            </div> -->
            <div class='mini'>
                <div class="d-flex flex-row">
                    <div class="p-6">
                        <div class="banner-mini banner-mini-left">
                            <img src='https://cf.shopee.vn/file/8586a9385fe33e060ee810cab8901dbd'/>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="banner-mini banner-mini-right">
                            <img src='https://cf.shopee.vn/file/8586a9385fe33e060ee810cab8901dbd'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="home-banner-right">
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
            <img src='https://vcdn.tikicdn.com/ts/banner/b2/eb/49/02a5b39846d995672eba6e47c46e2231.jpg'/>
        </div> -->
    </div>
</div>
<div class="container">
    <div id="hot-deal">
        <div class='head-hot-deal'>
            <div class="row">
                <div class="col-12">
                    <span class='title'>Deal chớp nhoáng</span>
                </div>
            </div>    
        </div>
        <div class='main-hot-deal'>
            <div class="row title">
                <div class="col-2">
                    <span class='box-head'>Đang bán</span>
                </div>
                <div class="col-6">
                    <span>Kết thúc trong</span>
                    <div class='countdown'>
                        <div id="clockdiv">
                            <!-- <span class="days"></span> -->
                            <span class="hours"></span>
                            <span class="minutes"></span>
                            <span class="seconds"></span>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-4 ml-auto text-right">
                    <a class='see-more' href=''>Xem toàn bộ sản phẩm</a>
                </div> -->
            </div>
            <hr/>
            <div class="row">
                <div class="col-12">
                    <div class="owl-carousel carousel-product owl-theme">
                        <?php foreach($data['deal']['product'] as $deal){ ?>
                            <div class="item">
                        	    <a href='<?php echo $deal->url_string;?>' class="">	                        
                                    <div class="product-item">
                                        <img src='<?php echo $deal->images;?>'/>
                                        <span class='name'><?php echo $deal->product_name;?></span>
                                        <span class='price-sale'><?php echo number_format($deal->price_sale,0,",",".");?> đ</span>
                                        <span class='price'><?php echo number_format($deal->price_old,0,",",".");?> đ</span>
                                        <span class='discount'><?php echo round((((int)$deal->price_old-(int)$deal->price_sale)/(int)$deal->price_old*100)).'%'?></span>
                                    </div>
                                </a>
	                        </div>
                    	<?php }?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div id="box-category">
        <div class='head-category'>
            <div class="row">
                <div class="col-12">
                    <span class='title'>Danh mục nổi bật</span>
                </div>
            </div>    
        </div>
        <div class='main-category'>
            <div class="row">
                <div class="col align-self-center">
                    <a href='/ao-thun-nam'>
                        <img src='https://vn-test-11.slatic.net/original/7d781944005091d9b33309383b259621.jpg_80x80Q100.jpg'/>
                        <span>Áo thun nam</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/dien-thoai-di-dong-4388.html'>
                        <img src='https://vn-test-11.slatic.net/original/a06670707ee5a6a36e5124f410d6a020.jpg_80x80Q100.jpg'/>
                        <span>Điện thoại di động</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/vo-op-lung-macbook'>
                        <img src='https://vn-test-11.slatic.net/original/1221685cac2a8bfaa165e80f9ed8f764.jpg_80x80Q100.jpg'/>
                        <span>Ốp lưng & bao da điện thoại</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/tui-deo-cheo-nam-1518.html'>
                        <img src='https://vn-test-11.slatic.net/p/7/tui-deo-messenger-tien-loi-haras-hr147vnden-5816-22335311-80dd973d55e4807c462d284df5b67a31-catalog.jpg_80x80Q100.jpg'/>
                        <span>Túi đeo chéo nam</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/cay-va-hat-giong'>
                        <img src='https://vn-test-11.slatic.net/p/3/hat-giong-hoa-thuoc-duoc-mix-hat-giong-nhap-tu-khau-duc-7038-64263671-07b05ea135cb06c7c118e761237501c4-catalog.jpg_80x80Q100.jpg'/>
                        <span>Cây & hạt giống</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/can-cau-ca'>
                        <img src='https://vn-test-11.slatic.net/p/6/magideal-winter-ice-fishing-rod-2-sections-high-strength-travel-fishing-pole-model-d-intl-1427-46621653-0477aedbbb91b44d93998eab7a86e8e7-catalog.jpg_80x80Q100.jpg'/>
                        <span>Cần câu cá</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/dong-ho-nu'>
                        <img src='https://vn-test-11.slatic.net/original/fb5e32be92f1bdd3dd0f8cc58f0879da.jpg_80x80Q100.jpg'/>
                        <span>Đồng hồ nữ</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/dong-ho-thong-minh-1493.html'>
                        <img src='https://vn-test-11.slatic.net/p/2/dong-ho-thong-minh-dmt09-4427-5511744-7bb69207ad6cd85aeab042d987c66700-catalog.jpg_80x80Q100.jpg'/>
                        <span>Đồng hồ thông minh</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/vi-nam-1523.html'>
                        <img src='https://vn-test-11.slatic.net/p/7/bo-3-san-pham-vi-da-va-2-that-lung-da-nam-thoi-trang-mpd-sep-1502-0485227-6e93d9fe753145520420d338a662eef4-catalog.jpg_80x80Q100.jpg'/>
                        <span>Ví nam</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/balo-nam-1516.html'>
                        <img src='https://vn-test-11.slatic.net/original/c37032c21cf19c92c58b826883d45320.jpg_80x80Q100.jpg'/>
                        <span>Ba lo nam</span>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col align-self-center">
                    <a href='/chuot-choi-game'>
                        <img src='https://vn-test-11.slatic.net/original/4de32599c6673467e028d2c3055a0724.jpg_80x80Q100.jpg'/>
                        <span>Chuột chơi game</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/loa-di-dong-1466.html'>
                        <img src='https://vn-test-11.slatic.net/original/d6d67423b00a6f9290655f01bf916f1f.jpg_80x80Q100.jpg'/>
                        <span>Loa di động</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/tai-nghe-nhet-tay'>
                        <img src='https://vn-test-11.slatic.net/p/2/tai-nghe-danh-cho-iphone-5-6-5s-6plus-earphones-cao-cap-8063-7637984-3939a76b52cf3163de714cb4da8dc53d-catalog.jpg_80x80Q100.jpg'/>
                        <span>Tai nghe nhét tay</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/dung-cu-cham-soc-da-2115.html'>
                        <img src='https://vn-test-11.slatic.net/p/5/co-quet-mat-na-3478-4478082-bc2f5844d140359a228883e3f9cc1726-catalog.jpg_80x80Q100.jpg'/>
                        <span>Dụng cụ chăm sóc da </span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/ba-lo-nu'>
                        <img src='https://vn-test-11.slatic.net/p/7/balo-nu-thoi-trang-han-quoc-a181gl-kem-0105-85898713-d23ba9d24480a0a4066bd82d8b7dfabe-catalog.jpg_80x80Q100.jpg'/>
                        <span>Ba lô nữ</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/phu-kien-giay'>
                        <img src='https://vn-test-11.slatic.net/p/7/bo-2-mieng-lot-got-got-giay-silicon-em-chan-mls-105-5908-65192182-e0b36e279bad36c3fe9af06a60fd111b-catalog.jpg_80x80Q100.jpg'/>
                        <span>Phụ kiện giày</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/ba-lo-tre-em'>
                        <img src='https://vn-test-11.slatic.net/original/2b63d133053438978b6b26c9108b2cb1.jpg_80x80Q100.jpg'/>
                        <span>Bo la trẻ em</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/cham-soc-vung-da-mat-2316.html'>
                        <img src='https://vn-test-11.slatic.net/p/5/may-rua-mat-massage-5-trong-1-oem-5837-3045157-1b11091de08828e38a404a9c493b022e-catalog.jpg_80x80Q100.jpg'/>
                        <span>Dụng cụ chăm sóc da mặt</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/vong-tay-3727'>
                        <img src='https://vn-test-11.slatic.net/p/8/bo-doi-vong-co-vong-tay-ty-huu-may-man-va-tai-loc-den-4087-02243371-866bf4827a6b291fadad07cdfbe19193-catalog.jpg_80x80Q100.jpg'/>
                        <span>Vòng tay thời trang</span>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href='/kinh-mat-nam'>
                        <img src='https://vn-test-11.slatic.net/p/8/uv400-polarized-glasses-outdoor-sports-driving-sunglasses-blackgrey-frame-os387-sz-intl-1249-86326572-6f6ac197a25bb3598db05f871c476eeb-catalog.jpg_80x80Q100.jpg'/>
                        <span>Mắt kính nam</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div class="group">
        <div class="d-flex flex-row">
            <div class="banner-large" style="background: url(https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/shutterstock_64199689--tojpeg_1408098461475_x2.jpg) no-repeat center center;">
                <!-- <img src="https://s7d2.scene7.com/is/image/dksfed/FSH_0269_Banner_FateBlackRods" alt="Khuyến mãi"> -->
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div id="box-manufacturer">
        <div class='head-manufacturer'>
            <div class="row">
                <div class="col-12">
                    <span class='title'>Thương hiệu chính hãng</span>
                </div>
            </div>    
        </div>
        <div class='main-manufacturer'>
            <div class="row">
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://logos-download.com/wp-content/uploads/2016/06/OPPO_logo.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://logos-download.com/wp-content/uploads/2016/07/Shimano_logo.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRd37afUReteseofh_pksGX2_SkNh7fahobTxuT2olhDHeTFabag'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='http://docauca.tqgrow.com/upload/advert/1392952502Berkley-_Logo.jpg'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='http://vanchien.com/Images/Upload/Manufactory/0/1/131/29fbce23-dd44-490a-90dd-aeb01ce913401469956147.90643-131.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='http://avalonhp.com/wp-content/uploads/2016/04/Okuma-Logo_Long.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://adshow.vn/wp-content/uploads/2017/09/logo-samsung.jpg'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxjn9OMPy4WHfZM2fG9AABhOWdA5MrCT7fhnerPki96iw_Z0X'/>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://zippovietnam.com/wp-content/uploads/2018/05/zippo.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Toshiba_logo.svg/1280px-Toshiba_logo.svg.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='http://pluspng.com/img-png/hitachi-png-hitachi-960.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://goodlogo.com/images/logos/lg_electronics_logo_2486.gif'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://brasol.vn/public/ckeditor/uploads/brasol.vn-logo-sony-sony-logo.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/ASUS_Corporate_Logo.svg/800px-ASUS_Corporate_Logo.svg.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png'/>
                    </a>
                </div>
                <div class="col align-self-center">
                    <a href=''>
                        <img class='' src='https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png'/>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="group">
        <div class="group-header">
            <span class="title">Sản phẩm đề xuất cho bạn</span>
        </div>
        <div class="group-body">
            <div class="row">
                <div class='col'>
                    <div class='item'>
                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                        <span class='price-sale'>14.000 đ</span>
                        <span class='price'>37.000 đ</span>
                        <span class='discount'>62%</span>
                    </div>
                </div>
                <div class='col'>
                    <div class='item'>
                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                        <span class='price-sale'>14.000 đ</span>
                        <span class='price'>37.000 đ</span>
                        <span class='discount'>62%</span>
                    </div>
                </div>
                <div class='col'>
                    <div class='item'>
                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                        <span class='price-sale'>14.000 đ</span>
                        <span class='price'>37.000 đ</span>
                        <span class='discount'>62%</span>
                    </div>
                </div>
                <div class='col'>
                    <div class='item'>
                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                        <span class='price-sale'>14.000 đ</span>
                        <span class='price'>37.000 đ</span>
                        <span class='discount'>62%</span>
                    </div>
                </div>
                <div class='col'>
                    <div class='item'>
                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                        <span class='price-sale'>14.000 đ</span>
                        <span class='price'>37.000 đ</span>
                        <span class='discount'>62%</span>
                    </div>
                </div>
            </div>
            <div class="btn-load-more">
                <button class="btn btn-secondary btn-custom">Xem thêm</button>
            </div>
        </div>
    </div>
</div>