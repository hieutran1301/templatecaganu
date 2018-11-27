<div class="breadcrumb-wrap">
    <div class="container">
        <ul class="breadcrumb">
            <li><a href="/">Trang chủ</a></li>
            <!-- <li><a href="#">Máy vi tính và laptop</a></li>
            <li><a href="#">Điện thoại smartphone</a></li> -->
             <?php
                for ($i=0; $i < count($data['result']['recursive']) ; $i++) { ?>
                    <li><a href="<?php echo $data['result']['recursive'][$i]->url_string; ?>"><?php echo $data['result']['recursive'][$i]->name; ?></a></li>
            <?php }?>
        </ul>
    </div>
</div>
<div class="container">
    <div class="category-block">
        <div class="category">
            <div class="box-left">
                <div class="group">
                    <div class="group-body">
                        <div class="side-bar">
                            <div class="panel-group">
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            Danu mục sản phẩm
                                        </div>
                                    </div>
                                    <div class="panel-collapse">
                                        <div class="list-group">
                                        <?php foreach($data['result']['menu']->parent as $parent){?>
                                            <div class="list-group-item is-parent">
                                                <a href="<?php echo $parent->url_string;?>"><?php echo $parent->name;?></a>
                                            </div>
                                            <?php if( ($parent->name == $data['result']['info']->name) && ($parent->id==$data['result']['info']->id)) {?>
                                                <?php foreach ($data['result']['menu']->child as $child) {?>
                                                    <div class="list-group-item is-child">
                                                        <a href="<?php echo $child->url_string;?>"><?php echo $child->name;?></a>
                                                    </div>
                                                <?php }?>
                                            <?php }?>
                                        <?php }?>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            Đánh giá
                                        </div>
                                    </div>
                                    <div class="panel-collapse">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <a href="#">
                                                    <p class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 80%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                        <span>( ít nhất 4 sao)</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="list-group-item">
                                            <a href="#">
                                                    <p class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 60%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                        <span>( ít nhất 3 sao)</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="list-group-item">
                                            <a href="#">
                                                    <p class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 40%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                        <span>( ít nhất 2 sao)</span>
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="list-group-item">
                                            <a href="#">
                                                    <p class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 20%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                        <span>( ít nhất 1 sao)</span>
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <!-- <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            Giá
                                        </div>
                                    </div>
                                    <div class="panel-collapse">
                                        <div class="list-group">
                                            <div class="list-group-item">
                                                <a href="#">Dưới 1 triệu (32)</a>
                                            </div>
                                            <div class="list-group-item">
                                                <a href="#">Từ 1 triệu đến 3 triệu (32)</a>
                                            </div>
                                            <div class="list-group-item">
                                                <a href="#">Từ 3 triệu đến 10 triệu (32)</a>
                                            </div>
                                            <div class="list-group-item">
                                                <a href="#">Từ 10 triệu đến 20 triệu (32)</a>
                                            </div>
                                            <div class="list-group-item">
                                                <a href="#">Trên 20 triệu (2)</a>
                                            </div>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            Thương hiệu
                                        </div>
                                    </div>
                                    <div class="panel-collapse">
                                        <div class="list-group">
                                            <?php foreach($data['result']['manufacturer'] as $key => $manufacturer){
                                                if($key<10){?>
                                                <div class="list-group-item">
                                                    <a href="?manufacturer=<?php echo $manufacturer->id;?>"><?php echo $manufacturer->name;?></a>
                                                </div>
                                            <?php } }?>
                                            <div class="js-more" id="item-load-more">
                                                <?php foreach($data['result']['manufacturer'] as $key => $manufacturer){
                                                    if($key>9){?>
                                                        <div class="list-group-item">
                                                            <a href="?manufacturer=<?php echo $manufacturer->id;?>"><?php echo $manufacturer->name;?></a>
                                                        </div>
                                                <?php } }?>
                                            </div>
                                            <div class="list-group-item load-more">
                                                <span id="load-more" data-toggle = "false" >Xem thêm</span>
                                                <i class="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title">
                                            Nhà cung cấp
                                        </div>
                                    </div>
                                    <div class="panel-collapse">
                                        <div class="list-group">
                                            <?php foreach($data['result']['marketplace'] as $key => $marketplace){ if($key<10){?>
                                                
                                                <div class="list-group-item">
                                                    <a href="?page=1&marketplace=<?php echo $marketplace->marketplace_id;?>"><?php echo $marketplace->marketplace_name;?></a>
                                                </div>
                                            <?php } }?>
                                            <div class="js-more" id="item-load-more">
                                                <?php foreach($data['result']['marketplace'] as $key => $marketplace){
                                                if($key<9){?>
                                                <div class="list-group-item">
                                                    <a href="?page=1&marketplace=<?php echo $marketplace->marketplace_id;?>"><?php echo $marketplace->marketplace_name;?></a>
                                                </div>
                                                <?php } }?>
                                            </div>
                                            <div class="list-group-item load-more">
                                                <span class="btn-load-more" data-toggle = "false" >Xem thêm</span>
                                                <i class="fas fa-angle-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div class="box-right">
                <div class="group">
                    <div class="group-body">
                        <div class="heading">
                            <span class="title"><?php echo $data['result']['info']->name; ?></span>
                            <span class="count-result">: <?php echo $data['result']['total_product']; ?> sản phẩm</span>
                        </div>
                        <div class="banner-block">
                            <!-- banner category -->
                            <div class="banner-group banner-category">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2" class=""></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item">
                                            <div class="main-banner">
                                                <img class="d-block w-100" src="http://www.bigskychartersfiji.com/wp-content/uploads/2015/01/banner-rods-1.jpg" alt="First slide">
                                            </div>
                                        </div>
                                        <div class="carousel-item active">
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
                            <!-- end banner category -->
                            <!-- banner static -->
                            <div class="banner-group banner-static">
                                <div class="banner-brand-block">
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/8c/7e/a2/8a8c7891b62a4367a19404c897ec8fa0.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/7f/81/5c/42a69de094f17d099f9377d75be1b220.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/e6/65/a1/71540bc1af670dfd3c4fcb014974ea39.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/83/6f/bd/1655b5860167c23d8e7c3aebb85d0726.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/e0/f6/3d/24d6e8f0d77e4676e2d9e8848ed5f783.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/media/upload/2018/03/09/544bf0c4a533bffdb1f573e177474c3e.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/8e/ea/4c/e5c6372c1e7304c3a92bbd3b62b0616d.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/4c/4f/60/569bb584981a907cf414340340699f44.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/4b/bc/de/5fafcaba39e6a2cf8abda4519e8c5c35.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/4e/04/bd/b0d36d4f384b41d20af3d859975ca6c8.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/98/33/17/654757dd0e27bed656cf841a64306825.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/c5/20/8a/10bac60c5e8b42ec5ce5b354bb6e02df.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/00/31/91/4173526682285746c7ec770c80bd6515.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/6b/7c/ef/f280c0f08d9abaf45d4ad7e3646b3d7c.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/94/59/c1/a113901c3b2d7fc1f2275d26e0818bb6.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/banner/55/9f/fc/11ad81857a2a6d9777f27565f793bb2f.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="banner-brand-item">
                                                <a href="#">
                                                    <img src="https://vcdn.tikicdn.com/ts/categoryblock/10/40/7d/4b42854fb4da2361ef98936a6400818a.jpg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end banner static -->
                        </div>
                        <!-- option -->
                        <div class="option-block">
                            <?php
                            $queries = array();
                            parse_str($_SERVER['QUERY_STRING'], $queries);
                            if(!isset($queries['sort'])){
                                $queries['sort']='';
                            }
                            if(!isset($queries['manufacturer'])){
                                $queries['manufacturer']='';
                            }
                            if(!isset($queries['marketplace'])){
                                $queries['marketplace']='';
                            }
                            if(!isset($queries['option'])){
                                $queries['option']='';
                            }
                            $data_pagination = array(
                                'sort'          => $queries['sort'],
                                'manufacturer'  => $queries['manufacturer'],
                                'marketplace'   => $queries['marketplace'],
                                'option'        => $queries['option']
                            );
                            $url_pagination = http_build_query($data_pagination);
                            $current = $data['result']['pagination']->current_page;
                            $total   = $data['result']['pagination']->total_page;
                            $sort = isset($_GET['sort']) ? $_GET['sort'] : '';
                            ?>
                            <div class="row">
                                <div class="col-8">
                                    <div class="list-option">
                                        <span class='list-title'>Xem ưu tiên:</span>
                                        <ul class='sort-list'>
                                            <li>
                                                <a href="/<?php echo $_GET['_route_'];?>?page=1&sort=new">HÀNG MỚI</a>
                                            </li>
                                            <!-- <li>
                                                <a href="javascript:void(0);">BÁN CHẠY</a>
                                            </li> -->
                                            <li>
                                                <a href="/<?php echo $_GET['_route_'];?>?page=1&sort=price-DESC">GIÁ CAO</a>
                                            </li>
                                            <li>
                                                <a href="/<?php echo $_GET['_route_'];?>?page=1&sort=price-ASC">GIÁ THẤP</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <!-- <div class="col-4">
                                    <div class="search-in-category">
                                        <div class="search-text">
                                            <input type="text" placeholder="Tìm trong Điện Thoại - Máy Tính Bảng">
                                        </div>
                                        <div class="btn-search">
                                            <button id="search-in-category" class="btn"><i class='icon-cgn-search'></i></button>
                                        </div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <!-- end option -->
                        <div class="list-product">
                            <?php if(!empty($data['result']['product'])){ ?>
                                <div class="row">
                                <?php foreach ($data['result']['product'] as $product) {?>
                                    <div class="col-3">
                                        <div class="product-item">
                                            <a href="/<?php echo $product->product_url; ?>">
                                                <div class="image">
                                                    <img src="<?php echo $product->images;?>" alt="">
                                                </div>
                                                <span class="title"><?php echo $product->product_name; ?></span>
                                                <p class="price-sale">
                                                    <?php if($product->price_sale < $product->price_old){ ?>
                                                        <span class="price-final"><?php echo number_format($product->price_sale); ?> đ</span>
                                                        <span class="price-regular"><?php echo number_format($product->price_old); ?> đ</span>
                                                        <span class="sale-tag">-<?php echo round((100-((int)$product->price_sale/(int)$product->price_old*100))); ?>%</span>
                                                    <?php }else{ ?>
                                                        <span class="price-final"><?php echo number_format($product->price_old); ?> đ</span>
                                                    <?php } ?>
                                                </p>
                                                <!-- <p class="price-tag">
                                                    <span class="tag">Nhập mã: <span>HIJUKJL</span></span>
                                                    <span class="price">Chỉ còn: <span>19.000.000đ</span></span>
                                                </p> -->
                                                <!-- <div class="review-wrap">
                                                    <span class="item-rating">
                                                        <span class="rating-box">
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <i class="icon-cgn-star-full"></i>
                                                            <span class="rating-star-width" style="width : 40%;">
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                                <i class="icon-cgn-star-full"></i>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span class="review">(43 đánh giá)</span>
                                                </div>
                                                <div class="installment">
                                                    <div class="installment-price">Trả góp: Chỉ 143.000đ/tháng</div>
                                                </div> -->
                                            </a>
                                        </div>
                                    </div>
                                <?php }?>
                                </div>
                            <?php }else{?>
                                <div class="row">
                                    <div class="col-11">
                                        <p>Không tìm thấy sản phẩm</p>
                                    </div>
                                </div>
                            <?php }?>
                        </div>
                    </div>
                    <!-- pagination -->
                    <div class="pagination pull-right">
                        <ul class="list-page">
                             <li>
                                <a href="/<?php echo $_GET['_route_'];?>?page=1&sort=<?php echo $sort;?>" class="pre"><i class="icon-cgn-arrow-left" title="Trang đầu"></i></a>
                            </li>
                            <?php
                                    if( $total <= 10){
                                        for ($i=1; $i <= $total ; $i++) { 
                                            if($i == $current){ ?>
                                                <li>
                                                    <a class="select-pagi" href="/<?php echo $_GET['_route_'];?>?page=<?php echo $i.'&'.$url_pagination; ?>">
                                                        <?php echo $i; ?>
                                                    </a>
                                                </li>    
                                                <?php 
                                            }else{    
                                                ?>
                                                <li>
                                                    <a href="/<?php echo $_GET['_route_'];?>?page=<?php echo $i.'&'.$url_pagination; ?>">
                                                        <?php echo $i; ?>
                                                    </a>
                                                </li>
                                                <?php 
                                            }
                                        }
                                    }else{
                                        if($current < 8){
                                            for ($i=1; $i <= 10 ; $i++) { 
                                                if($i == $current){
                                                    $select_pagi='current';
                                                }else{
                                                    $select_pagi='';
                                                }
                                                ?>
                                                <li>
                                                    <a class="<?php echo $select_pagi;?>" href="/<?php echo $_GET['_route_'];?>?page=<?php echo $i.'&'.$url_pagination; ?>">
                                                        <?php echo $i; ?>
                                                    </a>
                                                </li>
                                                <?php            
                                            }
                                        }else{
                                            if($current > $total - 4){
                                                for ($i=$total - 10; $i <= $total ; $i++) { 
                                                    if($i == $current){ 
                                                        $select_pagi='current';
                                                    }else{
                                                        $select_pagi='';
                                                    }
                                                    ?>
                                                    <li>
                                                        <a class="<?php echo $select_pagi;?>" href="/<?php echo $_GET['_route_'];?>?page=<?php echo $i.'&'.$url_pagination; ?>">
                                                            <?php echo $i; ?>
                                                        </a>
                                                    </li>        
                                                    <?php
                                                }
                                            }else{
                                                for ($i=$current - 5; $i <= $current + 4 ; $i++) { 
                                                    if($i == $current){ 
                                                        $select_pagi='current';
                                                    }else{
                                                        $select_pagi='';
                                                    }
                                                    ?>
                                                    <li>
                                                        <a class="<?php echo $select_pagi;?>" href="/<?php echo $_GET['_route_'];?>?page=<?php echo $i.'&'.$url_pagination; ?>">
                                                            <?php echo $i; ?>
                                                        </a>
                                                    </li>        
                                                    <?php    
                                                }
                                            }
                                        }
                                    }
                                    ?>
                            <li>
                                <a href="/<?php echo $_GET['_route_'];?>?page=<?php echo $total.'&'.$url_pagination; ?>" class="pre"><i class="icon-cgn-arrow-right" title="Trang cuối"></i></a>
                            </li>
                        </ul>
                    </div>
                    <!-- end pagination -->
                </div>
            </div>
        </div>
    </div>
</div>