<div class="breadcrumb-wrap">
    <div class="container">
        <ul class="breadcrumb">
            <li><a href="/">Trang chủ</a></li>
            <?php
                foreach($data['product']->category as $key_category => $category){
            ?>
             <li><a href="<?php echo $category->category_url; ?>"><?php echo $category->name; ?></a></li>
            <?php }?>
        </ul>
    </div>
</div>
<div class="product-detail">
    <div class="container">
        <div class="product-main">
            <div class="product-images">
                <div class="product-gallery">
                    <img class="xzoom" id="xzoom-magnific" src="<?php echo $data['product']->images[0]->images; ?>" xoriginal="<?php echo $data['product']->images[0]->images?>">
                </div>
                <div class="product-thumbnail">
                    <div class="owl-carousel carousel-image owl-theme">
                     <?php
                      foreach ($data['product']->images as $img) {
                     ?>
                       <div class="item">
                           <a href="<?php echo $img->images;?>">
                               <img class="xzoom-gallery" width="50" src="<?php echo $img->images;?>" xpreview="<?php echo $img->images;?>">
                           </a>
                       </div>
                      <?php }?>
                    </div>
                </div>
            </div> 
            <div class="product-item">
                <div class="product-info">
                    <div class="row">
                        <div class="col-12">
                            <div class="countdown-block">
                                <div class="flash-sale-header">

                                </div>
                                <div class="flash-sale-end">
                                    Kết thúc sau
                                </div>
                                <div class="timer">
                                    <div class='countdown' data-time="abcd">
                                        <div id="clockdiv">
                                            <!-- <span class="days"></span> -->
                                            <span class="hours"></span>
                                            <span class="minutes"></span>
                                            <span class="seconds"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="product-info-title">
                                <?php echo $data['product']->info->product_name; ?>
                            </div>
                            <div class="product-brand">
                                <!-- <div class="item-row">
                                    <div class="item">
                                        <p class="item-rating">
                                            <span class="rating-box">
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <span class="rating-star-width" style="width : 50%;">
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                </span>
                                            </span>
                                            <a href="#" class="review-url">( Xem <span class="count-review">47</span> đánh giá)</a>
                                        </p>
                                    </div>
                                </div> -->
                                <!-- <div class="item-row">
                                    <div class="top-seller">
                                        <span class="seller-lable">Đứng thứ <span class="top-count">21</span></span> trong <a href="#"><span class="top-name">Top 100 Điện Thoại - Máy Tính Bảng bán chạy tháng này</span></a>
                                    </div>
                                </div> -->
                                <div class="item-row">
                                    <div class="brand">
                                        Thương hiệu: <a href="#" class="brand-name"><?php echo $data['product']->info->cms_manufacturer_name; ?></a>
                                    </div>
                                    <div class="sku">
                                        SKU: <span class="sku-name"><?php echo $data['product']->sku[0]->sku;?></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="product-price-block">
                                <div class="price-product">
                                    <p><?php echo number_format($data['product']->sku[0]->price_sale); ?>đ</p>
                                </div>
                                <!-- <div class="installment">
                                    <span class="installment-lable">Trả góp:</span> Chỉ <span class="price-lable"><span class="price">999.167</span>₫/tháng</span> trong 12 tháng qua thẻ tín dụng <a href="#">(?)</a>
                                </div> -->
                                <div class="discount">
                                    <span class="discount-lable">Tiết kiệm:&nbsp;</span> <span class="discout-percent"><?php 
                                    if($data['product']->sku[0]->price_old>0){
                                        echo round((100-((int)$data['product']->sku[0]->price_sale/(int)$data['product']->sku[0]->price_old*100))).'%';
                                    }
                                    ?></span> ( <span class="price-discount"><?php echo number_format($data['product']->sku[0]->price_old); ?>đ</span>    )
                                </div>
                                <!-- <div class="price-old">
                                    <span class="price-lable">Giá thị trường: </span> <span class="price-old">13.990.000đ</span>
                                </div> -->
                            </div>
                            <?php if(!empty($data['product']->info->text_info)){?>
                            <div class="product-feature">
                            	<?php 
                            	
									$array = explode(';',$data['product']->info->text_info);
									foreach ($array as $key) {
								?>
									<p><?php echo $key?></p>
								<?php }?>
                                <!-- <p>Chính hãng, Nguyên seal, Mới 100%</p>
                                <p>Miễn phí giao hàng toàn quốc</p>
                                <p>Thiết kế: Nguyên khối kim loại</p>
                                <p>Màn hình: 6.21 inch Full HD+ (1080 x 2248 pixels)</p>
                                <p>Camera Trước/Sau: 20MP / 12MP +12MP</p>
                                <p>CPU: Snapdragon 845</p>
                                <p>Bộ Nhớ: 128GB</p>
                                <p>RAM: 6GB</p>
                                <p>Tính năng: Hệ thống nhận diện khuôn mặt với camera hồng ngoại</p> -->
                            </div>
                        	<?php }?>
                            <div id="option">
                                <!-- <div class="color">
                                    <span class="option-lable">Chọn màu: </span>
                                    <span class="color-select">Black</span>
                                    <ul class="color-list">
                                        <li class="color-item"><a href="javascript:void(0)">Blue</a></li>
                                        <li class="color-item"><a href="javascript:void(0)">Red</a></li>
                                        <li class="color-item"><a href="javascript:void(0)">Orange</a></li>
                                        <li class="color-item"><a href="javascript:void(0)">Black</a></li>
                                    </ul>
                                </div>
                                <div class="size">
                                    <span class="option-lable">Chọn kích cỡ: </span>
                                    <ul class="size-list">
                                        <li class="size-item"><a href="javascript:void(0)">28</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">29</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">30</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">32</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">33</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">34</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">35</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">36</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">37</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">38</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">39</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">40</a></li>
                                        <li class="size-item"><a href="javascript:void(0)">41</a></li>
                                    </ul>
                                </div> -->
                                <div class="size">
                                	<?php if (count($data['product']->sku) > 0){ ?>
                                		<span class="option-lable">
                                			<?php 
	                                            if($data['product']->info->option_name!=''){
	                                                echo $data['product']->info->option_name;
	                                            }else{
	                                                echo 'Chọn Size';
	                                            }
                                        	?>
                                        </span>
                                        <ul class="size-list">
                                        	<?php
		                                        $i=0;
		                                        foreach ($data['product']->sku as $size) { 
		                                            $i++;
		                                    ?>
		                                    <li class="size-item">
		                                    	<a href="javascript:void(0)">
		                                    		<span class="product-size-item <?php if($i==1){echo 'product-size-select';}?>" data-price-sale="<?php echo $size->price_sale;?>" data-price-old="<?php echo $size->price_old;?>" data-id="<?php echo $size->id ?>" data-sku="<?php echo $size->sku ?>" >
		                                                <?php if($size->name == ''){echo 'Default';}else{ echo $size->name;}  ?>
		                                                </span>
		                                        </a>
		                                    </li>
		                                    <?php
		                                        }
		                                    ?>
                                        </ul>
                                	<?php } ?>
                                </div>
                            </div>
                            <div class="buy-block">
                                <div class="quantity">
                                    <div class="quantity-lable">
                                        Chọn số lượng:
                                    </div>
                                    <div class="quantity-box">
                                        <span class="quantity-btn">
                                            <button class="quantity-down">-</button>
                                        </span>
                                        <input type="number" class="in-quantity" value="1">
                                        <span class="quantity-btn">
                                            <button class="quantity-up">+</button>
                                        </span>
                                    </div>
                                </div>
                                <div class="buy-box">
                                    <button id="btn-buy" data-id='<?php echo $data['product']->sku[0]->id;?>' data-category='<?php echo end($data['product']->category)->category_id;?>'>Chọn mua</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="seller-container">
                                <div id="seller">
                                    <div class="seller-block">
                                        <div class="seller-item">
                                            <div class="current-seller">
                                                <div class="name">
                                                    <i class="cgnicon icon-store"></i>
                                                    <div class="text">
                                                        <a href="" class="seller-name">Caganu Group</a>
                                                        <div class="text-small">Cam kết chính hãng 100%</div>
                                                    </div>
                                                </div>
                                                <div class="seller-info">
                                                    <button class="btn btn-custom">Xem shop</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="seller-item">
                                            <div class="warranty">
                                                <div class="name">
                                                    <i class="cgnicon icon-warranty"></i>
                                                    <div class="text">
                                                        <a href="" class="seller-name">Thông tin bảo hành</a>
                                                        <div class="text-small"><?php echo $data['product']->info->cms_guarantee_name?></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="seller-block">
                                        <div class="seller-item">
                                            <div class="contact">
                                                <div class="name">
                                                    <i class="icon-cgn-phone"></i>
                                                    <div class="text">
                                                        <a href="" class="seller-name">Liên hệ</a>
                                                        <div class="text-small">Hotline: 0911.439.696</div>
                                                        <div class="text-small">(Miễn phí)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="seller-item">
                                            <div class="email">
                                                <div class="name">
                                                    <i class="icon-cgn-envelop"></i>
                                                    <div class="text">
                                                        <div class="text-small">Email: cskh@caganu.com</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="seller-item">
                                            <div class="seller-with">
                                                <div class="seller-with-item">
                                                    <div class="seller-with-lable">
                                                        Bạn muốn bán hàng cùng Caganu?
                                                    </div>
                                                </div>
                                                <div class="seller-with-item">
                                                    <div class="seller-with-button">
                                                        <a href="">Đăng kí</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="promotion-block">
                                <div class="promotion-title">
                                    DỊCH VỤ & KHUYẾN MÃI LIÊN QUAN
                                </div>
                                <ul class="promotion-description">
                                    <li>
                                        Sản phẩm có thể được giao trong vòng 2 tiếng đến các quận/huyện nội thành tại TP Hồ Chí Minh và Hà Nội khi đặt hàng cùng với các sản phẩm hỗ trợ Giao Hàng 2 Tiếng khác (bao gồm dịch vụ BookCare).
                                        <a href="">Chi tiết</a>
                                    </li>
                                </ul>
                                <div class="more-info">
                                    <p>Xem thêm <a href="">Điện Thoại Smartphone Xiaomi</a> tại Caganu.vn</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="group product-seen">
            <div class="group-header">
                <div class="title">
                    Sản phẩm đã xem
                </div>
            </div>
            <div class="group-body">
                <div class="product-seen">
                    <div class="row">
                        <div class="col-12">
                            <div class="owl-carousel carousel-product owl-theme">
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-9">
                <div class="group">
                    <div class="group-header">
                        <div class="title">
                            Thông tin chi tiết
                        </div>
                    </div>
                    <div class="group-body">
                        <div class="product-content">
                            Thông tin chi tiết sản phẩm
                        </div>
                    </div>
                </div>
                <div class="group">
                    <div class="group-header">
                        <div class="title">
                            Mô tả sản phẩm
                        </div>
                    </div>
                    <div class="group-body">
                        <div class="product-content">
                            <?php if($data['product']->info->marketplace_id == 1){ ?>
                                <div class="header-commitment">
                                    <h4>Cam kết chất lượng từ Tập đoàn Bán lẻ Caganu</h4>
                                    <p>Bồi thường gấp 10 lần nếu chứng minh được sản phẩm kém chất lượng</p>
                                    <p>Sản phẩm này được bán giá Tốt nhất Việt Nam</p>
                                </div>
                            <?php } ?>
                            <div id="detail-focus" hidden></div>
                            <div class="product-content-detail">
                                <?php   echo (preg_replace('/(<[^>]+) style=".*?"/i', '$1', $data['product']->info->content)); ?>
                            </div>
                        </div>
                        <div class="load-more-product">
                            <button class="btn btn-custom" id="LoadMore" data-load="more">Hiện thị tất cả</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="group">
                    <div class="group-header">
                        <div class="title">&nbsp;</div>
                    </div>
                    <div class="group-body">
                        <div class="voucher">
                            voucher or chương trình khuyến mãi
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="group">
            <div class="group-header">
                <div class="title">
                    Sản phẩm cùng loại
                </div>
            </div>
            <div class="group-body">
                <div class="product-brand">
                    <div class="row">
                        <div class="col-12">
                            <div class="owl-carousel carousel-product owl-theme">
                                <!-- <div class="item">
                                    <div class="product-item">
                                        <img src='https://vn-test-11.slatic.net/p/7/non-luoi-trai-nu-thoi-trang-everest-h317-den-5325-40640603-e469fec440f099ff2af97614a1b8a7fa-catalog.jpg_200x200Q100.jpg'/>
                                        <span class='name'>Nón lưỡi trai nữ thời trang Everest H317 (Đen)</span>
                                        <span class='price-sale'>14.000 đ</span>
                                        <span class='price'>37.000 đ</span>
                                        <span class='discount'>62%</span>
                                    </div>
                                </div> -->
                                <?php foreach($data['related'] as $related){?>
                                	<div class="item">
                                		<a href="<?php echo $related->product_url;?>" class="product-item">
                                            <img id="together-viewed-product" class="img-responsive lazy " src="<?php echo $related->images;?>" alt="<?php echo $related->product_name;?>" title="<?php echo $related->product_name;?>"/>
                                            <span class='name'><?php echo $related->product_name;?></span>
                                            <span class='price-sale'><?php echo number_format($related->price_sale,0,",",".");?>đ</span>
                                            <span class='price'><?php echo number_format($related->price_old,0,",",".");?>đ</span>
                                            <span class='discount'><?php 
                                                if($related->price_old>0){
                                                    echo '-'.round((100-((int)$related->price_sale/(int)$related->price_old*100))).' %'; 
                                                }    
                                                ?>
                                            </span>
                                		</a>
                                	</div>
                                <?php }?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="question">
            <div class="group">
                <div class="group-header">
                    <div class="title">
                        Hỏi, đáp về sản phẩm
                    </div>
                </div>
                <div class="group-body">
                    <div id="Questions">
                        <div class="list-question">
                            <div class="item-question">
                                <div class="item-col-left">
                                    <div class="group">
                                        <p class="numquestion">12</p>
                                        Thích
                                    </div>
                                </div>
                                <div class="item-col-right">
                                    <div class="group">
                                        <p class="name">Xin hỏi là phải trả trước bao nhiêu và thủ tục trả góp qua tiki ntn ạ</p>
                                        <p class="answer">Chào bạn, bạn có thể lựa chọn số tiền trả trước tùy theo nhu cầu của mình bạn nhé.  Thủ tục và giấy tờ để hoàn tất hợp đồng trả góp sẽ được nhân viên FE credit liên hệ tư vấn sau khi hồ sơ của bạn được duyệt. Bạn có thể tham khảo thông tin chi tiết tại https://tiki.vn/lp/mua-tra-gop. </p>
                                        <p class="answer-time">Trả lời vào 05/10/2018</p>
                                        <p class="action">
                                            <a href="javascript:void(0)"><span class="icon-cgn-like"></span>Thích</a>                                    
                                            <a href="javascript:void(0)"><span class="icon-cgn-undo"></span>Trả lời</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item-question">
                                <div class="item-col-left">
                                    <div class="group">
                                        <p class="numquestion">12</p>
                                        Thích
                                    </div>
                                </div>
                                <div class="item-col-right">
                                    <div class="group">
                                        <p class="name">Xin hỏi là phải trả trước bao nhiêu và thủ tục trả góp qua tiki ntn ạ</p>
                                        <p class="answer">Chào bạn, bạn có thể lựa chọn số tiền trả trước tùy theo nhu cầu của mình bạn nhé.  Thủ tục và giấy tờ để hoàn tất hợp đồng trả góp sẽ được nhân viên FE credit liên hệ tư vấn sau khi hồ sơ của bạn được duyệt. Bạn có thể tham khảo thông tin chi tiết tại https://tiki.vn/lp/mua-tra-gop. </p>
                                        <p class="answer-time">Trả lời vào 05/10/2018</p>
                                        <p class="action">
                                            <a href="javascript:void(0)"><span class="icon-cgn-like"></span>Thích</a>                                    
                                            <a href="javascript:void(0)"><span class="icon-cgn-undo"></span>Trả lời</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="item-question">
                                <div class="item-col-left">
                                    <div class="group">
                                        <p class="numquestion">12</p>
                                        Thích
                                    </div>
                                </div>
                                <div class="item-col-right">
                                    <div class="group">
                                        <p class="name">Xin hỏi là phải trả trước bao nhiêu và thủ tục trả góp qua tiki ntn ạ</p>
                                        <p class="answer">Chào bạn, bạn có thể lựa chọn số tiền trả trước tùy theo nhu cầu của mình bạn nhé.  Thủ tục và giấy tờ để hoàn tất hợp đồng trả góp sẽ được nhân viên FE credit liên hệ tư vấn sau khi hồ sơ của bạn được duyệt. Bạn có thể tham khảo thông tin chi tiết tại https://tiki.vn/lp/mua-tra-gop. </p>
                                        <p class="answer-time">Trả lời vào 05/10/2018</p>
                                        <p class="action">
                                            <a href="javascript:void(0)"><span class="icon-cgn-like"></span>Thích</a>                                    
                                            <a href="javascript:void(0)"><span class="icon-cgn-undo"></span>Trả lời</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="question-answer-form">
                            <p class="all"><a href="#">Xem tất cả các câu hỏi đã được trả lời</a></p>
                            <p class="form" id="qaForm">
                                <input type="text" name="content" id="content" class="form-control" value="" placeholder="Hãy đặt câu hỏi liên quan đến sản phẩm...">
                                <button type="button" class="btn btn-primary btn-add-question">Gửi câu hỏi</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="comment">
            <div class="group">
                <div class="group-header">
                    <div class="title">KHÁCH HÀNG NHẬN XÉT</div>
                </div>
                <div class="group-body">
                    <div class="evaluator-store">
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="evaluator-item evaluator">
                                <div class="title">Đánh giá trung bình</div>
                                <div class="point-rating">
                                    <span class="point">4.5</span>/5
                                </div>
                                <div class="rating-box">
                                    <p class="item-rating">
                                        <span class="rating-box">
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <span class="rating-star-width" style="width : 50%;">
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                            </span>
                                        </span>
                                    </p>
                                    <p class="rating-number"><a href="#" class="review-url">(<span class="count-review">47</span> nhận xét)</a></p>
                                </div>
                            </div>
                            <div class="evaluator-item detail-evaluator">
                                <div class="item">
                                    <div class="row">
                                        <div class="col-2 text-right">
                                            <span class="number-start">5<i class="icon-cgn-star-full"></i></span>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-left">
                                            <span class="percen">80</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-2 text-right">
                                            <span class="number-start">4<i class="icon-cgn-star-full"></i></span>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-left">
                                            <span class="percen">10</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-2 text-right">
                                            <span class="number-start">3<i class="icon-cgn-star-full"></i></span>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 5%" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-left">
                                            <span class="percen">5</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-2 text-right">
                                            <span class="number-start">2<i class="icon-cgn-star-full"></i></span>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 3%" aria-valuenow="3" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-left">
                                            <span class="percen">3</span>%
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-2 text-right">
                                            <span class="number-start">1<i class="icon-cgn-star-full"></i></span>
                                        </div>
                                        <div class="col-8">
                                            <div class="progress">
                                                <div class="progress-bar bg-warning" role="progressbar" style="width: 2%" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div class="col-2 text-left">
                                            <span class="percen">2</span>%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="evaluator-item add-evaluator">
                                <h5 class="title">Chia sẻ nhận xét về sản phẩm</h5>
                                <button type="button" class="btn btn-default js-customer-button">
                                    Viết nhận xét của bạn
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="evaluator-new">
                        <div class="title">Gửi nhận xét của bạn</div>
                        <div class="d-flex align-items-center justify-content-center">
                            <div class="create-comment">
                                <div class="form-group">
                                    <label for="CommentTitle">1. Đánh giá của bạn về sản phẩm này: </label>
                                    <span class="item-rating">
                                        <span class="rating-box">
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <i class="icon-cgn-star-full"></i>
                                            <span class="rating-star-width" style="width : 50%;">
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                                <i class="icon-cgn-star-full"></i>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                <div class="form-group">
                                    <label for="CommentTitle">2. Tiêu đề nhận xét</label>
                                    <input type="text" class="form-control" id="CommentTitle" placeholder="Nhập tiêu đề nhận xét (không bắt buộc)">
                                </div>
                                <div class="form-group">
                                    <label for="CommentContent">3. Nội dung nhận xét của bạn</label>
                                    <textarea class="form-control" id="CommentContent" rows="3"></textarea>
                                </div>
                                <div class="add-image">
                                    <label for="fileSelector">
                                        <span>Thêm hình ảnh cho sản phẩm nếu có (tối đa 5 hình): </span>
                                        <span class="btn btn-primary btn-sm">Chọn hình</span>
                                    </label>
                                    <p class="error-wrap"><small class="help-block">Chỉ được up tối đa 5 hình</small></p>
                                    <input type="file" multiple="" id="fileSelector" accept="image/*" onchange="readURL(this);" style="display: none;">
                                    <div id="ListImage" class="review-images"></div>
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Thêm nhận xét</button>
                            </div>
                            <div class="product">
                                <div class="d-flex align-items-center">
                                    <div class="image">
                                        <img src="https://pipe.tikicdn.com/cache/215x215/ts/product/53/86/0d/70f0717174bfdefffd8645a00b025d99.jpg" alt="">
                                    </div>
                                    <div class="product-info">
                                        <div class="product-name">
                                            Điện Thoại Xiaomi Mi 8 (128GB/6GB) - Hàng Chính Hãng
                                        </div>
                                        <div class="brand">Thương hiệu: <a href="#"><span class="brandname">Xiaomi</span></a></div>
                                        <div class="rating">
                                            <span class="item-rating">
                                                <span class="rating-box">
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <i class="icon-cgn-star-full"></i>
                                                    <span class="rating-star-width" style="width : 50%;">
                                                        <i class="icon-cgn-star-full"></i>
                                                        <i class="icon-cgn-star-full"></i>
                                                        <i class="icon-cgn-star-full"></i>
                                                        <i class="icon-cgn-star-full"></i>
                                                        <i class="icon-cgn-star-full"></i>
                                                    </span>
                                                </span>
                                                <span class="rating-number"><a href="#" class="review-url">(<span class="count-review">47</span> nhận xét)</a></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="question">
                                    <ul>
                                        <li>Quý khách có thắc mắc về sản phẩm hoặc dịch vụ của Caganu? Quý khách đang muốn khiếu nại hay phản hồi về đơn hàng đã mua?</li>
                                        <li>• Tham khảo thông tin thêm tại <a title="Thông tin hỗ trợ" href="#" target="_blank">Thông tin hỗ trợ</a>.</li>
                                        <li>• Liên hệ hotline <a href="tel:1900-6035">1900-6035</a> (1,000đ/phút), hoặc gửi thông tin về email <a href="mailto:xskh@caganu.vn">cskh@caganu.vn</a> để được hỗ trợ ngay.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="evaluator-content">
                        <div id="EvaluatorContent">
                            <div class="evaluator-content-filter">
                                <p>Tùy chọn xem nhận xét</p>
                                <div class="form-group">
                                    <select class="form-control form-control-sm" id="Usefull">
                                        <option value="">Hữu ích</option>
                                        <option value="">Mới nhất</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control form-control-sm" id="Customer">
                                        <option value="">Đã mua hàng tại Caganu</option>
                                        <option value="">Tất cả nhận xét</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <select class="form-control form-control-sm" id="Rating">
                                        <option value="">Tất cả sao</option>
                                        <option value="">5 sao</option>
                                        <option value="">4 sao</option>
                                        <option value="">3 sao</option>
                                        <option value="">2 sao</option>
                                        <option value="">1 sao</option>
                                        <option value="">Chưa hài lòng</option>
                                    </select>
                                </div>
                            </div>
                            <div class="list-evaluator">
                                <div class="evaluator-item">
                                    <div class="d-flex align-items-center">
                                        <div class="item-col-left">
                                            <div class="image">
                                                <div class="avatar">
                                                    <span class="avatar-letter">TH</span>
                                                </div>
                                            </div>
                                            <p class="name">Nguyễn Tấn Vũ</p>
                                            <p class="from">
                                                đến từ <span>Hồ Chí Minh</span>
                                            </p>
                                            <p class="ago">một tuần trước</p>
                                        </div>
                                        <div class="item-col-right">
                                            <div class="infomation">
                                                <div class="rating-box">
                                                    <p class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 100%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                    </p>
                                                </div>
                                                <p class="title">Cực kỳ hài lòng</p>
                                                <p class="buy-already"><i class="icon-cgn-shield"></i>Đã mua sản phẩm này tại Caganu</p>
                                                <p class="detail">Các bạn cứ yên tâm mua đi.mình mới mua được 5 ngày.</p>
                                                <div class="images">
                                                    <div class="img" style="background-image: url('https://vcdn.tikicdn.com/ts/review/c4/52/57/5db92adcf5be0b069377703c38d0d977.jpg');"></div>
                                                    <div class="img" style="background-image: url('https://vcdn.tikicdn.com/ts/review/c4/52/57/5db92adcf5be0b069377703c38d0d977.jpg');"></div>
                                                    <div class="img" style="background-image: url('https://vcdn.tikicdn.com/ts/review/c4/52/57/5db92adcf5be0b069377703c38d0d977.jpg');"></div>
                                                </div>
                                                <div class="action">
                                                    <div class="like">
                                                        <button class="btn btn-secondary btn-sm"><i class="icon-cgn-like"></i> Gửi cảm ơn</button>
                                                    </div>
                                                    <div class="react">
                                                        <a href="#">Gửi trả lời</a>
                                                    </div>
                                                    <div class="share">
                                                        <a href="#">Chia sẻ lên Facebook</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<input type="hidden" id="url" value="<?php echo $_SERVER['REQUEST_URI'];?>">
<input type="hidden" id="productSku" name="productSku" value="<?php echo $data['product']->sku[0]->sku; ?>">
<input type="hidden" id="productId" name="productId" value="<?php echo $data['product']->info->product_id; ?>">
<input type="hidden" id="productName" name="productName" value="<?php echo $data['product']->info->product_name; ?>">
<input type="hidden" id="productImage" name="productImage" value="<?php echo $data['product']->images[0]->images; ?>">
<input type="hidden" id="productPriceSale" name="productPriceSale" value="<?php echo $data['product']->sku[0]->price_sale; ?>" text="<?php echo number_format($data['product']->sku[0]->price_sale).'đ'; ?>">
<input type="hidden" id="productPriceOld" name="productPriceOld" value="<?php echo $data['product']->sku[0]->price_old; ?>" text="<?php echo number_format($data['product']->sku[0]->price_old).'đ'; ?>">
<input type="hidden" id="productPriceSave" name="productPriceOldSave" value="<?php echo round((100-((int)$data['product']->sku[0]->price_sale/(int)$data['product']->sku[0]->price_old*100))).'%'; ?>">
<input type="hidden" id="amount" name="amount" value="1">



